/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/advanced-form.html#L50
============================================
*/
// TODO: Get DOM elements from the DOM
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const addressInput = document.getElementById("address");
const subjectInput = document.getElementById("subject");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const addressError = document.getElementById("address-error");
const subjectError = document.getElementById("subject-error");
const validationMessageContainer =
  document.getElementById("validation-message");

function validateForm(event) {
  event.preventDefault();

  checkLength(nameInput, 1, nameError);
  checkLength(addressInput, 25, addressError);
  checkLength(subjectInput, 10, subjectError);
  validateEmail(emailInput, emailError);
}
contactForm.addEventListener("change", validateForm);

function checkLength(target, requiredLength, errorContainer) {
  if (target.value.trim().length < requiredLength) {
    errorContainer.classList.remove("is-hidden");
  } else {
    errorContainer.classList.add("is-hidden");
  }
}

function validateEmail(email, errorContainer) {
  const regEx =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  const patternMatches = regEx.test(email.value);

  if (patternMatches !== true) {
    errorContainer.classList.remove("is-hidden");
  } else {
    errorContainer.classList.add("is-hidden");
  }
}

// TODO: Create event listeners for the form

/*
============================================
API calls
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/advanced-form.html#L157
============================================
*/

// TODO: Set up a function to fetch data from the API

/*
============================================
Helper functions
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/advanced-form.html#L118
============================================
*/

// TODO: Create a function to validate an input field

// TODO: Create a function to create a DOM element
