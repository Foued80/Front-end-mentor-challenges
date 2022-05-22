const form = document.getElementById("form");
const button = document.getElementById("button");
button.disabled = true;
const text_alert = document.getElementById("text_alert");
const email = document.getElementById("email");
const icon_error = document.getElementById("icon_error");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function inputHandler() {
  let input = document.getElementById("email").value;
  if (input.match(pattern)) {
    text_alert.classList.remove("invalid_text_alert");
    icon_error.classList.remove("invalid_icon_error");
    email.classList.remove("invalid_input");
    button.disabled = false;
  } else {
    text_alert.classList.add("invalid_text_alert");
    icon_error.classList.add("invalid_icon_error");
    email.classList.add("invalid_input");
    button.disabled = true;
  }
}
