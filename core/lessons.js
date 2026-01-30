function generateFreeModules(goalId) {
  return [
    ...BASE_MODULES.map(m => m.title),
    ...TARGET_MODULES[goalId]
  ];
}
