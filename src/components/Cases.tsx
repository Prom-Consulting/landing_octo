import { Reveal } from "./Reveal";

const cases = [
  {
    title: "Салон красоты: +37% записей",
    text: "Подключили онлайн-запись и AI-ассистента — равномерно загрузили мастеров."
  },
  {
    title: "Детейлинг: контроль 5 постов",
    text: "Ввели статусы работ, фотофиксацию и контроль времени по каждому авто."
  },
  {
    title: "Клиника: порядок в расписании врачей",
    text: "Убрали накладки, настроили кабинеты и повторные визиты."
  }
];

const videos = [
  {
    title: "Обзор Octo CRM за 5 минут",
    text: "Покажем ключевые модули и сценарии работы администратора."
  },
  {
    title: "Как работает онлайн-запись",
    text: "Демонстрация расписания, слотов и напоминаний."
  },
  {
    title: "Финансовые отчеты",
    text: "Показываем отчеты по услугам и сотрудникам."
  }
];

export default function Cases() {
  return (
    <section className="section" id="cases">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">Видео и кейсы</div>
            <h2 className="section-title">Живые примеры и реальные истории</h2>
          </div>
          <p className="section-subtitle">
            Видеообзоры, обучающие ролики и кейсы, которые показывают эффект Octo CRM.
          </p>
        </div>
        <div className="grid three" style={{ marginBottom: 28 }}>
          {videos.map((video, index) => (
            <Reveal key={video.title} delay={index * 0.05}>
              <div className="card">
                <div className="tag">Видео</div>
                <h3 style={{ margin: "12px 0" }}>{video.title}</h3>
                <p style={{ color: "var(--text-2)" }}>{video.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="grid three">
          {cases.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="card">
                <div className="tag">Кейс</div>
                <h3 style={{ margin: "12px 0" }}>{item.title}</h3>
                <p style={{ color: "var(--text-2)" }}>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
