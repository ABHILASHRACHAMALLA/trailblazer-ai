import { Mountain } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Mountain className="h-6 w-6" />
            <span className="font-heading text-lg font-bold">WildTrail</span>
          </div>
          <div className="flex gap-6 text-sm text-primary-foreground/70">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <Link to="/destinations" className="hover:text-primary-foreground transition-colors">Destinations</Link>
            <Link to="/plan" className="hover:text-primary-foreground transition-colors">Plan a Trip</Link>
            <Link to="/auth" className="hover:text-primary-foreground transition-colors">Login</Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} WildTrail. AI-Powered Adventure Travel Planner.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
