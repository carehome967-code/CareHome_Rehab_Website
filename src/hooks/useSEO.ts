import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  type?: string;
}

export function useSEO({ title, description, keywords, canonical, type = "website" }: SEOProps) {
  useEffect(() => {
    // Set title
    document.title = title;

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Set meta keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords);
    }

    // Set canonical link
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement("link");
        linkCanonical.setAttribute("rel", "canonical");
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute("href", canonical);
    }

    // Set Open Graph tags
    const ogTags = [
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ];

    ogTags.forEach((tagObj) => {
      const selector = tagObj.property 
        ? `meta[property="${tagObj.property}"]` 
        : `meta[name="${tagObj.name}"]`;
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        if (tagObj.property) tag.setAttribute("property", tagObj.property);
        if (tagObj.name) tag.setAttribute("name", tagObj.name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", tagObj.content);
    });

  }, [title, description, keywords, canonical, type]);
}
