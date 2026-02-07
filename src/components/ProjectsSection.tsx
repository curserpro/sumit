import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, QrCode, ExternalLink, Award, Sparkles } from "lucide-react";

interface Project {
  title: string;
  date: string;
  description: string;
  stack: string[];
  badge?: string;
  theme: "lime" | "indigo";
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "Explainer AI",
    date: "Jan 2026",
    description:
      "An AI-powered Podcast Generator that transforms URLs into engaging audio conversations between contrasting personas. Built with cutting-edge generative AI.",
    stack: ["React", "Node.js", "BullMQ", "Gemini AI"],
    badge: "🏆 Winner",
    theme: "lime",
    icon: <Play className="w-6 h-6" />,
  },
  {
    title: "Linkly",
    date: "Oct 2025",
    description:
      "Full-stack URL shortener with comprehensive geo-analytics, custom slugs, and QR code generation. Tracks clicks, locations, and referrers in real-time.",
    stack: ["PostgreSQL", "GeoIP-lite", "Prisma", "React"],
    theme: "indigo",
    icon: <QrCode className="w-6 h-6" />,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`cinematic-card group cursor-pointer ${
        project.theme === "lime" ? "hover:glow-lime" : "hover:glow-indigo"
      }`}
    >
      {/* Card Background */}
      <div
        className={`relative p-8 md:p-12 min-h-[400px] flex flex-col justify-between ${
          project.theme === "lime"
            ? "bg-gradient-to-br from-secondary/30 via-card to-card"
            : "bg-gradient-to-br from-primary/10 via-card to-card"
        }`}
      >
        {/* Badge */}
        {project.badge && (
          <motion.div
            initial={{ scale: 0, rotate: -12 }}
            animate={isInView ? { scale: 1, rotate: -6 } : {}}
            transition={{ delay: 0.3, type: "spring" }}
            className="absolute top-6 right-6"
          >
            <div className="sticker-accent flex items-center gap-2">
              <Award className="w-4 h-4" />
              {project.badge}
            </div>
          </motion.div>
        )}

        {/* Header */}
        <div>
          <span className="text-sm text-muted-foreground font-medium">
            {project.date}
          </span>
          <h3 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            {project.title}
          </h3>
          <p className="text-lg text-muted-foreground max-w-xl">
            {project.description}
          </p>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-end justify-between gap-4 mt-8">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm font-medium bg-ink/5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Hover Action */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium ${
              project.theme === "lime"
                ? "bg-secondary text-secondary-foreground"
                : "bg-primary text-primary-foreground"
            }`}
          >
            {project.theme === "lime" ? (
              <>
                <Play className="w-4 h-4" />
                Play Demo
              </>
            ) : (
              <>
                <ExternalLink className="w-4 h-4" />
                View Project
              </>
            )}
          </motion.div>
        </div>

        {/* Decorative Icon */}
        <motion.div
          animate={{
            y: isHovered ? -10 : 0,
            rotate: isHovered ? 10 : 0,
          }}
          className={`absolute bottom-8 right-8 w-20 h-20 rounded-2xl flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity ${
            project.theme === "lime" ? "bg-secondary" : "bg-primary"
          }`}
        >
          {project.icon}
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Featured Work
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Projects that <span className="text-primary">Ship</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Real solutions built with modern tech stacks. From AI-powered applications to full-stack platforms.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
