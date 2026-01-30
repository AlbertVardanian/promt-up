function loadUser() {
  return JSON.parse(localStorage.getItem("user"));
}

function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function registerUser(tgUser) {
  const user = {
    id: tgUser.id,
    name: tgUser.username || tgUser.first_name,
    goal: null,
    coins: 100,
    xp: 0
  };
  saveUser(user);
  return user;
}
