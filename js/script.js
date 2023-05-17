const box = document.getElementById("colour-text");
const buttons = document.querySelectorAll(".colour-button");


// Choosen module and eye
const eyebuttons = document.querySelectorAll(".eye-look-box");
let previousEyeButton = null;

  eyebuttons.forEach(eyebutton => {
    eyebutton.addEventListener("click", (event) => {

      if (previousEyeButton !== null) {
        previousEyeButton.classList.remove("box-clicked");
      }
      previousEyeButton = event.currentTarget;
      previousEyeButton.classList.add("box-clicked");
      // console.log(previousEyeButton);
    });
  }
);

const modulebuttons = document.querySelectorAll(".modules-look-box");
let previousModuleButton = null;

  modulebuttons.forEach(modulebutton => {
    modulebutton.addEventListener("click", (event) => {

      if (previousModuleButton !== null) {
        previousModuleButton.classList.remove("box-clicked");
      }
      previousModuleButton = event.currentTarget;
      previousModuleButton.classList.add("box-clicked");
      // console.log(previousModuleButton);
    });
  }
);


buttons.forEach(button => {
  button.addEventListener("click", () => {
    // add color class to textbox
    box.classList.remove("red", "blue", "green", "yellow", "purple", "orange", "pink", "black", "white", "teal");
    box.classList.add(button.classList[1]);
    const choosenColour = button.classList[1];
    // console.log(choosenColour);
  });
  });