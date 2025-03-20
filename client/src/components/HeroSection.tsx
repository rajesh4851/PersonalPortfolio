import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/lib/animations";

const HeroSection = () => {
  return (
    <section id="home" className="py-20 md:py-32 px-4">
      <motion.div 
        className="container mx-auto max-w-5xl"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div 
            className="md:w-1/2"
            {...fadeInAnimation(0.1)}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
              AI Data Engineering
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-primary">
              i made it easy!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I build exceptional digital experiences with clean, efficient code. 
              Focused on creating maintainable solutions for complex problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            {...fadeInAnimation(0.3)}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/10 to-primary/30 rounded-full flex items-center justify-center border border-primary/20">
              <div className="w-56 h-56 md:w-72 md:h-72 bg-background rounded-full flex items-center justify-center">
                <div className="text-6xl md:text-7xl text-primary">
                  <Code size={64} strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
