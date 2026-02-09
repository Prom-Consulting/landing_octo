export default function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="container footer-grid">
        <div>
          <div className="pill" style={{ marginBottom: 16 }}>
            Octo CRM
          </div>
          <p style={{ color: "var(--text-2)", maxWidth: 260 }}>
            Система для салонов красоты, детейлинга и клиник. Записи, клиенты,
            финансы, склад и AI-ассистент в одном месте.
          </p>
        </div>
        <div>
          <div className="tag" style={{ marginBottom: 12 }}>
            Навигация
          </div>
          <a href="#product">О продукте</a>
          <a href="#features">Возможности</a>
          <a href="#pricing">Тарифы</a>
          <a href="#cases">Видео и кейсы</a>
        </div>
        <div>
          <div className="tag" style={{ marginBottom: 12 }}>
            Документы
          </div>
          <a href="#">Публичная оферта</a>
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Обработка персональных данных</a>
        </div>
        <div>
          <div className="tag" style={{ marginBottom: 12 }}>
            Контакты
          </div>
          <a href="mailto:support@octo-crm.ai">support@octo-crm.ai</a>
          <a href="#">WhatsApp</a>
          <a href="#">Telegram</a>
        </div>
      </div>
    </footer>
  );
}
