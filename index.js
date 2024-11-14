var body = document.getElementsByClassName("main")[0];

const loginFormHeader = `<div class="loginFormHeader"><img class='headerImage' src="https://images.pexels.com/photos/28614694/pexels-photo-28614694/free-photo-of-peaceful-archway-in-historic-mardin-monastery.jpeg"/></div>`;

const processInputFields = (number, type, placeholder) => {
  return `<div class='loginFOrmInputField${number}'><input type="${type}" placeholder="${placeholder}"/></div>`;
};
const renderMultipleInputFields = (number,renderingData) => {
  var totalInputs = loginFormHeader;
  for (var i = 0; i < number; i++) {
    totalInputs += processInputFields(i,renderingData[i].type,renderingData[i].placeholder);
  }
  return totalInputs;
};
const loginForm = `<div class='loginForm'>${renderMultipleInputFields(2, [
  { type: "text", placeholder: "PhoneNumber" },
  { type: "password", placeholder: "Password" },
])}</div>`;
const loginFormContainer = `<div class='loginFormContainer'>${loginForm}</div>`;
body.innerHTML += loginFormContainer;
