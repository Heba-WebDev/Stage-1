const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const today = new Date();
const dayOfWeek = document.getElementById("dayOfWeek");
dayOfWeek.innerHTML = days[today.getDay()];
const currentUTCTime = document.getElementById("currentUTCTime");
currentUTCTime.innerHTML = today.getTime();
