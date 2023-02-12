import { Navbar } from "./UI/Navbar";
import { HeroSection } from "./UI/HeroSection";

export const App = () => {
  return (
    <div className="bg-vite-bg-color text-vite-text-color h-full pb-12 scroll-smooth">
      <Navbar />
      <HeroSection />
    </div>
  );
};
