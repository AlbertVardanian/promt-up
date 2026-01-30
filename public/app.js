const app = document.getElementById("app");

const tgUser = getTelegramUser();
if (!tgUser) {
  app.innerHTML = "<h2>Открой приложение через Telegram</h2>";
} else {
  let user = loadUser() || registerUser(tgUser);

  if (!user.goal) {
    renderGoalSelect();
  } else {
    renderDashboard();
  }
}

function renderGoalSelect() {
  app.innerHTML = "<h2>Выбери цель обучения</h2>";
  GOALS.forEach(goal => {
    const btn = document.createElement("button");
    btn.textContent = goal.title;
    btn.onclick = () => {
      user.goal = goal.id;
      user.modules = generateFreeModules(goal.id);
      saveUser(user);
      renderDashboard();
    };
    app.appendChild(btn);
  });
}

function renderDashboard() {
  app.innerHTML = `<h2>Привет, ${user.name}</h2><h3>Твои модули:</h3>`;
  user.modules.forEach(m => {
    const div = document.createElement("div");
    div.textContent = "• " + m;
    app.appendChild(div);
  });
}
