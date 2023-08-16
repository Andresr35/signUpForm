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
const emailError = emailInput.insertAdjacentElement(
  "afterend",
  document.createElement("span")
);

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
