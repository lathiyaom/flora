"use client";

import Lenis from "lenis";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef
} from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type LenisApi = {
  stop: () => void;
  start: () => void;
  scrollTo: (target: string | number | HTMLElement, options?: { offset?: number; immediate?: boolean }) => void;
};

const LenisContext = createContext<LenisApi | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 0.85,
      smoothWheel: true
    });
    lenisRef.current = lenis;

    document.documentElement.classList.add("lenis", "lenis-smooth");

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };
  }, [reducedMotion]);

  const stop = useCallback(() => lenisRef.current?.stop(), []);
  const start = useCallback(() => lenisRef.current?.start(), []);
  const scrollTo = useCallback(
    (target: string | number | HTMLElement, options?: { offset?: number; immediate?: boolean }) => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(target, { offset: options?.offset ?? -88, ...options });
        return;
      }
      if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: reducedMotion ? "auto" : "smooth" });
        return;
      }
      if (typeof target === "string" && target.startsWith("#")) {
        document.querySelector(target)?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
      }
    },
    [reducedMotion]
  );

  const api = useMemo(() => ({ stop, start, scrollTo }), [stop, start, scrollTo]);

  return <LenisContext.Provider value={api}>{children}</LenisContext.Provider>;
}
