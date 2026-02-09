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
                  Получите 7 дней бесплатного доступа к Octo CRM
                </h2>
                <p style={{ color: "var(--text-2)", maxWidth: 520 }}>
                  Подключите карту, запустите CRM для вашей ниши и включите AI-ассистента.
                  Если не подойдет — отмените до списания.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a className="btn primary" href="#pricing">
                  Попробовать 7 дней бесплатно
                </a>
                <a className="btn ghost" href="#migration">
                  Запросить перенос данных
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
