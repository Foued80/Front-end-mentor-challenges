let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");
let work = document.getElementById("work");
let play = document.getElementById("play");
let study = document.getElementById("study");
let exercice = document.getElementById("exercice");
let social = document.getElementById("social");
let care = document.getElementById("care");

daily.addEventListener("click", () => {
  if (!daily.classList.contains("active")) {
    daily.classList.add("active");
    weekly.classList.remove("active");
    monthly.classList.remove("active");
    work.innerHTML = (32 / 7).toFixed(1) + "hrs";
    play.innerHTML = (10 / 7).toFixed(1) + "hrs";
    study.innerHTML = (4 / 7).toFixed(1) + "hrs";
    exercice.innerHTML = (4 / 7).toFixed(1) + "hrs";
    social.innerHTML = (5 / 7).toFixed(1) + "hrs";
    care.innerHTML = (2 / 7).toFixed(1) + "hrs";
  }
});
weekly.addEventListener("click", () => {
  daily.classList.remove("active");
  weekly.classList.add("active");
  monthly.classList.remove("active");
  work.innerHTML = 32 + "hrs";
  play.innerHTML = 10 + "hrs";
  study.innerHTML = 4 + "hrs";
  exercice.innerHTML = 4 + "hrs";
  social.innerHTML = 5 + "hrs";
  care.innerHTML = 2 + "hrs";
});
monthly.addEventListener("click", () => {
  daily.classList.remove("active");
  weekly.classList.remove("active");
  monthly.classList.add("active");
  work.innerHTML = 32 * 4 + "hrs";
  play.innerHTML = 10 * 4 + "hrs";
  study.innerHTML = 4 * 4 + "hrs";
  exercice.innerHTML = 4 * 4 + "hrs";
  social.innerHTML = 5 * 4 + "hrs";
  care.innerHTML = 2 * 4 + "hrs";
});
