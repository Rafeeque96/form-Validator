// We need a listener
// Lets validate the form again using JS
// We need to check the password match
// Store the form data

// DOM Elements
// ------------------------------------------------------------------------------
let formEl = document.getElementById("form");
let messageEl = document.getElementById("message");
let messagecontainerEl = document.querySelector(".message-container");
let passwords = document.querySelectorAll(".password");

// Flags / Variables
// ------------------------------------------------------------------------------
let isValid = false;
let passwordMatch = false;
let storedData = {};

// Utility function
// ------------------------------------------------------------------------------
const updateClasses = (domEl, addClass, removeClass) => {
  domEl.classList.remove(removeClass);
  domEl.classList.add(addClass);
};

const updateMessage = (message) => {
  messageEl.innerHTML = message;
};

// Validate the form before we store the data
// ------------------------------------------------------------------------------
const validateForm = () => {
  isValid = formEl.checkValidity();

  // instructions
  if (!isValid) {
    updateMessage("Something is wrong");
    updateClasses(messagecontainerEl, "fail", "pass");
    return false;
  } else {
    updateMessage("Registration successful");
    updateClasses(messagecontainerEl, "pass", "fail");
    return true;
  }
};

// Check the passwords
// ------------------------------------------------------------------------------
const checkPassword = () => {
  let password1Value = passwords[0].value;
  let password2Value = passwords[1].value;

  if (password1Value === password2Value) {
    updateClasses(messagecontainerEl, "pass", "fail");
    passwordMatch = true;
    passwords.forEach((password) => {
      passwordMatch && updateClasses(password, "pass", "fail");
    });

    return true;
  } else {
    updateMessage("Password mis match found");
    updateClasses(messagecontainerEl, "fail", "pass");

    passwords.forEach((password) => {
      updateClasses(password, "fail", "pass");
    });

    return false;
  }
};

// Store the form data
// ------------------------------------------------------------------------------
const storeFormData = () => {
  storedData = {
    fullName: formEl.name.value,
    phNumber: formEl.phone.value,
    emailAddress: formEl.email.value,
    websiteURL: formEl.website.value,
    password: formEl.password1.value,
  };

  console.log(storedData);
};

// Lets start processing the form data
// ------------------------------------------------------------------------------
const processFormData = (event) => {
  event.preventDefault();

  let check1,
    check2 = false;

  // Form validation
  check1 = validateForm();
  // Check password match
  check2 = check1 && checkPassword();

  // Now the data is ready, please save it
  check1 && check2 ? storeFormData() : false;
};

// Event listeners
// ------------------------------------------------------------------------------
formEl.addEventListener("submit", processFormData);
