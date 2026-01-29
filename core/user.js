export function loadUser() {
  const user = localStorage.getItem("tg_user");

  if (!user) {
    console.log("Гость");
    return;
  }

  console.log("Пользователь загружен:", JSON.parse(user));
}
    