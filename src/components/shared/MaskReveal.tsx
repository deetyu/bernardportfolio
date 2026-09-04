import { useEffect, useRef, useState, ReactNode, ElementType } from "react";
import { cn } from "@/lib/utils";

interface MaskRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}

/** Editorial curtain reveal: text rises from behind a clipping mask. */
export function MaskReveal({ children, className, delay = 0, as: Tag = "span" }: MaskRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={cn("block overflow-hidden", className)}>
      <Tag
        className={cn(
          "block will-change-transform transition-[transform,opacity] duration-[1100ms] ease-editorial",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0"
        )}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </Tag>
    </span>
  );
}
