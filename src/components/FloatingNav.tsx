import { motion } from "framer-motion";
import { Home, Briefcase, User, FileText, Mail } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: Briefcase, label: "Work", href: "#work" },
  { icon: User, label: "About", href: "#about" },
  { icon: FileText, label: "Resume", href: "#resume" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const FloatingNav = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="glass rounded-full px-2 py-2 flex items-center gap-1">
        {navItems.map((item) => (
          <motion.button
            key={item.label}
            onClick={() => scrollToSection(item.href)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center justify-center w-12 h-12 rounded-full transition-colors hover:bg-primary/10"
          >
            <item.icon className="w-5 h-5 text-ink group-hover:text-primary transition-colors" />
            <span className="absolute -top-10 px-2 py-1 bg-ink text-background text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default FloatingNav;
