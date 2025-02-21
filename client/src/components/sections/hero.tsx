import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, DownloadIcon, Github } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Siddarth Goradia
            <span className="block text-2xl md:text-3xl text-muted-foreground mt-4">
              Data Engineer
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Experienced Data Engineer skilled in developing and optimizing data pipelines, ETL processes, 
            and data warehousing solutions using modern technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="/resume.pdf" download>
                <DownloadIcon className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.linkedin.com/in/siddarth-goradia" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/Siddharth-14" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Github
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}