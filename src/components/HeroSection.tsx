import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles, Rocket, GraduationCap, Heart } from "lucide-react";

const FloatingSticker = ({
  children,
  className,
  delay = 0,
  rotation = -2,
  x,
  y,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  rotation?: number;
  x: number;
  y: number;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set((e.clientX - centerX) * 0.02);
      mouseY.set((e.clientY - centerY) * 0.02);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: rotation - 10 }}
      animate={{ opacity: 1, scale: 1, rotate: rotation }}
      transition={{
        delay,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      style={{
        x: useTransform(springX, (v) => v + x),
        y: useTransform(springY, (v) => v + y),
        ["--rotation" as string]: `${rotation}deg`,
      }}
      className={`absolute animate-float ${className}`}
    >
      {children}
    </motion.div>
  );
};

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Stickers */}
      <FloatingSticker x={-350} y={-150} delay={0.3} rotation={-6} className="hidden md:block">
        <div className="sticker-indigo">
          <Rocket className="w-5 h-5" />
          Full Stack Dev
        </div>
      </FloatingSticker>

      <FloatingSticker x={320} y={-120} delay={0.5} rotation={4} className="hidden md:block">
        <div className="sticker-accent">
          <Heart className="w-5 h-5" />
          Open to Work
        </div>
      </FloatingSticker>

      <FloatingSticker x={-280} y={180} delay={0.7} rotation={-3} className="hidden md:block">
        <div className="sticker-lime">
          <Sparkles className="w-5 h-5" />
          AI Engineer
        </div>
      </FloatingSticker>

      <FloatingSticker x={350} y={150} delay={0.9} rotation={5} className="hidden md:block">
        <div className="sticker">
          <GraduationCap className="w-5 h-5" />
          Newton School '28
        </div>
      </FloatingSticker>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-ink/5 rounded-full text-sm font-medium text-muted-foreground mb-6">
            📍 India • Available for Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight mb-6"
        >
          Hey, I'm{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-primary">Sumit</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-2 left-0 right-0 h-4 bg-secondary -z-0 origin-left"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl font-handwriting text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          "I teach computers to talk and pixels to dance."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-background rounded-full font-medium text-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            View My Work
            <Sparkles className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-ink rounded-full font-medium text-lg transition-all hover:bg-ink hover:text-background"
          >
            Let's Talk
          </a>
        </motion.div>

        {/* Mobile Stickers */}
        <div className="flex flex-wrap justify-center gap-3 mt-12 md:hidden">
          <div className="sticker-indigo text-sm">
            <Rocket className="w-4 h-4" />
            Full Stack Dev
          </div>
          <div className="sticker-accent text-sm">
            <Heart className="w-4 h-4" />
            Open to Work
          </div>
          <div className="sticker-lime text-sm">
            <Sparkles className="w-4 h-4" />
            AI Engineer
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-ink/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-ink/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
