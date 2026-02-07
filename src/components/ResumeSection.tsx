import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar, ExternalLink, Download } from "lucide-react";

const certifications = [
  {
    title: "Generative AI for Everyone",
    issuer: "DeepLearning.AI",
    date: "May 2025",
    color: "bg-secondary",
  },
  {
    title: "AI For Everyone",
    issuer: "Coursera",
    date: "Feb 2025",
    color: "bg-primary/20",
  },
  {
    title: "Introduction to Physics",
    issuer: "University of Virginia",
    date: "Dec 2024",
    color: "bg-accent/20",
  },
];

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Credentials
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold">
                Certifications
              </h2>
            </div>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-background rounded-full font-medium hover:shadow-lg transition-shadow"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className={`bento-card group ${cert.color}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-ink/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-ink" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground mb-4">{cert.issuer}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {cert.date}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-8 bento-card"
          >
            <h3 className="font-display font-bold text-xl mb-6">Core Competencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { skill: "React & Next.js", level: 90 },
                { skill: "Node.js & Express", level: 85 },
                { skill: "TypeScript", level: 88 },
                { skill: "Generative AI", level: 82 },
                { skill: "PostgreSQL", level: 80 },
                { skill: "Prisma ORM", level: 85 },
                { skill: "Tailwind CSS", level: 92 },
                { skill: "Git & DevOps", level: 78 },
              ].map((item) => (
                <div key={item.skill}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{item.skill}</span>
                    <span className="text-sm text-muted-foreground">{item.level}%</span>
                  </div>
                  <div className="h-2 bg-ink/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
