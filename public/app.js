// ===============================
// Promt Up — Mini App Core Logic
// ===============================

const app = document.getElementById("app");

// -------------------------------
// STATE
// -------------------------------
let state = {
  goal: null,
  screen: "start", // start | goals | modules
};

// -------------------------------
// DATA — CANON STRUCTURE
// -------------------------------

// 3 FREE BASE MODULES (COMMON)
const baseModules = [
  {
    id: "O1",
    title: "Основы нейросетей",
    description:
      "Что такое AI и LLM, возможности, ограничения и почему разные нейросети хороши для разных задач",
  },
  {
    id: "O2",
    title: "Базовый промпт-инжиниринг",
    description:
      "Структура запроса, контекст, роль, формат и исправление ошибок в промптах",
  },
  {
    id: "O3",
    title: "Универсальные сценарии AI",
    description:
      "Генерация, анализ, объяснение, улучшение контента и выбор нейросети под задачу",
  },
];

// 3 FREE TARGET MODULES (PER GOAL)
const targetModules = {
  work: [
    "AI для офисной работы",
    "Деловая переписка",
    "Организация рабочих задач",
  ],
  business: [
    "AI для бизнеса",
    "Генерация бизнес-идей",
    "Анализ рынка и ЦА",
  ],
  study: [
    "AI для учёбы",
    "Конспекты и объяснения",
    "Самопроверка знаний",
  ],
  self: [
    "AI для повседневной жизни",
    "Личный AI-помощник",
    "Планирование и цели",
  ],
};

// 14 PREMIUM MODULES (PER GOAL)
const premiumModules = {
  work: [
    "Продвинутая деловая переписка",
    "Отчёты и документы PRO",
    "AI для презентаций",
    "Анализ рабочих данных",
    "Автоматизация рутины",
    "Управление временем",
    "AI для переговоров",
    "Исправление и редактирование",
    "AI-ассистент сотрудника",
    "Решение сложных рабочих задач",
    "Карьерный рост",
    "Экспертное мышление",
    "Повышение эффективности",
    "Профессиональный уровень AI",
  ],
  business: [
    "Бизнес-мышление с AI",
    "Проверка гипотез",
    "Продуктовое мышление",
    "Маркетинг с AI",
    "Контент для бизнеса",
    "Продажи и скрипты",
    "Воронки и офферы",
    "Бизнес-планирование",
    "Автоматизация процессов",
    "Аналитика и метрики",
    "Масштабирование",
    "Стратегии роста",
    "Управление рисками",
    "AI для предпринимателя",
  ],
  study: [
    "Глубокое понимание тем",
    "Подготовка к тестам",
    "Подготовка к экзаменам",
    "Индивидуальные планы обучения",
    "Быстрое запоминание",
    "Работа с ошибками",
    "Повторение материала",
    "Анализ учебных текстов",
    "Обучение через практику",
    "Учёба без стресса",
    "Управление вниманием",
    "Учёба с AI-наставником",
    "Максимальная успеваемость",
    "Обучение на уровне PRO",
  ],
  self: [
    "Личный AI-ассистент PRO",
    "Продуктивность",
    "Тайм-менеджмент",
    "Принятие решений",
    "Креативное мышление",
    "Генерация идей",
    "Планирование жизни",
    "Цели и привычки",
    "Саморазвитие",
    "Анализ информации",
    "Решение жизненных задач",
    "Осознанное мышление",
    "Обучение новым навыкам",
    "Улучшение качества жизни",
  ],
};

// 10 EXTRA MODULES (COMMON, COINS)
const extraModules = [
  "Лучшие шаблоны промптов",
  "Частые ошибки пользователей",
  "Продвинутые техники запросов",
  "Креативные техники",
  "AI для идей",
  "AI для анализа",
  "Скоростное обучение",
  "AI как наставник",
  "Экспертные сценарии",
  "Максимальная эффективность",
];

// -------------------------------
// RENDER HELPERS
// -------------------------------
function clearApp() {
  app.innerHTML = "";
}

function button(text, onClick) {
  const btn = document.createElement("button");
  btn.className = "btn";
  btn.textContent = text;
  btn.onclick = onClick;
  return btn;
}

function section(title) {
  const h = document.createElement("h2");
  h.textContent = title;
  return h;
}

// -------------------------------
// SCREENS
// -------------------------------
function renderStart() {
  clearApp();

  const title = document.createElement("h1");
  title.textContent = "Promt Up";

  const subtitle = document.createElement("p");
  subtitle.textContent =
    "Обучающая платформа по использованию нейросетей под реальные задачи";

  app.appendChild(title);
  app.appendChild(subtitle);
  app.appendChild(
    button("Начать обучение", () => {
      state.screen = "goals";
      render();
    })
  );
}

function renderGoals() {
  clearApp();

  app.appendChild(section("Выбери цель обучения"));

  app.appendChild(
    button("Для работы", () => selectGoal("work"))
  );
  app.appendChild(
    button("Для бизнеса", () => selectGoal("business"))
  );
  app.appendChild(
    button("Для обучения", () => selectGoal("study"))
  );
  app.appendChild(
    button("Для себя", () => selectGoal("self"))
  );
}

function selectGoal(goal) {
  state.goal = goal;
  state.screen = "modules";
  render();
}

function renderModules() {
  clearApp();

  app.appendChild(section("Бесплатные основные модули"));

  baseModules.forEach((m) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<strong>${m.title}</strong><p>${m.description}</p>`;
    app.appendChild(div);
  });

  app.appendChild(section("Бесплатные целевые модули"));

  targetModules[state.goal].forEach((title) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<strong>${title}</strong>`;
    app.appendChild(div);
  });

  app.appendChild(section("Премиум-модули (доступ по подписке)"));

  premiumModules[state.goal].forEach((title) => {
    const div = document.createElement("div");
    div.className = "card locked";
    div.innerHTML = `<strong>${title}</strong><p>Премиум</p>`;
    app.appendChild(div);
  });

  app.appendChild(section("Дополнительные модули за монеты"));

  extraModules.forEach((title) => {
    const div = document.createElement("div");
    div.className = "card locked";
    div.innerHTML = `<strong>${title}</strong><p>За монеты</p>`;
    app.appendChild(div);
  });
}

// -------------------------------
// MAIN RENDER
// -------------------------------
function render() {
  if (state.screen === "start") renderStart();
  if (state.screen === "goals") renderGoals();
  if (state.screen === "modules") renderModules();
}

// INIT
render();
