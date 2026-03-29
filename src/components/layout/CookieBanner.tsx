"use client";

import { useState, useEffect } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = document.cookie
      .split("; ")
      .find((c) => c.startsWith("cookie_consent="));
    if (!consent) setVisible(true);
  }, []);

  const respond = (accepted: boolean) => {
    const value = accepted ? "accepted" : "refused";
    document.cookie = `cookie_consent=${value}; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-dark text-cream p-4 md:p-6">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-cream/80 max-w-2xl">
          Ce site utilise des cookies techniques nécessaires à son bon
          fonctionnement. En poursuivant votre navigation, vous acceptez leur
          utilisation.{" "}
          <a
            href="/confidentialite"
            className="text-gold underline hover:text-gold-light"
          >
            En savoir plus
          </a>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => respond(false)}
            className="text-sm text-cream/60 hover:text-cream transition-colors px-4 py-2"
          >
            Refuser
          </button>
          <button
            onClick={() => respond(true)}
            className="bg-gold text-dark rounded-full px-5 py-2 text-sm font-medium hover:bg-gold-dark transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
