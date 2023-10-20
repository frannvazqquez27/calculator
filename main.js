document.addEventListener("DOMContentLoaded", function () {
  const screen = document.getElementById("screen");
  const buttons = document.querySelectorAll(".buttons a");

  let expression = "";

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const value = button.getAttribute("data-key");
      if (value === "clear") {
          expression = "";
      } else if (value === "equal") {
          try {
              expression = eval(expression);
          } catch (error) {
              alert("Error en la expresión");
              expression = "";
          }
      } else {
          expression += value;
      }
      screen.textContent = expression;
    });
  });
});