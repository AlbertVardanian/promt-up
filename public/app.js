const app = document.getElementById("app");

/* ========= ЭКРАНЫ ========= */

function screenStart() {
  app.innerHTML = `
    <h1>Promt Up</h1>
    <p>Обучение нейросетям и промпт-инжинирингу</p>
    <button class="primary" onclick="screenGoals()">Начать обучение</button>
  `;
}

function screenGoals() {
  app.innerHTML = `
    <h1>Выбери цель</h1>
    <button class="secondary" onclick="selectGoal('work')">Для работы</button>
    <button class="secondary" onclick="selectGoal('business')">Для бизнеса</button>
    <button class="secondary" onclick="selectGoal('study')">Для обучения</button>
    <button class="secondary" onclick="selectGoal('self')">Для себя</button>
  `;
}

function selectGoal(goal) {
  localStorage.setItem("promtup_goal", goal);
  screenModules();
}

function screenModules() {
  const goal = localStorage.getItem("promtup_goal");

  app.innerHTML = `
    <h1>Модули обучения</h1>

    <p><strong>Бесплатные основные</strong></p>
    <ul>
      <li>Основы нейросетей</li>
      <li>Базовый промпт-инжиниринг</li>
      <li>Универсальные сценарии AI</li>
    </ul>

    <p><strong>Целевые модули (${goal})</strong></p>
    <ul>
      <li>AI под выбранную цель</li>
      <li>Практика использования</li>
      <li>Типовые задачи</li>
    </ul>

    <button class="primary" onclick="screenStart()">На главную</button>
  `;
}

/* ========= ЗАПУСК ========= */

screenStart();
