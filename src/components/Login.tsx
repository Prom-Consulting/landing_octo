import { Reveal } from "./Reveal";

export default function Login() {
  return (
    <section className="section" id="login">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">Личный кабинет</div>
            <h2 className="section-title">Вход и старт пробного периода</h2>
          </div>
          <p className="section-subtitle">
            Зарегистрируйтесь, привяжите карту и получите полный доступ к системе за 2 минуты.
          </p>
        </div>
        <Reveal>
          <div className="grid two">
            <div className="card" style={{ padding: 28 }}>
              <h3 style={{ marginBottom: 12 }}>Создать аккаунт</h3>
              <p style={{ color: "var(--text-2)", marginBottom: 16 }}>
                7 дней бесплатно, далее автосписание по выбранному тарифу.
              </p>
              <div className="grid" style={{ gap: 12 }}>
                <div className="card" style={{ padding: 12 }}>
                  Email + пароль
                </div>
                <div className="card" style={{ padding: 12 }}>
                  Привязка карты
                </div>
                <div className="card" style={{ padding: 12 }}>
                  Запуск пробного периода
                </div>
              </div>
              <a className="btn primary" href="#pricing" style={{ marginTop: 18 }}>
                Перейти к тарифам
              </a>
            </div>
            <div className="card" style={{ padding: 28 }}>
              <h3 style={{ marginBottom: 12 }}>Войти</h3>
              <p style={{ color: "var(--text-2)", marginBottom: 16 }}>
                Уже есть аккаунт? Авторизуйтесь и перейдите в дашборд.
              </p>
              <div className="grid" style={{ gap: 12 }}>
                <div className="card" style={{ padding: 12 }}>
                  Email + пароль
                </div>
                <div className="card" style={{ padding: 12 }}>
                  Доступ к модулям CRM
                </div>
              </div>
              <a className="btn ghost" href="#contacts" style={{ marginTop: 18 }}>
                Связаться с поддержкой
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
