import { Project } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden border border-muted hover:border-primary/50 transition-all duration-300 bg-background">
        <div className="h-48 bg-muted relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-muted text-xs text-primary">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex justify-between items-center">
            {project.liveUrl && (
              <a href={project.liveUrl} className="text-primary hover:underline font-medium">
                View Project
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} className="text-primary hover:text-white transition-colors">
                <Github size={20} />
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
