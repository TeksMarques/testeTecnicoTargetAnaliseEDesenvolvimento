document.addEventListener("DOMContentLoaded", () => {
  const reverseButton = document.getElementById("reverseButton");
  reverseButton.addEventListener("click", () => {
    const inputString = document.getElementById("inputString").value;
    let reversedString = "";

    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString[i];
    }

    document.getElementById(
      "reversedString"
    ).textContent = `A sua palavra ou frase invertida: ${reversedString}`;
  });
});
