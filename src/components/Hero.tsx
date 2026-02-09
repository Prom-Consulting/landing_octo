"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "./Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".float-card",
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.18,
          ease: "power3.out"
        }
      );

      gsap.to(".hero-panel", {
        y: -24,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section hero" ref={heroRef} id="product">
      <div className="container hero-grid">
        <div>
          <Reveal>
            <span className="pill">CRM + AI-ассистент • для салонов, детейлинга и клиник</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="hero-title">
              <span className="accent-text">Octo CRM</span> — вся операционка бизнеса и
              AI-ассистент в одной системе
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="hero-subtitle">
              Онлайн-запись 24/7, расписание, финучет, склад, зарплаты и чат-бот,
              который записывает клиентов и сразу заносит их в CRM.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="hero-actions" id="trial">
              <a className="btn primary" href="#pricing">
                Попробовать 7 дней бесплатно
              </a>
              <a className="btn ghost" href="#login">
                Войти в личный кабинет
              </a>
            </div>
          </Reveal>
          <div className="badges">
            <span>AI-чат-бот включается за 1 час</span>
            <span>Перенос из Altegio и Yclients</span>
            <span>Оплата онлайн без продажников</span>
          </div>
        </div>
        <div className="hero-panel glass">
          <div className="hero-shell">
            <div className="hero-widget float-card tilt-card">
              <h4>Панель загрузки</h4>
              <p>Отслеживайте записи по филиалам и мастерам в реальном времени.</p>
            </div>
            <div className="hero-widget float-card tilt-card">
              <h4>AI-ассистент</h4>
              <p>Принял 86 сообщений за сутки, создал 12 записей.</p>
            </div>
            <div className="hero-widget float-card tilt-card">
              <h4>Финансы</h4>
              <p>Выручка за сегодня: 254 000 сом. Рост +18% к прошлой неделе.</p>
            </div>
            <div className="trust-strip tilt-card">
              <div className="trust-item">
                <strong>7 дней</strong>
                <span>полный доступ</span>
              </div>
              <div className="trust-item">
                <strong>15 мин</strong>
                <span>перенос данных</span>
              </div>
              <div className="trust-item">
                <strong>24/7</strong>
                <span>онлайн-запись</span>
              </div>
              <div className="trust-item">
                <strong>3 ниши</strong>
                <span>под ключ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
