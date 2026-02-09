import { Reveal } from "./Reveal";

const features = [
  {
    title: "Онлайн-запись 24/7",
    text: "Клиенты видят доступные окна и сразу бронируют время."
  },
  {
    title: "Расписание сотрудников",
    text: "Календарь по филиалам, мастерам и кабинетам без накладок."
  },
  {
    title: "Клиентская база",
    text: "История визитов, средний чек и предпочтения в одной карточке."
  },
  {
    title: "Финансовый учет",
    text: "Выручка, расходы, отчеты и сравнения периодов по филиалам."
  },
  {
    title: "Склад и материалы",
    text: "Остатки, списания и контроль себестоимости услуг."
  },
  {
    title: "Зарплаты и KPI",
    text: "Автоматический расчет процентов, окладов и бонусов."
  },
  {
    title: "Отчеты и аналитика",
    text: "Показатели по дням, услугам, повторным визитам и загрузке."
  },
  {
    title: "AI-ассистент",
    text: "Бот отвечает клиентам и записывает их в CRM без участия админа."
  }
];

export default function Capabilities() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">Возможности Octo CRM</div>
            <h2 className="section-title">Управляйте бизнесом в одном окне</h2>
          </div>
          <p className="section-subtitle">
            Все ключевые модули CRM собраны в одном интерфейсе, чтобы команда
            работала быстрее, а вы видели точные цифры.
          </p>
        </div>
        <div className="grid four">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.03}>
              <div className="card">
                <h3 style={{ marginBottom: 10 }}>{feature.title}</h3>
                <p style={{ color: "var(--text-2)", fontSize: "0.95rem" }}>
                  {feature.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
