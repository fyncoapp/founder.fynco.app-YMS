import { useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const samplePrompts = [
  "What's my runway if I hire 3 more engineers?",
  "Show SaaS expense trend",
  "When should I start fundraising?",
  "Compare my metrics to industry benchmarks",
];

export function TalkToFyn() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Floating Chat Bubble */}
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial={false}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              onClick={() => setIsOpen(true)}
              className="group relative flex items-center gap-2 px-3 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-[0px_8px_24px_rgba(20,58,67,0.3)] transition-all hover:shadow-[0px_12px_32px_rgba(20,58,67,0.4)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <MessageCircle className="w-4 h-4" />
              <motion.span
                className="text-[12px] overflow-hidden"
                initial={{ width: 0, opacity: 0 }}
                animate={
                  isHovered
                    ? { width: "auto", opacity: 1 }
                    : { width: 0, opacity: 0 }
                }
                transition={{ duration: 0.2 }}
              >
                Talk to Fyn
              </motion.span>
              
              {/* Pulse Animation */}
              <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F7931A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F7931A]"></span>
              </span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Expanded Chat Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed bottom-4 right-4 w-[85vw] sm:w-[340px] bg-background rounded-[16px] shadow-[0px_16px_48px_rgba(0,0,0,0.15)] border border-border overflow-hidden"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-primary/5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-[13px] text-foreground">Talk to Fyn</h3>
                    <p className="text-[10px] text-muted-foreground">Your AI CFO Assistant</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Sample Prompts */}
              <div className="p-4 space-y-2 max-h-[300px] overflow-y-auto">
                <p className="text-[11px] text-muted-foreground mb-2">
                  Try asking Fyn:
                </p>
                {samplePrompts.map((prompt, index) => (
                  <motion.button
                    key={index}
                    className="w-full text-left px-3 py-2.5 rounded-[10px] bg-secondary/30 hover:bg-secondary/60 border border-transparent hover:border-primary/20 transition-all group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <p className="text-[12px] text-foreground group-hover:text-primary transition-colors">
                      {prompt}
                    </p>
                  </motion.button>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-3 border-t border-border bg-secondary/20">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Ask Fyn anything..."
                    className="flex-1 px-3 py-2.5 rounded-[10px] bg-background border border-border text-[12px] focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground"
                  />
                  <button className="p-2.5 rounded-[10px] bg-primary hover:bg-primary/90 text-primary-foreground transition-colors">
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[9px] text-muted-foreground mt-1.5 text-center">
                  Powered by AI • Data from your dashboard
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}