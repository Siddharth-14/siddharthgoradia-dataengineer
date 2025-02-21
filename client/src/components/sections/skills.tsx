import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Programming & Big Data Tools",
    skills: ["Python", "SQL", "PySpark", "Apache Spark", "Azure Databricks", "Apache Airflow", "Pandas", "NumPy", "Docker", "Debezium", "Apache Kafka", "PostgreSQL", "Scala", "AirOps", "Hadoop"]
  },
  {
    category: "Cloud & Data Platforms",
    skills: ["AWS (S3, EMR, Glue, Athena, Redshift)", "Azure (ADLS, ADF, Data Factory, Synapse)", "Snowflake", "GCP (BigQuery, Dataflow)", "Hudi"]
  },
  {
    category: "Data Modeling & Visualization",
    skills: ["Tableau", "Power BI", "Looker"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>

        <div className="grid gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}