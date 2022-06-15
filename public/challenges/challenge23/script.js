let url = "https://api.adviceslip.com/advice";

function getAdvice() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let response = data.slip;
      document.getElementById("advice_text").innerHTML = response.advice;
      document.getElementById("card_id").innerHTML = response.id;
    });
}
getAdvice();

document.getElementById("card_dice").addEventListener("click", getAdvice);
