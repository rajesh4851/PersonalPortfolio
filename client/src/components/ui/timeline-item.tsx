import { Experience } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/lib/animations";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ experience, index }) => {
  const isOdd = index % 2 !== 0;

  return (
    <motion.div 
      className={`relative flex items-center justify-between md:justify-normal ${isOdd ? 'md:flex-row-reverse' : ''} group`}
      {...fadeInAnimation(index * 0.1)}
    >
      <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-primary shrink-0 md:order-1 ${isOdd ? 'md:group-odd:-translate-x-1/2' : 'md:group-even:translate-x-1/2'}`}>
        <Briefcase className="h-5 w-5 text-black" />
      </div>
      
      <Card className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-background border-muted`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between space-x-2 mb-1">
            <h3 className="text-xl font-semibold">{experience.title}</h3>
            <time className="text-sm font-medium text-primary">{experience.period}</time>
          </div>
          <div className="text-primary font-medium mb-3">{experience.company}</div>
          <p className="text-muted-foreground mb-4">{experience.description}</p>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, idx) => (
              <Badge key={idx} variant="outline" className="px-3 py-1 bg-background text-xs text-primary">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
