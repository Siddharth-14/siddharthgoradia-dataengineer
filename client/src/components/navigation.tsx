import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

export default function Navigation() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header 
      className="fixed top-0 w-full bg-background/95 backdrop-blur z-50 border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold">Siddarth Goradia</h1>

        <div className="flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex gap-6">
              <NavigationMenuItem>
                <Button variant="ghost" onClick={() => scrollToSection("experience")}>Experience</Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost" onClick={() => scrollToSection("education")}>Education</Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost" onClick={() => scrollToSection("skills")}>Skills</Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost" onClick={() => scrollToSection("projects")}>Projects</Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost" onClick={() => scrollToSection("contact")}>Contact</Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}