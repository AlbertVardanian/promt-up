document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  if (!app) {
    console.error("❌ Контейнер #app не найден");
    return;
  }

  // Telegram WebApp
  const tg = window.Telegram?.WebApp;
  if (tg) {
    tg.ready();
    tg.expand();
  }

  // Стартовый экран
  app.innerHTML = `
    <div class="screen">
      <h1>Promt Up 🚀</h1>
      <p>Обучающая платформа по нейросетям</p>

      <button id="startBtn">Начать обучение</button>
    </div>
  `;

  document.getElementById("startBtn").onclick = () => {
    app.innerHTML = `
      <div class="screen">
        <h2>Выбери цель</h2>

        <button class="goal">Для себя</button>
        <button class="goal">Для бизнеса</button>
        <button class="goal">Для работы</button>
        <button class="goal">Для учёбы</button>
      </div>
    `;
  };
});
