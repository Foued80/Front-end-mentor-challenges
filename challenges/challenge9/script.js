const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const myEmail = document.getElementById("myEmail");
const myPassword = document.getElementById("myPassword");
const myButton = document.getElementById("myButton");

const EmailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

myButton.addEventListener("click", (e) => {
  myButton.type = "button";
  let invalid = 0;
  if (fname.value === "") {
    fname.classList.add("is-invalid-icon");
    el = fname.nextElementSibling;
    el.classList.add("is-invalid-text");
    invalid++;
  } else {
    fname.classList.remove("is-invalid-icon");
    el = fname.nextElementSibling;
    el.classList.remove("is-invalid-text");
    invalid--;
  }

  if (lname.value === "") {
    lname.classList.add("is-invalid-icon");
    el = lname.nextElementSibling;
    el.classList.add("is-invalid-text");
    invalid++;
  } else {
    lname.classList.remove("is-invalid-icon");
    el = lname.nextElementSibling;
    el.classList.remove("is-invalid-text");
    invalid--;
  }
  if (myEmail.value === "") {
    myEmail.classList.add("is-invalid-icon");
    el = myEmail.nextElementSibling;
    el.classList.add("is-invalid-text");
    invalid++;
  } else if (!myEmail.value.match(EmailPattern)) {
    myEmail.classList.add("is-invalid-icon");
    myEmail.classList.add("is-invalid-email");
    el = myEmail.nextElementSibling;
    el.classList.add("is-invalid-text");
    invalid++;
  } else {
    myEmail.classList.remove("is-invalid-icon");
    myEmail.classList.remove("is-invalid-email");
    el = myEmail.nextElementSibling;
    el.classList.remove("is-invalid-text");
    invalid--;
  }

  if (myPassword.value === "") {
    myPassword.classList.add("is-invalid-icon");
    el = myPassword.nextElementSibling;
    el.classList.add("is-invalid-text");
    invalid++;
  } else {
    myPassword.classList.remove("is-invalid-icon");
    el = myPassword.nextElementSibling;
    el.classList.remove("is-invalid-text");
    invalid--;
  }
  if (invalid == -4) {
    myButton.type = "submit";
  }

  console.log(invalid);
});
