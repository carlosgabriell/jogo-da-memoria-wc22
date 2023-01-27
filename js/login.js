const input = document.querySelector(".login_input");
const button = document.querySelector(".button");

const validateInput = (event) => {
  console.log(event.target);
};

input.addEventListener("input", validateInput);
