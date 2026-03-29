"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  includes: string;
  startingPrice: string;
  icon: string;
  faqs: FAQ[];
}

const iconMap: Record<string, React.ReactNode> = {
  Palette: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  ),
  PenTool: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
  HardHat: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 18a1 1 0 001 1h18a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v2z" />
      <path d="M10 15V6a2 2 0 014 0v9" />
      <path d="M4 15v-3a8 8 0 0116 0v3" />
    </svg>
  ),
  Home: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
};

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="text-sm font-medium text-dark pr-4">
          {faq.question}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`shrink-0 text-warmgray transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-warmgray leading-relaxed pb-4">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ServiceCardList({ services }: { services: Service[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {services.map((service, i) => {
        const includes: string[] = JSON.parse(service.includes);
        return (
          <ScrollReveal key={service.id} delay={i * 0.1}>
            <div className="bg-white border border-border rounded-lg p-8 lg:p-10 h-full flex flex-col">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 text-gold mb-6">
                {iconMap[service.icon] || iconMap.Home}
              </div>

              {/* Title */}
              <h2 className="font-serif text-xl text-dark mb-3">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-warmgray text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Includes */}
              <ul className="space-y-2 mb-6 flex-1">
                {includes.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C4A265"
                      strokeWidth="2"
                      className="shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-dark/70">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="border-t border-border pt-6 mb-6">
                <p className="text-sm text-warmgray">
                  À partir de{" "}
                  <span className="font-serif text-xl text-gold font-bold">
                    {service.startingPrice}
                  </span>
                </p>
              </div>

              {/* FAQs */}
              {service.faqs.length > 0 && (
                <div className="border-t border-border pt-4">
                  <p className="text-xs uppercase tracking-wider text-warmgray mb-2 font-medium">
                    Questions fréquentes
                  </p>
                  {service.faqs.map((faq) => (
                    <FAQItem key={faq.id} faq={faq} />
                  ))}
                </div>
              )}
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
