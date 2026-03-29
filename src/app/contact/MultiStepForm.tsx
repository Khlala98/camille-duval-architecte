"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";

// --- Schemas ---
const step1Schema = z.object({
  projectType: z.string().min(1, "Veuillez sélectionner un type de projet"),
});

const step2Schema = z.object({
  surfaceArea: z.string().optional(),
  budgetRange: z.string().min(1, "Veuillez sélectionner un budget"),
  city: z.string().optional(),
  desiredTimeline: z.string().optional(),
});

const step3Schema = z.object({
  fullName: z.string().min(2, "Veuillez entrer votre nom"),
  email: z.string().email("Veuillez entrer un email valide"),
  phone: z.string().optional(),
  message: z.string().optional(),
});

const fullSchema = step1Schema.merge(step2Schema).merge(step3Schema);
type FormData = z.infer<typeof fullSchema>;

const projectTypes = [
  { value: "Conseil déco", icon: "Palette", label: "Conseil déco" },
  {
    value: "Architecture intérieure",
    icon: "PenTool",
    label: "Architecture intérieure",
  },
  { value: "Suivi de chantier", icon: "HardHat", label: "Suivi de chantier" },
  { value: "Home staging", icon: "Home", label: "Home staging" },
];

const budgetOptions = [
  "Moins de 10 000 €",
  "10 000 € - 30 000 €",
  "30 000 € - 60 000 €",
  "60 000 € - 100 000 €",
  "Plus de 100 000 €",
];

const timelineOptions = [
  "Dès que possible",
  "Dans les 3 mois",
  "Dans les 6 mois",
  "Pas de deadline",
];

export function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(fullSchema),
    defaultValues: {
      projectType: "",
      surfaceArea: "",
      budgetRange: "",
      city: "",
      desiredTimeline: "",
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const selectedType = watch("projectType");

  const nextStep = async () => {
    let valid = false;
    if (step === 1) valid = await trigger("projectType");
    if (step === 2) valid = await trigger(["budgetRange"]);
    if (valid) setStep((s) => Math.min(s + 1, 3));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white border border-border rounded-lg p-12 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C4A265"
            strokeWidth="2"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="font-serif text-2xl text-dark mb-3">
          Message envoyé !
        </h2>
        <p className="text-warmgray">
          Merci pour votre message. Je vous recontacte sous 48h pour échanger
          sur votre projet.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white border border-border rounded-lg p-8 lg:p-10">
      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-10">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex-1 flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                s <= step
                  ? "bg-gold text-dark"
                  : "bg-border text-warmgray"
              }`}
            >
              {s}
            </div>
            {s < 3 && (
              <div
                className={`flex-1 h-0.5 transition-colors ${
                  s < step ? "bg-gold" : "bg-border"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-serif text-xl text-dark mb-2">
                Votre projet
              </h2>
              <p className="text-sm text-warmgray mb-6">
                Quel type de prestation recherchez-vous ?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setValue("projectType", type.value, { shouldValidate: true })}
                    className={`p-5 rounded-lg border text-left transition-all ${
                      selectedType === type.value
                        ? "border-gold bg-gold/5"
                        : "border-border hover:border-gold/50"
                    }`}
                  >
                    <p className="font-medium text-dark text-sm">
                      {type.label}
                    </p>
                  </button>
                ))}
              </div>
              {errors.projectType && (
                <p className="text-red-500 text-xs mt-3">
                  {errors.projectType.message}
                </p>
              )}
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-serif text-xl text-dark mb-2">
                Les détails
              </h2>
              <p className="text-sm text-warmgray mb-6">
                Quelques informations pour mieux cerner votre projet.
              </p>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    Surface approximative
                  </label>
                  <input
                    {...register("surfaceArea")}
                    placeholder="Ex : 80m²"
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-cream"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    Budget envisagé *
                  </label>
                  <select
                    {...register("budgetRange")}
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-cream"
                  >
                    <option value="">Sélectionnez un budget</option>
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  {errors.budgetRange && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.budgetRange.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    Ville
                  </label>
                  <input
                    {...register("city")}
                    placeholder="Ex : Lyon 6e"
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-cream"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    Délai souhaité
                  </label>
                  <select
                    {...register("desiredTimeline")}
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-cream"
                  >
                    <option value="">Sélectionnez un délai</option>
                    {timelineOptions.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-serif text-xl text-dark mb-2">
                Vos coordonnées
              </h2>
              <p className="text-sm text-warmgray mb-6">
                Comment puis-je vous recontacter ?
              </p>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    Nom complet *
                  </label>
                  <input
                    {...register("fullName")}
                    placeholder="Votre nom"
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-cream"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="votre@email.fr"
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-cream"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    Téléphone
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="06 12 34 56 78"
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-cream"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Décrivez brièvement votre projet..."
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-cream resize-none"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          {step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="text-sm text-warmgray hover:text-dark transition-colors flex items-center gap-1"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Précédent
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="bg-gold text-dark rounded-full px-6 py-2.5 text-sm font-medium hover:bg-gold-dark transition-colors flex items-center gap-1"
            >
              Suivant
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          ) : (
            <button
              type="submit"
              disabled={submitting}
              className="bg-gold text-dark rounded-full px-8 py-2.5 text-sm font-medium hover:bg-gold-dark transition-colors disabled:opacity-50"
            >
              {submitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
