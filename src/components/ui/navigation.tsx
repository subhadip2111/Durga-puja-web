import { useState } from "react";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils"

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation = ({ currentPage, onPageChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "schedule", label: "Schedule" },
    { id: "social", label: "Social Activities" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-festival-gold/20 sticky top-0 z-50 shadow-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-festival bg-clip-text text-transparent">
             বিশ্বাস নুন্নান সার্বজনীন দুর্গোৎসব কমিটি
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? "festival" : "ghost"}
                  onClick={() => onPageChange(item.id)}
                  className={cn(
                    "text-foreground hover:text-white transition-all duration-300",
                    currentPage === item.id && "text-white"
                  )}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-festival-gold/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "festival" : "ghost"}
                onClick={() => {
                  onPageChange(item.id);
                  setIsMenuOpen(false);
                }}
                className={cn(
                  "w-full justify-start text-foreground hover:text-white transition-all duration-300",
                  currentPage === item.id && "text-white"
                )}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;