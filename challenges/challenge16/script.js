const errorMsg = document.getElementById("input_error");
const myForm = document.getElementById("form");
const myInput = document.getElementById("myInput");

myForm.addEventListener("submit", (e) => {
  if (myInput.value === "" || !isEmail(myInput.value)) {
    e.preventDefault();
    errorMsg.classList.add("visible");
  } else {
    errorMsg.classList.remove("visible");
    //the form is submiting
  }
});

function isEmail(email) {
  const EmailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  return email.match(EmailPattern);
}
