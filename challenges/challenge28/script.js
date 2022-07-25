let top_s_1 = document.getElementById("top_s_1");
let top_s_2 = document.getElementById("top_s_2");
let bot_s_3 = document.getElementById("bot_s_3");
let bot_s_4 = document.getElementById("bot_s_4");
let top_m_1 = document.getElementById("top_m_1");
let top_m_2 = document.getElementById("top_m_2");
let bot_m_3 = document.getElementById("bot_m_3");
let bot_m_4 = document.getElementById("bot_m_4");
let top_h_2 = document.getElementById("top_h_2");
let bot_h_3 = document.getElementById("bot_h_3");
let bot_h_4 = document.getElementById("bot_h_4");
let top_d_2 = document.getElementById("top_d_2");
let bot_d_3 = document.getElementById("bot_d_3");
let bot_d_4 = document.getElementById("bot_d_4");
let secondes = 41; //41
let minutes = 55; //55
let hours = 23; //23
let days = "08"; //8
let left = 0;
let lastMinutes;
let lastHours;
let lastDays;
let totalInSecondes =
  days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + secondes;
top_m_2.style.animationName = "none";
bot_m_3.style.animationName = "none";

top_s_2.innerText = secondes + 1;
bot_s_4.innerText = secondes + 1;

top_m_2.innerText = minutes;
bot_m_4.innerText = minutes;

top_h_2.innerText = hours;
bot_h_4.innerText = hours;

top_d_2.innerText = days;
bot_d_4.innerText = days;

const myInterval = setInterval(() => {
  if (totalInSecondes > -1) {
    lastMinutes = top_m_2.innerText;
    lastHours = top_h_2.innerText;
    lastDays = top_d_2.innerText;

    secondes = toSecondes(totalInSecondes);
    minutes = toMinutes(totalInSecondes);
    hours = toHours(totalInSecondes);
    days = toDays(totalInSecondes);
    if (secondes === 59) {
      top_s_1.innerText = secondes;
      top_s_2.innerText = 0;
      bot_s_3.innerText = secondes;
      bot_s_4.innerText = 0;
      if (minutes != 0) {
        animateMinutes();
      }
    } else {
      top_s_2.innerText = secondes + 1;
    }
    if (minutes != lastMinutes) {
      animateMinutes();
    }
    if (days != lastDays) {
      animateDays();
    }
    if (hours != lastHours) {
      animateHours();
    }

    animateSecondes();
    totalInSecondes--;
  } else {
    clearInterval(myInterval);
  }
}, 2000);

top_s_2.addEventListener("animationstart", () => {
  top_s_1.innerText = secondes;
});
top_s_2.addEventListener("animationend", () => {
  bot_s_3.innerText = secondes;
  top_s_2.innerText = secondes;
});
bot_s_3.addEventListener("animationend", () => {
  bot_s_4.innerText = secondes;
});

top_m_2.addEventListener("animationstart", () => {
  top_m_1.innerText = minutes;
});
top_m_2.addEventListener("animationend", () => {
  bot_m_3.innerText = minutes;
  top_m_2.innerText = minutes;
});
bot_m_3.addEventListener("animationend", () => {
  bot_m_4.innerText = minutes;
});

top_h_2.addEventListener("animationstart", () => {
  top_h_1.innerText = hours;
});
top_h_2.addEventListener("animationend", () => {
  bot_h_3.innerText = hours;
  top_h_2.innerText = hours;
});
bot_h_3.addEventListener("animationend", () => {
  bot_h_4.innerText = hours;
});

top_d_2.addEventListener("animationstart", () => {
  top_d_1.innerText = days;
});
top_d_2.addEventListener("animationend", () => {
  bot_d_3.innerText = days;
  top_d_2.innerText = days;
});
bot_d_3.addEventListener("animationend", () => {
  bot_d_4.innerText = days;
});

function toDays(totalInSecondes) {
  return Math.floor(totalInSecondes / 86400);
}
function toHours(totalInSecondes) {
  let timeLeft = totalInSecondes % 86400;
  return Math.floor(timeLeft / 3600);
}
function toMinutes(totalInSecondes) {
  let timeLeft = totalInSecondes % 86400;
  timeLeft = timeLeft % 3600;
  return Math.floor(timeLeft / 60);
}
function toSecondes(totalInSecondes) {
  let timeLeft = totalInSecondes % 86400;
  timeLeft = timeLeft % 3600;
  timeLeft = timeLeft % 60;
  return Math.floor(timeLeft);
}
function animateSecondes() {
  top_s_2.style.animationName = "none";
  bot_s_3.style.animationName = "none";
  setTimeout(() => {
    top_s_2.style.animationName = "flipDownTop";
    bot_s_3.style.animationName = "flipDownBot";
  }, 0);
}
function animateMinutes() {
  top_m_2.style.animationName = "none";
  bot_m_3.style.animationName = "none";
  setTimeout(() => {
    top_m_2.style.animationName = "flipDownTop";
    bot_m_3.style.animationName = "flipDownBot";
  }, 0);
}
function animateHours() {
  top_h_2.style.animationName = "none";
  bot_h_3.style.animationName = "none";
  setTimeout(() => {
    top_h_2.style.animationName = "flipDownTop";
    bot_h_3.style.animationName = "flipDownBot";
  }, 0);
}
function animateDays() {
  top_d_2.style.animationName = "none";
  bot_d_3.style.animationName = "none";
  setTimeout(() => {
    top_d_2.style.animationName = "flipDownTop";
    bot_d_3.style.animationName = "flipDownBot";
  }, 0);
}
