import { Reveal } from "./Reveal";

const perks = [
  "Работает 24/7 и отвечает на типовые вопросы",
  "Собирает детали и создает записи без ошибок",
  "Не теряет переписки и историю клиента",
  "Экономит до 40% времени администратора"
];

export default function AIAssistant() {
  return (
    <section className="section" id="ai">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">AI-ассистент</div>
            <h2 className="section-title">Чат-бот внутри Octō CRM</h2>
          </div>
          <p className="section-subtitle">
            Бот подключается к WhatsApp, Telegram и Instagram, ведет переписку и
            сразу заполняет CRM.
          </p>
        </div>
        <div className="ai-panel">
          <Reveal>
            <div className="ai-card">
              <h3 style={{ marginBottom: 12 }}>Сценарии общения</h3>
              <p style={{ color: "var(--text-2)", marginBottom: 18 }}>
                AI-ассистент работает по вашим правилам: уточняет детали, предлагает
                свободные окна и оформляет запись как администратор.
              </p>
              <div className="grid two">
                {perks.map((perk) => (
                  <div key={perk} className="card" style={{ padding: 16 }}>
                    {perk}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="ai-card">
              <div className="tag">Диалог</div>
              <h3 style={{ margin: "12px 0" }}>AI-ассистент отвечает за секунды</h3>
              <div className="card" style={{ marginBottom: 16 }}>
                <p style={{ color: "var(--text-2)" }}>
                  Клиент: «Здравствуйте, есть окно на завтра в 15:00?»
                </p>
                <p style={{ marginTop: 10 }}>
                  Bot: «Да! Могу записать вас к мастеру Аиде в 15:00. Подойдет?»
                </p>
              </div>
              <div className="card">
                <p style={{ color: "var(--text-2)" }}>
                  Клиент: «Запишите, пожалуйста»
                </p>
                <p style={{ marginTop: 10 }}>
                  Bot: «Готово! Запись создана, напоминание отправлю за 2 часа.»
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
