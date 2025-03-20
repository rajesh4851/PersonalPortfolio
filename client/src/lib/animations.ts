export const fadeInAnimation = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.6,
    ease: "easeOut",
    delay: delay
  }
});

export const staggerChildren = (staggerTime: number = 0.1) => ({
  animate: {
    transition: {
      staggerChildren: staggerTime
    }
  }
});

export const hoverScale = {
  whileHover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};
