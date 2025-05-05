import HeroSection from "@/components/custom/hero,";
import Nav from "@/components/custom/nav";
import { Button } from "@/components/ui/button";

const App = () => {
  return (
    <main className="px-2 sm:px-4 md:px-6 px:8 h-screen w-full bg-[#EAEAEA]  pt-2">
      <Nav />
      <HeroSection />
    </main>
  );
};

export default App;
