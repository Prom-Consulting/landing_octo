"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function KineticBackground() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const orbs = gsap.utils.toArray<HTMLElement>(".orb");
      orbs.forEach((orb, index) => {
        const intensity = parseFloat(orb.dataset.speed ?? "1");
        gsap.to(orb, {
          x: `+=${24 + index * 12}`,
          y: `+=${18 + index * 10}`,
          duration: (6 + index * 1.6) / intensity,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
        gsap.to(orb, {
          rotation: 360,
          duration: (26 + index * 4) / intensity,
          repeat: -1,
          ease: "none"
        });
      });

      gsap.to(".scene-grid", {
        backgroundPosition: "0 0, 240px 240px, -240px -240px",
        duration: 30,
        repeat: -1,
        ease: "none"
      });

      gsap.to(".ray", {
        opacity: 0.55,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(".ray-a", {
        x: 80,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(".ray-b", {
        x: -60,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(".scene", {
        y: -140,
        scrollTrigger: {
          trigger: "main",
          start: "top top",
          end: "bottom bottom",
          scrub: true
        }
      });

      gsap.utils.toArray<HTMLElement>(".tilt-card").forEach((card) => {
        gsap.fromTo(
          card,
          { rotateX: 8, rotateY: -6 },
          {
            rotateX: -8,
            rotateY: 6,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              scrub: true
            }
          }
        );
      });
    }, document.body);

    return () => ctx.revert();
  }, []);

  return (
    <div className="scene" ref={sceneRef} aria-hidden="true">
      <div className="scene-grid" />
      <div className="orb orb-a" data-speed="1.1" />
      <div className="orb orb-b" data-speed="0.9" />
      <div className="orb orb-c" data-speed="1.2" />
      <div className="orb orb-d" data-speed="1" />
      <div className="orb orb-e" data-speed="0.8" />
      <div className="ray ray-a" />
      <div className="ray ray-b" />
    </div>
  );
}
