import { Reveal } from "./Reveal";

const plans = [
  {
    name: "Старт",
    price: "1 990 сом / мес",
    highlight: false,
    desc: "Для небольших студий и кабинетных специалистов.",
    items: [
      "До 5 сотрудников",
      "Онлайн-запись и расписание",
      "База клиентов",
      "Базовые отчеты",
      "Email-уведомления"
    ]
  },
  {
    name: "Бизнес",
    price: "3 990 сом / мес",
    highlight: true,
    desc: "Оптимальный пакет для салонов, детейлинга и клиник.",
    items: [
      "До 20 сотрудников",
      "Финансовый учет и склад",
      "Зарплаты и KPI",
      "AI-ассистент",
      "Отчеты и аналитика"
    ]
  },
  {
    name: "Премиум",
    price: "по запросу",
    highlight: false,
    desc: "Для сетей и сложных процессов с приоритетной поддержкой.",
    items: [
      "Несколько филиалов",
      "Все модули без ограничений",
      "Ролевые доступы",
      "Персональный менеджер",
      "SLA и внедрение"
    ]
  }
];

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">Тарифы</div>
            <h2 className="section-title">7 дней теста на любом тарифе</h2>
          </div>
          <p className="section-subtitle">
            Привяжите карту и получите доступ ко всем функциям. Списание — только
            если продолжите пользоваться системой.
          </p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.08}>
              <div className={`pricing-card ${plan.highlight ? "highlight" : ""}`}>
                <div>
                  <div className="tag">{plan.name}</div>
                  <h3 style={{ margin: "10px 0" }}>{plan.price}</h3>
                  <p style={{ color: "var(--text-2)" }}>{plan.desc}</p>
                </div>
                <ul>
                  {plan.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <a
                  className={`btn ${plan.highlight ? "primary" : "ghost"}`}
                  href="#trial"
                >
                  {plan.name === "Премиум" ? "Связаться с менеджером" : "Попробовать 7 дней"}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
