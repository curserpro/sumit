import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MapPin, Terminal, ChevronRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [command, setCommand] = useState("");
  const [messages, setMessages] = useState<string[]>([
    "Welcome to Sumit_OS v1.0",
    "Type 'help' for available commands",
    "",
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = command.toLowerCase().trim();
    
    let response = "";
    switch (cmd) {
      case "help":
        response = "Commands: email, phone, location, hire, clear";
        break;
      case "email":
        response = "→ sumit.kumar@adypu.edu.in";
        break;
      case "phone":
        response = "→ +91 93543 46576";
        break;
      case "location":
        response = "→ India 🇮🇳 (Remote friendly)";
        break;
      case "hire":
        response = "→ Opening email client... Let's build something amazing! 🚀";
        setTimeout(() => {
          window.location.href = "mailto:sumit.kumar@adypu.edu.in?subject=Let's%20Work%20Together!";
        }, 1000);
        break;
      case "clear":
        setMessages(["Terminal cleared.", ""]);
        setCommand("");
        return;
      default:
        response = `Command not found: ${cmd}. Type 'help' for options.`;
    }
    
    setMessages((prev) => [...prev, `$ ${command}`, response, ""]);
    setCommand("");
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-6 bg-ink text-background min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-6 h-6 text-secondary" />
            <span className="text-sm font-medium text-background/60 uppercase tracking-wider">
              Get in Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Let's <span className="text-secondary">Connect</span>
          </h2>
          <p className="text-xl text-background/60 max-w-2xl mb-12">
            Have a project in mind? I'd love to hear about it. Drop me a message or use the terminal below.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Terminal */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="terminal"
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-background/20">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-secondary" />
                <div className="w-3 h-3 rounded-full bg-lime" />
                <span className="ml-4 text-sm text-background/40 font-mono">
                  sumit@portfolio ~ 
                </span>
              </div>

              {/* Terminal Content */}
              <div className="h-64 overflow-y-auto scrollbar-hide mb-4 font-mono text-sm">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`${
                      msg.startsWith("$") ? "text-secondary" : "text-background/80"
                    }`}
                  >
                    {msg}
                  </div>
                ))}
              </div>

              {/* Terminal Input */}
              <form onSubmit={handleCommand} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-secondary" />
                <input
                  type="text"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  placeholder="Type a command..."
                  className="flex-1 bg-transparent border-none outline-none text-secondary placeholder:text-background/30 font-mono"
                />
              </form>
            </motion.div>

            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <a
                href="mailto:sumit.kumar@adypu.edu.in"
                className="block p-6 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-background/60">Email</p>
                    <p className="font-medium">sumit.kumar@adypu.edu.in</p>
                  </div>
                </div>
              </a>

              <a
                href="tel:+919354346576"
                className="block p-6 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-background/60">Phone</p>
                    <p className="font-medium">+91 93543 46576</p>
                  </div>
                </div>
              </a>

              <div className="p-6 rounded-2xl bg-background/5 border border-background/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-background/60">Location</p>
                    <p className="font-medium">India 🇮🇳</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.a
                href="mailto:sumit.kumar@adypu.edu.in?subject=Let's%20Work%20Together!"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 w-full p-6 bg-secondary text-secondary-foreground rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-secondary/20 transition-shadow"
              >
                <Send className="w-5 h-5" />
                Let's Build Something Amazing
              </motion.a>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-24 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-background/40 text-sm">
              © 2025 Sumit Kumar. Built with 💚 and too much coffee.
            </p>
            <p className="font-handwriting text-xl text-secondary">
              "Ship it, then iterate."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
