import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Real-Time Data Pipeline with Change Data Capture (CDC)",
    description: "Designed and implemented a real-time data pipeline leveraging Change Data Capture (CDC) techniques with Debezium, Kafka, PostgreSQL, and Docker, enabling efficient and scalable data synchronization, real-time analytics, and event-driven architectures.",
    tags: ["Debezium", "Kafka", "PostgreSQL", "Docker"]
  },
  {
    title: "Unsupervised Mental Health Topic Classification",
    description: "Developed a streamlined Flask API endpoint on Google Kubernetes for real-time mental health topic classification, integrating LDA model outputs to provide insights on mental health issue probabilities, saving mental health experts 20 hours per week while ensuring appropriate care for individuals seeking mental health support.",
    tags: ["Flask", "Linear discriminant analysis (LDA)", "Google Kubernetes"]
  },
  {
    title: "Vancouver Crime Data Analysis",
    description: "Spearheaded the design and implementation of an innovative system for the Vancouver Police department, utilizing AWS, Apache Spark, Dash, and SQL to identify problem hotspots and allocate resources based on crime type",
    tags: ["Amazon Web Services (AWS)", "PySpark", "Dash", "SQL"]
  },
  {
    title: "Retail Sales Analysis and Forecasting",
    description: "Deployed a GCP-based ETL pipeline that pulled data from Cloud Storage into BigQuery, performed cleaning and transformation, and trained an ML model for sales predictions.",
    tags: ["Python", "Data Engineering", "ETL", "BigQuery", "Machine Learning", "Google Cloud Platform (GCP)", "Google Composer", "Airflow"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)",
                  backgroundColor: "var(--hover-card)",
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut"
                }}
                className="h-full"
              >
                <Card className="h-full overflow-hidden transition-colors duration-200 hover:bg-accent/50">
                  <CardHeader>
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      
                      <CardTitle className="transition-colors duration-200 mb-4">{project.title}</CardTitle>
                      <CardDescription className="transition-colors duration-200">{project.description}</CardDescription>
                    </motion.div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-wrap gap-2"
                    >
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "var(--primary)",
                            color: "var(--primary-foreground)"
                          }}
                          className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm transition-colors duration-200"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}