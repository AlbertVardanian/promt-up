// app.js — ПОЛНЫЙ ФАЙЛ

const app = document.getElementById("app");

/* =========================
   ДАННЫЕ
========================= */

const goals = [
  { id: "school", title: "Для школы / института" },
  { id: "work", title: "Для работы" },
  { id: "business", title: "Для бизнеса" },
  { id: "self", title: "Для себя" }
];

const modulesByGoal = {
  school: [
    {
      id: "school_free_1",
      title: "Основы ИИ",
      lessons: [
        "Что такое ИИ",
        "Как работает нейросеть",
        "Где ИИ используют"
      ]
    },
    {
      id: "school_free_2",
      title: "Работа с текстом",
      lessons: [
        "ИИ для рефератов",
        "Краткие конспекты",
        "Подготовка к экзаменам"
      ]
    },
    {
      id: "school_free_3",
      title: "Практика",
      lessons: [
        "Решение задач",
        "Проверка ответов",
        "Самопроверка"
      ]
    }
  ],

  work: [
    {
      id: "work_free_1",
      title: "ИИ в работе",
      lessons: [
        "ИИ как помощник",
        "Экономия времени",
        "Типовые задачи"
      ]
    },
    {
      id: "work_free_2",
      title: "Документы",
      lessons: [
        "Письма",
        "Отчёты",
        "Инструкции"
      ]
    },
    {
      id: "work_free_3",
      title: "Практика",
      lessons: [
        "Реальные кейсы",
        "Ошибки",
        "Оптимизация"
      ]
    }
  ],

  business: [
    {
      id: "business_free_1",
      title: "ИИ для бизнеса",
      lessons: [
        "Автоматизация",
        "Продажи",
        "Поддержка"
      ]
    },
    {
      id: "business_free_2",
      title: "Контент",
      lessons: [
        "Реклама",
        "Описания",
        "Сценарии"
      ]
    },
    {
      id: "business_free_3",
      title: "Практика",
      lessons: [
        "Запуск идей",
        "Тест гипотез",
        "Анализ"
      ]
    }
  ],

  self: [
    {
      id: "self_free_1",
      title: "ИИ для себя",
      lessons: [
        "Обучение",
        "Планирование",
        "Идеи"
      ]
    },
    {
      id: "self_free_2",
      title: "Креатив",
      lessons: [
        "Тексты",
        "Истории",
        "Мышление"
      ]
    },
    {
      id: "self_free_3",
      title: "Практика",
      lessons: [
        "Личные задачи",
        "Эксперименты",
        "Рост"
      ]
    }
  ]
};

/* =========================
   РЕНДЕРЫ
========================= */

function renderStart() {
  app.innerHTML = `
    <div class="screen">
      <h1>PromtUp</h1>
      <button class="primary" id="startBtn">Начать обучение</button>
    </div>
  `;

  document.getElementById("startBtn").onclick = renderGoals;
}

function renderGoals() {
  app.innerHTML = `
    <div class="screen">
      <h2>Выбери цель</h2>
      <div class="grid">
        ${goals
          .map(
            g => `<button class="card" data-goal="${g.id}">${g.title}</button>`
          )
          .join("")}
      </div>
    </div>
  `;

  document.querySelectorAll("[data-goal]").forEach(btn => {
    btn.onclick = () => renderModules(btn.dataset.goal);
  });
}

function renderModules(goalId) {
  const modules = modulesByGoal[goalId];

  app.innerHTML = `
    <div class="screen">
      <h2>Модули</h2>
      <div class="list">
        ${modules
          .map(
            m => `
          <button class="module" data-module="${m.id}">
            ${m.title}
          </button>`
          )
          .join("")}
      </div>
      <button class="back">← Назад</button>
    </div>
  `;

  document.querySelector(".back").onclick = renderGoals;

  document.querySelectorAll("[data-module]").forEach(btn => {
    const module = modules.find(m => m.id === btn.dataset.module);
    btn.onclick = () => renderLessons(goalId, module);
  });
}

function renderLessons(goalId, module) {
  app.innerHTML = `
    <div class="screen">
      <h2>${module.title}</h2>
      <div class="list">
        ${module.lessons
          .map(
            (lesson, index) =>
              `<button class="lesson" data-lesson="${index}">
                ${lesson}
              </button>`
          )
          .join("")}
      </div>
      <button class="back">← К модулям</button>
    </div>
  `;

  document.querySelector(".back").onclick = () =>
    renderModules(goalId);

  document.querySelectorAll("[data-lesson]").forEach(btn => {
    const index = btn.dataset.lesson;
    btn.onclick = () =>
      renderLessonScreen(module.title, module.lessons[index]);
  });
}

function renderLessonScreen(moduleTitle, lessonTitle) {
  app.innerHTML = `
    <div class="screen">
      <h2>${lessonTitle}</h2>
      <p>
        Это экран урока.<br>
        Здесь будет теория, примеры и практика.
      </p>
      <button class="primary">Перейти к практике</button>
      <button class="back">← Назад</button>
    </div>
  `;

  document.querySelector(".back").onclick = renderStart;
}

/* =========================
   СТАРТ
========================= */

renderStart();
