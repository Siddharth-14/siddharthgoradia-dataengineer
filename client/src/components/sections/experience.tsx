import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FaBuilding } from "react-icons/fa";
import { SiSap } from "react-icons/si";

const experiences = [
  {
    title: "Associate Data - Engineer",
    company: "ZS Associates",
    period: "Aug 2024 – December 2024",
    description: [
      "Developed and executed data ingestion scripts on Databricks by writing optimized SQL queries to transform financial data.",
      "Created and deployed scalable, fault-tolerant data pipelines using Azure Data Factory, improving data flow efficiency with 25% reduction in processing time.",
      "Implemented data validation checks within pipelines by embedding validation logic to detect and handle anomalies, reducing data inconsistencies by 20%."
    ],
    icon: FaBuilding
  },
  {
    title: "Data Engineer",
    company: "RajDeep Steel",
    period: "Jan 2024 – July 2024",
    description: [
      "Designed and implemented ETL pipelines using Python and Apache Spark, enabling real-time data processing of sales trends and production schedules, reducing inventory holding costs by 15%.",
      "Built a data warehouse on AWS Redshift, integrating transactional data from ERP systems to generate actionable insights, improving procurement efficiency by 20%.",
      "Developed scalable data models with SQL and Tableau dashboards, enabling dynamic pricing strategies based on market fluctuations, resulting in a 10% increase in revenue margins."
    ],
    icon: FaBuilding
  },
  {
    title: "HANA Product Support Engineering Intern",
    company: "SAP Canada Inc.",
    period: "May 2023 – December 2023",
    description: [
      "Streamlined ticket scheduling system through analysis and optimization of software performance and automation using Python and Tableau, improving case assignment efficiency by 20%.",
      "Spearheaded comprehensive analysis of sales data using SQL and Python to enhance marketing efficiency for client companies, resulting in a 10% increase in sales.",
      "Developed an incident response model, helping with incident triage based on severity, potential impact, and relevance through employment of HANA in analyzing key attributes."
    ],
    icon: SiSap
  },
  {
    title: "Business Data Engineering Associate",
    company: "ZS Associates",
    period: "July 2021 – July 2022",
    description: [
      "Designed and maintained data pipelines and ETL processes using Databricks and Airflow that processed 5TB of pharmaceutical data daily, resulting in a 25% reduction in data processing time.",
      "Developed a medical text recommendation engine using unsupervised machine learning, saving 20+ work hours monthly.",
      "Drove exploratory analysis to identify key gaps in sales and supply chain, employing SQL and PySpark to map correlations between product trends and location demographics resulting in 10% reduction in expenses."
    ],
    icon: FaBuilding
  },
  {
    title: "Data Engineering Intern",
    company: "Publicis Sapient",
    period: "January 2021 – June 2021",
    description: [
      "Conducted complex data analysis into customer phone plan renewal turnover using SQL queries and Excel macros, identifying key trends that resulted in a 25% reduction in churn and a 15% increase in revenue.",
      "Developed and implemented a time series forecasting model using Python and Apache Spark to identify usage surges and accurately allocate resources, leading to a 30% increase in customer acquisition and a 20% improvement in retention.",
      "Collaborated with cross-functional teams to streamline data collection and reporting processes, resulting in a 30% reduction in data processing time and an improvement in data consistency."
    ],
    icon: FaBuilding
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>

        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <exp.icon className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription>{exp.company} • {exp.period}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                    {exp.description.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}