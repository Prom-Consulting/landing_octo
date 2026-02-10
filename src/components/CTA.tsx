import { Reveal } from "./Reveal";

export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="card" style={{ padding: 34, borderRadius: "var(--radius-xl)" }}>
            <div className="grid two" style={{ alignItems: "center" }}>
              <div>
                <div className="tag">Стартуйте сегодня</div>
                <h2 style={{ fontSize: "2.2rem", margin: "12px 0" }}>
                  Получите 14 дней бесплатного доступа к Octō CRM
                </h2>
                <p style={{ color: "var(--text-2)", maxWidth: 520 }}>
                  Подключите карту, запустите CRM для вашей ниши и включите AI-ассистента.
                  Если не подойдет — отмените до списания.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a className="btn primary" href="https://octopay.online/" target="_blank" rel="noopener noreferrer">
                  Попробовать 14 дней бесплатно
                </a>
                <a className="btn ghost" href="https://octocrm.beauty/" target="_blank" rel="noopener noreferrer">
                  Войти в кабинет
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
