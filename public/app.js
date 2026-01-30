document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  const tg = window.Telegram?.WebApp;
  if (tg) {
    tg.ready();
    tg.expand();
  }

  renderStart();

  // ===== ЭКРАН 1 =====
  function renderStart() {
    app.innerHTML = `
      <div class="screen">
        <h1>Promt Up 🚀</h1>
        <p>Обучающая платформа по нейросетям</p>

        <button id="startBtn">Начать обучение</button>
      </div>
    `;

    document.getElementById("startBtn").onclick = renderGoals;
  }

  // ===== ЭКРАН 2 =====
  function renderGoals() {
    app.innerHTML = `
      <div class="screen">
        <h2>Выбери цель</h2>

        <button class="goal" data-goal="self">Для себя</button>
        <button class="goal" data-goal="business">Для бизнеса</button>
        <button class="goal" data-goal="work">Для работы</button>
        <button class="goal" data-goal="study">Для учёбы</button>
      </div>
    `;

    document.querySelectorAll(".goal").forEach(btn => {
      btn.onclick = () => {
        const goal = btn.dataset.goal;
        localStorage.setItem("goal", goal);
        renderModules(goal);
      };
    });
  }

  // ===== ЭКРАН 3 (ЗАГЛУШКА) =====
  function renderModules(goal) {
    app.innerHTML = `
      <div class="screen">
        <h2>Цель выбрана</h2>
        <p><strong>${goal}</strong></p>

        <p>Модули будут здесь 👇</p>
      </div>
    `;
  }
});
