var body = document.getElementsByClassName("main")[0];
const numberOfFields = 2;
const fieldData = [
  { type: "text", placeholder: "PhoneNumber" },
  { type: "password", placeholder: "Password" },
];
const loginFormHeader = `<div class="loginFormHeader"><img class='headerImage' src="https://images.pexels.com/photos/28614694/pexels-photo-28614694/free-photo-of-peaceful-archway-in-historic-mardin-monastery.jpeg"/></div>`;
const submitButton = `<div class="submitButton" id="submit">Submit</div >`;
const processInputFields = (number, type, placeholder) => {
  return `<div class='loginFOrmInputField ${number}'><input class="inputBox" id="${placeholder}" type="${type}" placeholder="${placeholder}"/></div>`;
};
const renderMultipleInputFields = (number, renderingData) => {
  var totalInputs = loginFormHeader;
  for (var i = 0; i < number; i++) {
    totalInputs += processInputFields(
      i,
      renderingData[i].type,
      renderingData[i].placeholder
    );
  }
  totalInputs += submitButton;
  return totalInputs;
};
const loginForm = `<div class='loginForm'>${renderMultipleInputFields(2, [
  { type: "text", placeholder: "PhoneNumber" },
  { type: "password", placeholder: "Password" },
])}<div class="errorMessage"></div></div>`;
const loginFormContainer = `<div class='loginFormContainer'>${loginForm}</div>`;
body.innerHTML += loginFormContainer;
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
  return passwordRegex.test(password);
};

const validatePhoneNumber = (phoneNumber) => {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phoneNumber);
};

const submitButtonRef = document.getElementById("submit");
submitButtonRef.addEventListener("click", () => {
  var isFormValid = true;
  var formError = "";
  fieldData.map((singleField) => {
    const fieldRef = document.getElementById(singleField.placeholder);
    if (singleField.placeholder == "PhoneNumber") {
      if (!validatePhoneNumber(fieldRef.value)) {
        isFormValid=false;
        formError+="Please enter a Valid phone number\n";
      }
    } else if (singleField.placeholder == "Email") {
      if (!validateEmail(fieldRef.value)) {
        isFormValid=false;
        formError+="Please enter a Valid Email\n";
      }
    } else if (singleField.placeholder == "Password") {
      if (!validatePassword(fieldRef.value)) {
        isFormValid=false;
        formError+="Please enter a Valid Password\n";
      }
    }
  });

  if(!isFormValid){
    const errorMessageAreaRef = document.getElementsByClassName("errorMessage")[0];
    errorMessageAreaRef.textContent =formError 
  }
});
