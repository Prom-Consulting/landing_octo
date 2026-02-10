"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav">
      <div className="container nav-inner">
        <Link href="/" className="nav-logo">
          <Image
            src="/PROM_logo_small_blue (1).svg"
            alt="Octō CRM"
            width={32}
            height={32}
          />
          <span>Octō CRM</span>
        </Link>

        <button
          className={`burger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <div className="nav-links">
            <a href="#product" onClick={() => setIsOpen(false)}>О продукте</a>
            <a href="#features" onClick={() => setIsOpen(false)}>Возможности</a>
            <a href="#pricing" onClick={() => setIsOpen(false)}>Тарифы</a>
            <a href="#cases" onClick={() => setIsOpen(false)}>Кейсы</a>
          </div>
          <div className="nav-actions">
            <a className="btn ghost" href="https://octocrm.beauty/" target="_blank" rel="noopener noreferrer">
              Войти в кабинет
            </a>
            <a className="btn primary" href="https://octopay.online/" target="_blank" rel="noopener noreferrer">
              14 дней бесплатно
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
