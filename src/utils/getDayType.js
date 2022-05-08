module.exports = (day) => {
  const date = new Date(day);
  return date.getDay() == 0 || date.getDay() == 6 ? "weekend" : "weekdays";
}