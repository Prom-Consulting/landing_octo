import Link from "next/link";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="container nav-inner">
        <Link href="/" className="pill">
          Octo CRM
        </Link>
        <div className="nav-links">
          <a href="#product">О продукте</a>
          <a href="#features">Возможности</a>
          <a href="#pricing">Тарифы</a>
          <a href="#cases">Видео и кейсы</a>
          <a href="#contacts">Контакты</a>
        </div>
        <div className="nav-actions">
          <a className="btn ghost" href="#login">
            Войти в кабинет
          </a>
          <a className="btn primary" href="#trial">
            7 дней бесплатно
          </a>
        </div>
      </div>
    </div>
  );
}
