import React from "react";
import type { FC, HTMLAttributes, useState as useStateType } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface CircularMenuProps extends HTMLAttributes<HTMLDivElement> {
  items: Array<{
    label: string;
    href: string;
  }>;
}

const CircularMenu: FC<CircularMenuProps> = ({ items, className, ...props }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={cn("relative", className)} {...props}>
      {/* Black circle background */}
      <div
        className={cn(
          "fixed top-0 right-0 bg-black rounded-full transition-all duration-700 ease-in-out transform origin-top-right",
          isOpen ? "w-[200vw] h-[200vw] -translate-x-1/2 translate-y-[-25%]" : "w-12 h-12"
        )}
      />

      {/* Menu button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed top-8 right-8 md:top-12 md:right-12 rounded-full h-12 w-12 z-50 transition-colors",
          isOpen ? "text-white hover:text-white/90" : "text-white hover:text-white/90"
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Menu items */}
      <nav
        className={cn(
          "fixed top-0 right-0 h-screen w-screen z-40 flex items-center justify-center transition-opacity duration-500",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <ul className="text-white text-5xl md:text-7xl space-y-8 text-center">
          {items.map((item, index) => (
            <li
              key={index}
              className="transform transition-transform duration-500"
              style={{
                transitionDelay: `${isOpen ? index * 100 : 0}ms`,
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <a
                href={item.href}
                className="hover:text-white/80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default CircularMenu; 