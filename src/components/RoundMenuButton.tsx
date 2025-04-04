
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoundMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const RoundMenuButton = ({ className, ...props }: RoundMenuButtonProps) => {
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className={cn("rounded-full bg-black text-white h-12 w-12", className)} 
      {...props}
    >
      <Menu className="h-6 w-6" />
    </Button>
  );
};

export default RoundMenuButton;
