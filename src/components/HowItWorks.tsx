import { Reveal } from "./Reveal";

const steps = [
  {
    title: "Регистрация и выбор ниши",
    text: "Заполните профиль бизнеса и выберите салон, детейлинг или клинику."
  },
  {
    title: "Базовые настройки",
    text: "Добавьте сотрудников, услуги, расписание и цены за 20 минут."
  },
  {
    title: "Импорт данных",
    text: "Загружайте клиентов и записи из Altegio, Yclients или Excel."
  },
  {
    title: "Онлайн-запись",
    text: "Включите виджет записи и напоминания через мессенджеры."
  },
  {
    title: "AI-ассистент",
    text: "Подключите бота, который отвечает и создает записи 24/7."
  }
];

export default function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">Как это работает</div>
            <h2 className="section-title">Запуск Octō CRM за один день</h2>
          </div>
          <p className="section-subtitle">
            Мы ведем вас по понятному сценарию: регистрация, перенос базы,
            настройка расписания и запуск автоматизации.
          </p>
        </div>
        <div className="grid five">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05} className="card-reveal">
              <div className="card card-equal">
                <div className="tag">Шаг {index + 1}</div>
                <h3 style={{ margin: "12px 0 10px" }}>{step.title}</h3>
                <p style={{ color: "var(--text-2)", fontSize: "0.95rem" }}>
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
