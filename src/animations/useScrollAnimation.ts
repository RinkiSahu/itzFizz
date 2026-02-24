import { useEffect } from "react";
import type { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  sectionRef: RefObject<HTMLDivElement | null>;
  trackRef: RefObject<HTMLDivElement | null>;
  carRef: RefObject<HTMLImageElement | null>;
  trailRef: RefObject<HTMLDivElement | null>;
  valueTextRef: RefObject<HTMLDivElement | null>;
}

export const useScrollAnimation = ({
  sectionRef,
  trackRef,
  carRef,
  trailRef,
  valueTextRef,
}: Props) => {
  useEffect(() => {
    if (!sectionRef.current || !carRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".headline span", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.05,
      });

      gsap.to(".stat-box", {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.25,
        delay: 0.8,
      });

      const letters = gsap.utils.toArray<HTMLElement>(".value-letter");
      const valueRect = valueTextRef.current?.getBoundingClientRect();
      const letterOffsets = letters.map((l) => l.offsetLeft);

      const roadWidth = window.innerWidth;
      const carWidth = 150;
      const endX = roadWidth - carWidth;

      gsap.to(carRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 2,
          pin: trackRef.current,
        },
        x: endX,
        ease: "none",
        onUpdate: () => {
          const carX =
            (gsap.getProperty(carRef.current!, "x") as number) + carWidth / 2;

          letters.forEach((letter, i) => {
            if (!valueRect) return;
            const letterX = valueRect.left + letterOffsets[i];
            letter.style.opacity = carX >= letterX ? "1" : "0";
          });

          gsap.set(trailRef.current, { width: carX });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
};
