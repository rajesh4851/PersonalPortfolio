import { SkillTag } from "@/components/ui/skill-tag";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInAnimation, staggerChildren } from "@/lib/animations";
import { Code, Server, Wrench } from "lucide-react";
import { Skill, SkillCategory } from "@/lib/types";

// Sample skills data
const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "code",
    skills: [
      { name: "React", icon: '<i class="fab fa-react"></i>' },
      { name: "JavaScript", icon: '<i class="fab fa-js"></i>' },
      { name: "Vue.js", icon: '<i class="fab fa-vuejs"></i>' },
      { name: "SASS", icon: '<i class="fab fa-sass"></i>' },
      { name: "HTML5", icon: '<i class="fab fa-html5"></i>' },
      { name: "CSS3", icon: '<i class="fab fa-css3"></i>' }
    ]
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", icon: '<i class="fab fa-node-js"></i>' },
      { name: "MongoDB", icon: '<i class="fas fa-database"></i>' },
      { name: "PostgreSQL", icon: '<i class="fas fa-database"></i>' },
      { name: "Python", icon: '<i class="fab fa-python"></i>' },
      { name: "Firebase", icon: '<i class="fas fa-fire"></i>' },
      { name: "AWS", icon: '<i class="fab fa-aws"></i>' }
    ]
  },
  {
    title: "Tools & Others",
    icon: "tools",
    skills: [
      { name: "Git", icon: '<i class="fab fa-git-alt"></i>' },
      { name: "Docker", icon: '<i class="fab fa-docker"></i>' },
      { name: "Jest", icon: '<i class="fas fa-vial"></i>' },
      { name: "CLI", icon: '<i class="fas fa-terminal"></i>' },
      { name: "CI/CD", icon: '<i class="fas fa-sitemap"></i>' },
      { name: "Figma", icon: '<i class="fab fa-figma"></i>' }
    ]
  }
];

// Component to render skills category
const SkillCategoryCard: React.FC<{ category: SkillCategory, index: number }> = ({ category, index }) => {
  const renderIcon = () => {
    switch (category.icon) {
      case "code":
        return <Code className="text-primary text-2xl" />;
      case "server":
        return <Server className="text-primary text-2xl" />;
      case "tools":
        return <Wrench className="text-primary text-2xl" />;
      default:
        return <Code className="text-primary text-2xl" />;
    }
  };

  return (
    <motion.div {...fadeInAnimation(index * 0.2)}>
      <Card className="bg-background border-muted">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
              {renderIcon()}
            </div>
            <h3 className="text-xl font-semibold">{category.title}</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, idx) => (
              <SkillTag key={idx} skill={skill} />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted">
      <motion.div 
        className="container mx-auto max-w-5xl"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerChildren(0.1)}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 text-primary text-center"
          {...fadeInAnimation(0.1)}
        >
          Skills & Technologies
        </motion.h2>
        <motion.p 
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          {...fadeInAnimation(0.2)}
        >
          The tools and technologies I work with to bring ideas to life.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <SkillCategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
