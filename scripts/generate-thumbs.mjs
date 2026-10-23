import http from 'http';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const videosDir = path.resolve(__dirname, '../src/assets/gallery/videos');
const thumbsDir = path.resolve(__dirname, '../src/assets/gallery/thumbnails');

if (!fs.existsSync(thumbsDir)) {
  fs.mkdirSync(thumbsDir, { recursive: true });
}

const videoFiles = fs.readdirSync(videosDir).filter(f => f.toLowerCase().endsWith('.mp4'));
console.log(`Found ${videoFiles.length} videos to process.`);

const PORT = 4567;
const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  if (url.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head><title>Thumbnail Generator</title></head>
      <body>
        <h1>Generating Video Thumbnails...</h1>
        <div id="status">Starting...</div>
        <canvas id="canvas" style="display:none;"></canvas>
        <script>
          const videos = ${JSON.stringify(videoFiles)};
          const statusDiv = document.getElementById('status');
          const canvas = document.getElementById('canvas');
          const ctx = canvas.getContext('2d');

          async function processAll() {
            for (let i = 0; i < videos.length; i++) {
              const videoName = videos[i];
              statusDiv.innerText = 'Processing (' + (i + 1) + '/' + videos.length + '): ' + videoName;
              try {
                await processVideo(videoName);
              } catch (err) {
                console.error('Error on ' + videoName, err);
                await fetch('/log?msg=' + encodeURIComponent('Error processing ' + videoName + ': ' + err.message));
              }
            }
            statusDiv.innerText = 'All done!';
            await fetch('/done');
          }

          function processVideo(name) {
            return new Promise((resolve, reject) => {
              const video = document.createElement('video');
              video.src = '/video/' + encodeURIComponent(name);
              video.muted = true;
              video.crossOrigin = 'anonymous';
              video.playsInline = true;

              const timeout = setTimeout(() => {
                video.src = '';
                reject(new Error('Timeout loading video ' + name));
              }, 15000);

              video.addEventListener('loadedmetadata', () => {
                const seekTime = Math.min(1.0, video.duration > 1 ? 1.0 : (video.duration / 2));
                video.currentTime = seekTime;
              });

              video.addEventListener('seeked', async () => {
                clearTimeout(timeout);
                try {
                  const width = video.videoWidth || 640;
                  const height = video.videoHeight || 360;
                  const scale = Math.min(1, 640 / width);
                  canvas.width = Math.round(width * scale);
                  canvas.height = Math.round(height * scale);

                  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                  const dataUrl = canvas.toDataURL('image/jpeg', 0.82);

                  await fetch('/save?name=' + encodeURIComponent(name), {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ data: dataUrl })
                  });

                  video.src = '';
                  resolve();
                } catch (e) {
                  reject(e);
                }
              });

              video.addEventListener('error', (e) => {
                clearTimeout(timeout);
                reject(new Error('Video error: ' + (video.error ? video.error.message : 'Unknown')));
              });

              video.load();
            });
          }

          window.onload = processAll;
        </script>
      </body>
      </html>
    `);
    return;
  }

  if (url.pathname.startsWith('/video/')) {
    const filename = decodeURIComponent(url.pathname.replace('/video/', ''));
    const filePath = path.join(videosDir, filename);
    if (fs.existsSync(filePath)) {
      const stat = fs.statSync(filePath);
      res.writeHead(200, {
        'Content-Type': 'video/mp4',
        'Content-Length': stat.size,
        'Accept-Ranges': 'bytes'
      });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
    return;
  }

  if (url.pathname === '/save' && req.method === 'POST') {
    const videoName = url.searchParams.get('name');
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const { data } = JSON.parse(body);
        const base64Data = data.replace(/^data:image\/jpeg;base64,/, '');
        const thumbName = videoName.replace(/\.mp4$/i, '.jpg');
        const outPath = path.join(thumbsDir, thumbName);
        fs.writeFileSync(outPath, base64Data, 'base64');
        console.log(`Saved thumbnail: ${thumbName}`);
        res.writeHead(200);
        res.end('OK');
      } catch (err) {
        console.error('Save error:', err);
        res.writeHead(500);
        res.end(err.message);
      }
    });
    return;
  }

  if (url.pathname === '/log') {
    console.log('[Browser Log]', url.searchParams.get('msg'));
    res.writeHead(200);
    res.end('OK');
    return;
  }

  if (url.pathname === '/done') {
    console.log('All thumbnails generated successfully!');
    res.writeHead(200);
    res.end('OK');
    setTimeout(() => {
      server.close();
      process.exit(0);
    }, 1000);
    return;
  }

  res.writeHead(404);
  res.end('Not found');
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const cmd = `"${chromePath}" --headless --disable-gpu --no-sandbox http://localhost:${PORT}`;
  console.log(`Launching Chrome: ${cmd}`);
  exec(cmd, (err) => {
    if (err) {
      console.error('Chrome execution error:', err);
    }
  });
});
