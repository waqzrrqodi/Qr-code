const box = document.getElementById("colour-text");
      const buttons = document.querySelectorAll(".colour-button");

      buttons.forEach(button => {
        button.addEventListener("click", () => {
          box.style.color = button.classList[1];
        });
      });