import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mountain, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <Mountain className="h-7 w-7 text-primary" />
          <span className="font-heading text-xl font-bold text-foreground">WildTrail</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/destinations" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Destinations
          </Link>
          <Link to="/plan" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Plan a Trip
          </Link>
          <Link to="/auth" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Login
          </Link>
          <Button asChild size="sm">
            <Link to="/plan">Get Started</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-3 p-4">
              <Link to="/destinations" className="text-sm font-medium py-2" onClick={() => setMobileOpen(false)}>Destinations</Link>
              <Link to="/plan" className="text-sm font-medium py-2" onClick={() => setMobileOpen(false)}>Plan a Trip</Link>
              <Link to="/auth" className="text-sm font-medium py-2" onClick={() => setMobileOpen(false)}>Login</Link>
              <Button asChild size="sm">
                <Link to="/plan" onClick={() => setMobileOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
