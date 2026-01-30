import { baseModules } from "../data/modules.base.js";
import { targetModules } from "../data/modules.target.js";
import { premiumModules } from "../data/modules.premium.js";
import { extraModules } from "../data/modules.extra.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  renderGoals();

  function renderGoals() {
    app.innerHTML = `
      <h2>Выбери цель</h2>
      <button onclick="selectGoal('self')">Для себя</button>
      <button onclick="selectGoal('business')">Для бизнеса</button>
      <button onclick="selectGoal('work')">Для работы</button>
      <button onclick="selectGoal('study')">Для учёбы</button>
    `;
  }

  window.selectGoal = goal => {
    localStorage.setItem("goal", goal);
    renderModules(goal);
  };

  function renderModules(goal) {
    app.innerHTML = `<h2>Модули обучения</h2>`;

    renderSection("Бесплатные — база", baseModules.map(m => m.title));
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
          .map(
            i =>
              `<li>${i} ${locked ? "🔒" : ""}</li>`
          )
          .join("")}
      </ul>
    `;
  }
});
