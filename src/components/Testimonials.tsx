import { Reveal } from "./Reveal";

const testimonials = [
  {
    name: "Алия, салон красоты",
    text: "За 2 недели перешли с таблиц, все записи теперь в одном месте."
  },
  {
    name: "Руслан, детейлинг",
    text: "Система показала реальную загрузку постов и помогла сократить простой."
  },
  {
    name: "Дарья, клиника",
    text: "Пациенты записываются ночью, а администраторы больше не переписывают вручную."
  }
];

export default function Testimonials() {
  return (
    <section className="section tight">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">Отзывы</div>
            <h2 className="section-title">Что говорят клиенты</h2>
          </div>
          <p className="section-subtitle">
            Владельцы и администраторы отмечают экономию времени и рост записи.
          </p>
        </div>
        <div className="grid three">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06}>
              <div className="card">
                <p style={{ color: "var(--text-1)", marginBottom: 14 }}>{item.text}</p>
                <div className="tag">{item.name}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
