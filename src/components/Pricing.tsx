import { Reveal } from "./Reveal";

const plans = [
  {
    name: "Базовый",
    price: "4 000 сом / мес",
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
    name: "Стандарт",
    price: "8 000 сом / мес",
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
    name: "Бизнес",
    price: "15 000 сом / мес",
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
            <h2 className="section-title">Запуск Octō CRM за один день</h2>
          </div>
          <p className="section-subtitle">
            Привяжите карту и получите доступ ко всем функциям. Списание — только
            если продолжите пользоваться системой.
          </p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.08} className="pricing-reveal">
              <div className="pricing-card">
                <div className="pricing-header">
                  <div className="tag">{plan.name}</div>
                  <h3 className="pricing-price">{plan.price}</h3>
                  <p className="pricing-desc">{plan.desc}</p>
                </div>
                <ul className="pricing-features">
                  {plan.items.map((item) => (
                    <li key={item}>
                      <span className="check-icon">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <a className="btn primary" href="https://octopay.online/" target="_blank" rel="noopener noreferrer">
                  Попробовать 14 дней
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
