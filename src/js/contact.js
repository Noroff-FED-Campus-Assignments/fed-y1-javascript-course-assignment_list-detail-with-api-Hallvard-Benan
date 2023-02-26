const contactForm = document.getElementById("contact-form");
const intro = document.getElementById("js-contact-intro");
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

  hideError(nameError);
  hideError(emailError);
  hideError(addressError);
  hideError(subjectError);

  const nameIsValid = checkLength(nameInput, 1, nameError);
  const addressIsValid = checkLength(addressInput, 25, addressError);
  const emailIsValid = validateEmail(emailInput, emailError);
  const subjectIsValid = checkLength(subjectInput, 10, subjectError);

  if (nameIsValid && addressIsValid && emailIsValid && subjectIsValid) {
    intro.innerHTML = "";
    contactForm.innerHTML = `<div><div/>`;
    validationMessageContainer.innerHTML =
      '<div class="form-success"><h2>Thank you for your submission!</h2><p>Submission succsessful ✅</p></div><div><a href="javascript:history.back()" class="pagebuttons">← Back to beers</a></div>';
    contactForm.reset();
  }
}
contactForm.addEventListener("submit", validateForm);

function checkLength(target, requiredLength, errorContainer) {
  if (target.value.trim().length < requiredLength) {
    errorContainer.classList.remove("is-hidden");
    return false;
  } else {
    errorContainer.classList.add("is-hidden");
    return true;
  }
}

function hideError(errorContainer) {
  errorContainer.classList.add("is-hidden");
}

function validateEmail(email, errorContainer) {
  const regEx =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  const patternMatches = regEx.test(email.value);

  if (patternMatches !== true) {
    errorContainer.classList.remove("is-hidden");
    return false;
  } else {
    errorContainer.classList.add("is-hidden");
    return true;
  }
}
