function getTelegramUser() {
  if (!window.Telegram || !Telegram.WebApp.initDataUnsafe.user) {
    return null;
  }
  return Telegram.WebApp.initDataUnsafe.user;
}
