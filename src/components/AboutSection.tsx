import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { GraduationCap, Music, MapPin, Code } from "lucide-react";

const skills = ["React", "Node.js", "TypeScript", "AI/ML", "PostgreSQL", "Prisma"];
const techIcons = ["⚛️ React", "📘 TypeScript", "🐍 Python", "🗄️ SQL", "🔷 Prisma", "🎨 Tailwind", "🤖 AI", "⚡ Node.js"];

const SkillCycle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bento-card h-full flex flex-col justify-between bg-primary/5">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Code className="w-4 h-4" />
        Currently vibing with
      </div>
      <div className="relative h-20 overflow-hidden">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={false}
            animate={{
              y: index === currentIndex ? 0 : index < currentIndex ? -80 : 80,
              opacity: index === currentIndex ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0 flex items-center"
          >
            <span className="text-4xl md:text-5xl font-display font-bold text-primary">
              {skill}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="flex gap-2 mt-4">
        {skills.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-ink/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Marquee = () => {
  return (
    <div className="bento-card overflow-hidden p-0">
      <div className="py-6 px-4">
        <span className="text-sm text-muted-foreground">Tech Stack</span>
      </div>
      <div className="marquee border-t border-ink/10 py-4">
        <div className="marquee-content">
          {[...techIcons, ...techIcons].map((icon, index) => (
            <span
              key={index}
              className="text-2xl whitespace-nowrap font-medium text-ink/80"
            >
              {icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Full Stack Developer & AI Engineer crafting digital experiences that matter.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Skill Cycle */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <SkillCycle />
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <div className="bento-card h-full bg-secondary/20">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <GraduationCap className="w-4 h-4" />
                  Education
                </div>
                <div className="mb-4">
                  <div className="text-6xl md:text-7xl font-display font-bold text-secondary-foreground">
                    8.36
                    <span className="text-2xl text-muted-foreground">/10</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium">B.Tech in Computer Science</p>
                  <p className="text-sm text-muted-foreground">
                    Newton School of Technology '28
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div variants={itemVariants}>
              <div className="bento-card h-full bg-accent/10">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  Location
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold mb-2">
                  India 🇮🇳
                </div>
                <p className="text-muted-foreground">
                  Open to remote opportunities worldwide
                </p>
              </div>
            </motion.div>

            {/* Marquee - Full Width */}
            <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2">
              <Marquee />
            </motion.div>

            {/* Vibe/Status */}
            <motion.div variants={itemVariants}>
              <div className="bento-card h-full bg-ink text-background">
                <div className="flex items-center gap-2 text-sm text-background/60 mb-4">
                  <Music className="w-4 h-4" />
                  Current Vibe
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <span className="text-3xl">🎧</span>
                  </div>
                  <div>
                    <p className="font-medium text-background">Deep Focus</p>
                    <p className="text-sm text-background/60">Coding Mode: ON</p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ scaleY: [1, 1.5, 1] }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.5,
                            delay: i * 0.1,
                          }}
                          className="w-1 h-4 bg-secondary rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
