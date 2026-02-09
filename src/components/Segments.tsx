import { Reveal } from "./Reveal";

const segments = [
  {
    title: "Салоны красоты",
    text: "Записи по мастерам, абонементы и управление расходниками.",
    points: [
      "Гибкое расписание мастеров",
      "История услуг и предпочтений",
      "Контроль материалов и себестоимости"
    ]
  },
  {
    title: "Детейлинг и автосервисы",
    text: "Статусы по авто, постам и пакетам работ.",
    points: [
      "Учет по постам и боксам",
      "Карточка автомобиля и фото",
      "Планирование загруженности"
    ]
  },
  {
    title: "Клиники и медцентры",
    text: "Расписание врачей, услуги, документы и повторные визиты.",
    points: [
      "Карточка пациента и история",
      "Распределение кабинетов",
      "Отчеты по врачам и услугам"
    ]
  }
];

export default function Segments() {
  return (
    <section className="section" id="segments">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">Для кого</div>
            <h2 className="section-title">Настроено под три ключевые ниши</h2>
          </div>
          <p className="section-subtitle">
            Octo CRM адаптируется под процессы салонов, детейлинга и клиник,
            чтобы вы получали максимум пользы без доработок.
          </p>
        </div>
        <div className="grid three">
          {segments.map((segment, index) => (
            <Reveal key={segment.title} delay={index * 0.08}>
              <div className="card segment-card">
                <div className="tag">Сегмент</div>
                <div className="segment-title">{segment.title}</div>
                <p style={{ color: "var(--text-2)", marginBottom: 16 }}>
                  {segment.text}
                </p>
                <ul>
                  {segment.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
