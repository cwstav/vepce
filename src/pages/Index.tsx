
import { Button } from "@/components/ui/button";
import { ArrowDown, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import RoundMenuButton from "@/components/RoundMenuButton";

const Index = () => {
  return (
    <div className="h-screen w-full relative bg-white text-black overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-8 md:p-12">
        <div></div> {/* Empty div to push content to the right */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-lg font-normal">
            VEPCE
          </Link>
          <RoundMenuButton />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col justify-center items-center h-[calc(100vh-160px)]">
        <div className="text-center max-w-5xl px-4">
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-tight md:leading-tight">
            THE FUTURE OF{" "}
            <span className="relative">
              ENERGY
              <span className="absolute left-0 bottom-2 md:bottom-4 w-full h-6 md:h-8 bg-[#FEF7CD] -z-10"></span>
            </span>
            ,
            <br />
            TODAY.
          </h1>
        </div>
      </main>

      {/* Footer with Arrow */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <ArrowDown className="h-12 w-12 animate-bounce" />
      </div>
    </div>
  );
};

export default Index;
