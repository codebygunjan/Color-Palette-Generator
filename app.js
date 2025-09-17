const button = document.querySelector(".btn");
const palette = document.querySelector(".palette");
const letters = document.querySelectorAll(".content p");

button.addEventListener("click", () => {
  palette.innerHTML = "";

  letters.forEach((letter) => {
    let color =
      "#" +
      Math.floor(Math.random() * 16777256)
        .toString(16)
        .padStart(6, "0");
    letter.style.color = color;
  });

  for (let i = 0; i < 5; i++) {
    let color =
      "#" +
      Math.floor(Math.random() * 16777256)
        .toString(16)
        .padStart(6, "0");
    let colorBox = document.createElement("div");
    colorBox.classList.add("colorBox");
    colorBox.style.backgroundColor = color;
    colorBox.textContent = color;
    colorBox.addEventListener("click", () => {
      navigator.clipboard.writeText(color);
      colorBox.textContent = "copied!✅ ";
      colorBox.classList.add("copied");
      setTimeout(() => {
        colorBox.textContent = color;
        colorBox.classList.remove("copied");
      },1000);
    });
    palette.appendChild(colorBox);
  }
});
