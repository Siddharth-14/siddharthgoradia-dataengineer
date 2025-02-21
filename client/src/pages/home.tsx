import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import Experience from "@/components/sections/experience"; 
import Education from "@/components/sections/education";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ScrollArea className="h-screen">
        <main className="container mx-auto px-4 py-8">
          <Hero />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </ScrollArea>
    </div>
  );
}
