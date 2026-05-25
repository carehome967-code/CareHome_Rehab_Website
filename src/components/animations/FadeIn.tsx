import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  fullWidth?: boolean;
}

export const FadeIn = ({
  children,
  delay = 0,
  direction = "up",
  fullWidth = false,
  className = "",
  ...rest
}: FadeInProps) => {
  const directionOffset = 30;

  const y = direction === "up" ? directionOffset : direction === "down" ? -directionOffset : 0;
  const x = direction === "left" ? directionOffset : direction === "right" ? -directionOffset : 0;

  // Remove fullWidth before spreading into the motion div to prevent DOM errors
  // as Framer Motion passes all custom props to the underlying HTML element 
  // if it's not a recognized styling or motion prop.
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom ease-out
      }}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({
  children,
  delayChildren = 0.1,
  staggerChildren = 0.1,
  className = "",
  ...rest
}: HTMLMotionProps<"div"> & { delayChildren?: number; staggerChildren?: number }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
