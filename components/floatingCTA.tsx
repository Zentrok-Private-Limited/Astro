"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, X } from "lucide-react";

export default function FloatingCTA() {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 8000); // Show after 8 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[360px] rounded-3xl border border-primary/15 bg-card p-6 shadow-2xl">

      {/* Close Button */}
      <button
        onClick={() => setOpen(false)}
        className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground transition hover:bg-primary/10 hover:text-primary"
      >
        <X size={18} />
      </button>

      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Sparkles className="h-6 w-6 text-primary" />
        </div>

        <div>
          <h3 className="font-serif text-xl text-primary">
            Need Spiritual Guidance?
          </h3>

          <p className="text-sm text-muted-foreground">
            We're here to help.
          </p>
        </div>
      </div>

      <p className="mt-5 leading-7 text-muted-foreground">
        Speak with our experts for a free consultation or reserve your pooja
        instantly with a{" "}
        <span className="font-semibold text-primary">
          $50 confirmation deposit.
        </span>
      </p>

      <div className="mt-6 space-y-3">

        <button
          onClick={() => router.push("/booking")}
          className="w-full rounded-full bg-primary py-3 font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Free Consultation
        </button>

        <button
          onClick={() => router.push("/booking")}
          className="w-full rounded-full border border-primary py-3 font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
        >
          Book for $50
        </button>

      </div>

    </div>
  );
}