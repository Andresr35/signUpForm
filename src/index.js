import "normalize.css";
import "./global.css";

const leftForm = document.querySelector(".leftForm");

const emailLabel = leftForm.appendChild(document.createElement("label"));
emailLabel.innerText = "Email";
emailLabel.htmlFor = "email";
const emailInput = leftForm.appendChild(document.createElement("input"));
emailInput.type = "email";
emailInput.id = "email";
emailInput.name = "email";
emailInput.required = true;

const zipLabel = leftForm.appendChild(document.createElement("label"));
zipLabel.innerText = "Zip Code";
zipLabel.htmlFor = "zipCode";
const zipInput = leftForm.appendChild(document.createElement("input"));
zipInput.type = "text";
zipInput.id = "zipCode";
zipInput.name = "zipCode";
zipInput.pattern = "[0-9]{5}";

const passwordInput = document.querySelector("#password");
const passwordError = passwordInput.insertAdjacentElement(
  "afterend",
  document.createElement("span")
);

passwordInput.addEventListener("blur", (e) => {
  e.preventDefault();
  if (!passwordInput.validity.valid || passwordInput.validity.valueMissing) {
    passwordInput.insertAdjacentElement("afterend", passwordError);
    passwordError.innerText = "Invalid Password";
    passwordInput.classList.add("invalid");
  }
});

const zipError = zipInput.insertAdjacentElement(
  "afterend",
  document.createElement("span")
);

zipInput.addEventListener("blur", (e) => {
  e.preventDefault();
  if (!zipInput.validity.valid || zipInput.validity.valueMissing) {
    zipInput.insertAdjacentElement("afterend", zipError);
    zipError.innerText = "zip error";
    zipInput.classList.add("invalid");
  } else {
    zipInput.classList.remove("invalid");
    zipError.remove();
  }
});

const countryDropdown = document.querySelector("#country");
const countryError = countryDropdown.insertAdjacentElement(
  "afterend",
  document.createElement("span")
);
const emailError = emailInput.insertAdjacentElement(
  "afterend",
  document.createElement("span")
);

countryDropdown.addEventListener("blur", (e) => {
  e.preventDefault();
  if (!countryDropdown.checkValidity()) {
    countryError.innerText = "Please select a country";
    countryDropdown.classList.add("invalid");
    countryDropdown.insertAdjacentElement("afterend", countryError);
  } else {
    countryError.remove();
    countryDropdown.classList.remove("invalid");
  }
  console.log(countryDropdown.checkValidity());
});

const showError = () => {
  emailInput.insertAdjacentElement("afterend", emailError);
  if (emailInput.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address";
  } else if (emailInput.validity.typeMismatch) {
    emailError.textContent = "Entered value has to be an email address";
  } else if (emailInput.validity.tooShort) {
    emailError.textContent = `Email should be ${emailInput.minLength} characters`;
  }
  emailError.className = "error active";
};

emailInput.addEventListener("blur", (e) => {
  if (!emailInput.validity.valid) {
    showError();
    emailInput.classList.add("invalid");
    e.preventDefault();
  } else {
    emailError.remove();
    emailInput.classList.remove("invalid");
  }
});
