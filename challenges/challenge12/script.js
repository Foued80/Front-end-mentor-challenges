const myForm = document.getElementById("myForm");
const myEmail = document.getElementById("myEmail");
const errorMsg = document.getElementById("error");

myForm.addEventListener("submit", (e) => {
  if (myEmail.value === "" || !isEmail(myEmail.value)) {
    e.preventDefault();
    myEmail.classList.add("error");
    errorMsg.classList.add("error");
  } else {
    myEmail.classList.remove("error");
    errorMsg.classList.remove("error");
    //the form is submiting
  }
});

function isEmail(email) {
  const EmailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  return email.match(EmailPattern);
}
