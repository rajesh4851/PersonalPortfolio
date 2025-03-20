import { TimelineItem } from "@/components/ui/timeline-item";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { fadeInAnimation } from "@/lib/animations";
import { Experience } from "@/lib/types";

// Sample experience data
const experiencesData: Experience[] = [
  {
    id: "1",
    title: "Senior Developer",
    company: "TechCorp Inc.",
    period: "2021 - Present",
    description: "Led the development of the company's flagship product, managing a team of 5 developers. Implemented CI/CD pipelines and improved code quality standards.",
    skills: ["React", "TypeScript", "Team Leadership"]
  },
  {
    id: "2",
    title: "Web Developer",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2021",
    description: "Developed front-end interfaces for client websites and applications. Collaborated with designers to implement responsive, accessible user interfaces.",
    skills: ["JavaScript", "CSS", "Responsive Design"]
  },
  {
    id: "3",
    title: "Junior Developer",
    company: "StartUp Innovations",
    period: "2016 - 2018",
    description: "Assisted in building and maintaining web applications. Learned development best practices and gained experience with modern web technologies.",
    skills: ["HTML", "JavaScript", "PHP"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <motion.div 
        className="container mx-auto max-w-5xl"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 text-primary text-center"
          {...fadeInAnimation(0.1)}
        >
          Work Experience
        </motion.h2>
        <motion.p 
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          {...fadeInAnimation(0.2)}
        >
          My professional journey and the companies I've had the privilege to work with.
        </motion.p>

        {/* Timeline */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-primary/30 before:content-['']">
          {experiencesData.map((experience, index) => (
            <TimelineItem key={experience.id} experience={experience} index={index} />
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          {...fadeInAnimation(0.5)}
        >
          <Button variant="link" className="text-primary hover:text-white transition-colors flex items-center justify-center gap-2">
            <span>View Full Resume</span>
            <Download size={16} />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
