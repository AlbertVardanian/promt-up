export function getLessonType(index) {
  if (index % 3 === 0) return "theory";
  if (index % 3 === 1) return "theory_practice";
  return "practice";
}
