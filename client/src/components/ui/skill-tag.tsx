import { motion } from "framer-motion";
import { Skill } from "@/lib/types";

interface SkillTagProps {
  skill: Skill;
}

export const SkillTag: React.FC<SkillTagProps> = ({ skill }) => {
  return (
    <motion.div 
      className="px-4 py-2 bg-muted rounded-lg flex items-center gap-2 transition-transform duration-200"
      whileHover={{ scale: 1.05 }}
    >
      <span className="text-primary" dangerouslySetInnerHTML={{ __html: skill.icon }}></span>
      <span className="text-muted-foreground">{skill.name}</span>
    </motion.div>
  );
};
