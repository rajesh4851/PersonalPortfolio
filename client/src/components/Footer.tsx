import Logo from "./Logo";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-muted border-t border-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Logo size="sm" />
          
          <p className="text-muted-foreground text-sm text-center md:text-right">
            © {currentYear} All Rights Reserved. Designed and built with{" "}
            <Heart className="inline-block text-primary" size={14} fill="currentColor" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
