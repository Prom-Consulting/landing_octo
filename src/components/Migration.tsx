import { Reveal } from "./Reveal";

const steps = [
  {
    title: "Экспорт данных",
    text: "Выгружаете клиентов, записи, услуги и сотрудников из текущей CRM."
  },
  {
    title: "Передача файлов",
    text: "Загружаете в Octō CRM или отправляете нам на перенос."
  },
  {
    title: "Проверка и запуск",
    text: "Мы проверяем корректность и подключаем вашу команду к работе."
  }
];

export default function Migration() {
  return (
    <section className="section" id="migration">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">Переход</div>
            <h2 className="section-title">Переезд с Altegio, Yclients и Excel</h2>
          </div>
          <p className="section-subtitle">
            Мы переносим клиентов, историю записей, услуги и сотрудников за 15
            минут — без простоев и потери данных.
          </p>
        </div>
        <div className="migration-steps">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <div className="migration-step">
                <div className="tag">Шаг {index + 1}</div>
                <h3 style={{ margin: "12px 0 10px" }}>{step.title}</h3>
                <p style={{ color: "var(--text-2)", fontSize: "0.95rem" }}>
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div style={{ marginTop: 24 }}>
          <a className="btn primary" href="#contacts">
            Запросить перенос данных
          </a>
        </div>
      </div>
    </section>
  );
}
