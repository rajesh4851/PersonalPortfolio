import { FC } from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

const Logo: FC<LogoProps> = ({ size = "md" }) => {
  const sizes = {
    sm: {
      container: "w-8 h-8",
      text: "text-md",
      textSize: "text-base",
    },
    md: {
      container: "w-10 h-10",
      text: "text-xl",
      textSize: "text-xl",
    },
    lg: {
      container: "w-12 h-12",
      text: "text-2xl",
      textSize: "text-2xl",
    },
  };

  return (
    <div className="flex items-center space-x-2">
      <div className={`${sizes[size].container} rounded-lg bg-primary flex items-center justify-center text-black font-bold ${sizes[size].text}`}>
        <span>P</span>
      </div>
      <span className={`text-primary font-semibold ${sizes[size].textSize}`}>Portfolio</span>
    </div>
  );
};

export default Logo;
