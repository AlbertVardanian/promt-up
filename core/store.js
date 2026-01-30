function buyModule(user, moduleName, cost) {
  if (user.coins < cost) return false;
  user.coins -= cost;
  saveUser(user);
  return true;
}
