const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + p.error");

email.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // if the email field is valid, we let the form submit
  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = "error";
}

const password = document.querySelector("#password");
const pwConfirm = document.querySelector("#pw-confirm");
const pwError = document.querySelector("#pw-match");

password.addEventListener("input", (event) => {
  if (password.value && pwConfirm.value) {
    confirmPW()
  };
});

pwConfirm.addEventListener("input", (event) => {
  if (password.value && pwConfirm.value) {
    confirmPW()
  };
});

function confirmPW() {
  if (password.value == pwConfirm.value) {
    pwError.className = "is-valid";
    password.className = "is-valid";
    pwConfirm.className = "is-valid";
    pwError.innerHTML = 'Passwords match';
} else {
    pwError.className = "not-valid";
    password.className = "not-valid";
    pwConfirm.className = "not-valid";
    pwError.innerHTML = '* Passwords do not match';
  };
};

const zipCode = document.querySelector("#zip");
const zipError = document.querySelector("#zip-error");

zipCode.addEventListener("input", (event) => {
  if (isNaN(zipCode.value)) {
    zipCode.className = "not-valid";
    zipError.className = "not-valid";
    zipError.innerHTML = "Only numbers allowed!";
  } else {
    zipCode.className = "is-valid";
    zipError.className = "is-valid";
    zipError.innerHTML = "";
  };
});