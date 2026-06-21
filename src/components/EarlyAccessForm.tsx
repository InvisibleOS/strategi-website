"use client";

import { useState, useEffect, useCallback } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

// Reusable "Get early access" CTA. Renders the standard big white button and
// opens an accessible modal with a short form that posts to /api/early-access
// (which forwards to the Google Sheet server-side).
export default function EarlyAccessForm({
  label = "Get early access",
}: {
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const body = {
      name: fd.get("name"),
      email: fd.get("email"),
      company: fd.get("company"),
      note: fd.get("note"),
      website: fd.get("website"), // honeypot
    };
    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(json.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setStatus("idle");
          setError("");
          setOpen(true);
        }}
        className="bg-white text-[#050505] text-base md:text-lg font-bold px-10 py-5 hover:bg-[#d4620a] hover:text-white transition-colors text-center"
      >
        {label} &rarr;
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-4 sm:p-6 bg-black/70"
          role="dialog"
          aria-modal="true"
          aria-label="Request early access to Tolstoy"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="relative w-full max-w-md bg-[#0a0a0a] border border-white/15 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors text-xl leading-none"
            >
              &times;
            </button>

            <div className="p-7 md:p-9">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d4620a] mb-3">
                Tolstoy / Early access
              </p>

              {status === "success" ? (
                <div>
                  <h2 className="text-2xl font-bold tracking-tighter text-white mb-3">
                    You&apos;re on the list.
                  </h2>
                  <p className="text-sm text-white/50 font-light leading-relaxed">
                    Thanks. We&apos;ll reach out when your spot opens up.
                  </p>
                  <button
                    type="button"
                    onClick={close}
                    className="mt-7 bg-white text-[#050505] text-sm font-bold px-7 py-3.5 hover:bg-[#d4620a] hover:text-white transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold tracking-tighter text-white mb-2">
                    Request early access
                  </h2>
                  <p className="text-sm text-white/40 font-light leading-relaxed mb-6">
                    Tolstoy is invite-only while we roll out. Tell us a little
                    and we&apos;ll be in touch.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* honeypot — visually hidden, bots fill it */}
                    <div
                      aria-hidden="true"
                      className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
                    >
                      <label>
                        Website
                        <input
                          type="text"
                          name="website"
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </label>
                    </div>

                    <Field label="Name" name="name" autoComplete="name" />
                    <Field
                      label="Work email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                    />
                    <Field
                      label="Company or website"
                      name="company"
                      autoComplete="organization"
                    />
                    <div>
                      <label
                        htmlFor="ea-note"
                        className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2"
                      >
                        Anything else (optional)
                      </label>
                      <textarea
                        id="ea-note"
                        name="note"
                        rows={3}
                        className="w-full bg-[#050505] border border-white/15 px-3.5 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#d4620a]/60 transition-colors resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-[#d4620a]" role="alert">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-white text-[#050505] text-sm font-bold px-7 py-4 hover:bg-[#d4620a] hover:text-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? "Sending..." : "Request access"}
                    </button>

                    <p className="text-[11px] text-white/30 font-light text-center">
                      Prefer email?{" "}
                      <a
                        href={`mailto:${CONTACT_EMAIL}?subject=Tolstoy early access`}
                        className="text-white/50 hover:text-white underline underline-offset-2"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const id = `ea-${name}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2"
      >
        {label}
        {required && <span className="text-[#d4620a]"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full bg-[#050505] border border-white/15 px-3.5 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#d4620a]/60 transition-colors"
      />
    </div>
  );
}
