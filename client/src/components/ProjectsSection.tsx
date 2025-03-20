import { useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInAnimation, staggerChildren } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import { Project } from "@/lib/types";

// Sample project data
const projectsData: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured online store with payment processing and inventory management.",
    image: "",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Development"
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A productivity application for teams to manage tasks, deadlines, and collaboration.",
    image: "",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Development"
  },
  {
    id: "3",
    title: "Fitness Tracker",
    description: "Mobile application for tracking workouts, nutrition, and fitness progress.",
    image: "",
    tags: ["React Native", "GraphQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Mobile Apps"
  }
];

type Category = "All" | "Web Development" | "Mobile Apps" | "Machine Learning";

const ProjectsSection = () => {
  const [category, setCategory] = useState<Category>("All");

  const filteredProjects = category === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === category);

  return (
    <section id="projects" className="py-20 px-4 bg-muted">
      <motion.div 
        className="container mx-auto max-w-6xl"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren(0.1)}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 text-primary text-center"
          {...fadeInAnimation(0.1)}
        >
          Projects
        </motion.h2>
        <motion.p 
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          {...fadeInAnimation(0.2)}
        >
          A collection of my most significant work. Each project represents a unique challenge and solution.
        </motion.p>

        {/* Project Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          {...fadeInAnimation(0.3)}
        >
          {(["All", "Web Development", "Mobile Apps", "Machine Learning"] as Category[]).map((cat) => (
            <Button
              key={cat}
              variant={category === cat ? "default" : "outline"}
              onClick={() => setCategory(cat)}
              className={`rounded-full ${category === cat ? '' : 'bg-muted text-primary hover:bg-primary/20'}`}
            >
              {cat}
            </Button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerChildren(0.1)}
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} {...fadeInAnimation()}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          {...fadeInAnimation(0.5)}
        >
          <Button asChild>
            <a href="#" className="inline-flex items-center gap-2">
              View All Projects
              <ArrowRight size={16} />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
