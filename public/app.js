import { initAuth } from "../core/auth.js";
import { loadUser } from "../core/user.js";

const tg = window.Telegram.WebApp;
tg.ready();

document.getElementById("status").innerText =
  tg.initDataUnsafe?.user
    ? `Привет, ${tg.initDataUnsafe.user.first_name}`
    : "Открыто вне Telegram";

initAuth();
loadUser();
