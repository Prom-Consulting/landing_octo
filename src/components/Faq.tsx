import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Как работает пробный период?",
    a: "Вы получаете полный доступ к выбранному тарифу на 7 дней. Списание пройдет только если вы продолжите пользоваться сервисом."
  },
  {
    q: "Нужна ли карта на старте?",
    a: "Да, для активации пробного периода нужно привязать карту. Это защищает от фрода и экономит время на оплату."
  },
  {
    q: "Можно ли перейти с другой CRM?",
    a: "Да, переносим клиентов, записи, услуги и сотрудников из Altegio, Yclients и Excel."
  },
  {
    q: "Что будет, если карта не оплатит?",
    a: "Мы заранее уведомим, дадим время обновить карту и сохранить доступ без остановки работы."
  },
  {
    q: "Как отключить подписку?",
    a: "В личном кабинете можно отменить подписку и экспортировать данные в любой момент."
  },
  {
    q: "AI-ассистент обязателен?",
    a: "Нет, вы можете использовать только базовые модули CRM и подключить AI позже."
  }
];

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">FAQ</div>
            <h2 className="section-title">Частые вопросы</h2>
          </div>
          <p className="section-subtitle">
            Мы собрали ответы на вопросы о пробном периоде, оплате и переносе данных.
          </p>
        </div>
        <div className="faq-grid">
          {faqs.map((item, index) => (
            <Reveal key={item.q} delay={index * 0.04}>
              <div className="faq-item">
                <h3 style={{ marginBottom: 10 }}>{item.q}</h3>
                <p style={{ color: "var(--text-2)" }}>{item.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
