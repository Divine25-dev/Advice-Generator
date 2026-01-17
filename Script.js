const adviceNumber = document.getElementById("advice-number");
const adviceText = document.getElementById("advice-text");
const diceBtn = document.getElementById("dice-btn");

async function getAdvice() {
  try {
    const response = await fetch(
      `https://api.adviceslip.com/advice?timestamp=${Date.now()}`
    );

    const data = await response.json();

    adviceNumber.textContent = data.slip.id;
    adviceText.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    adviceText.textContent = "Oops! Something went wrong. Try again.";
  }
}


getAdvice();
diceBtn.addEventListener("click", getAdvice);
