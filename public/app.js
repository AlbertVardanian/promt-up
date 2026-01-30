import { baseModules } from "./data/modules.base.js";
import { targetModules } from "./data/modules.target.js";
import { premiumModules } from "./data/modules.premium.js";
import { extraModules } from "./data/modules.extra.js";

const app = document.getElementById("app");

renderStart();

function renderStart() {
  app.innerHTML = `
    <h1>Promt Up</h1>
    <button id="startBtn">Начать обучение</button>
  `;

  document
    .getElementById("startBtn")
    .addEventListener("click", renderGoals);
}

function renderGoals() {
  app.innerHTML = `
    <h2>Выбери цель</h2>
    <div class="goals">
      <button data-goal="self">Для себя</button>
      <button data-goal="business">Для бизнеса</button>
      <button data-goal="work">Для работы</button>
      <button data-goal="study">Для учёбы</button>
    </div>
  `;

  document.querySelectorAll("[data-goal]").forEach(btn => {
    btn.addEventListener("click", () => {
      const goal = btn.dataset.goal;
      localStorage.setItem("goal", goal);
      renderModules(goal);
    });
  });
}

function renderModules(goal) {
  app.innerHTML = `<h2>Модули обучения</h2>`;

  renderSection(
    "Бесплатные — база",
    baseModules.map(m => m.title)
  );

  renderSection(
    "Бесплатные — по цели",
    targetModules[goal].map(m => m.title)
  );

  renderSection(
    "Премиум",
    premiumModules[goal],
    true
  );

  renderSection(
    "Дополнительные за монеты",
    extraModules,
    true
  );
}

function renderSection(title, items, locked = false) {
  app.innerHTML += `
    <h3>${title}</h3>
    <ul>
      ${items
        .map(i => `<li>${i} ${locked ? "🔒" : ""}</li>`)
        .join("")}
    </ul>
  `;
}
