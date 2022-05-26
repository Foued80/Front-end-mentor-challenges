const submitBtn = document.getElementsByClassName("front_submit");
const frontCard = document.getElementsByClassName("front");
const backCard = document.getElementsByClassName("back");
const backRating = document.getElementsByClassName("back_rating");
let selected = false;
let score = 0;

function submitCard() {
  if (selected) {
    frontCard[0].style.display = "none";
    backCard[0].style.display = "flex";
    backRating[0].innerHTML = score;
  }
}

function choice(btn_id) {
  selected = true;
  const allScores = document.getElementsByClassName("front_rating_circle");
  for (var i = 0; i < allScores.length; i++) {
    allScores[i].classList.remove("scored");
  }
  document.getElementById(btn_id).classList.toggle("scored");
  score = btn_id;
}
