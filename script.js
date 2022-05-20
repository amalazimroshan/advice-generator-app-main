let advise = document.querySelector(".response");
let id = document.querySelector(".id");
let dice = document.querySelector("#dice");
async function fetchAdvise() {
  const response = await fetch(`https://api.adviceslip.com/advice`);
  const result = await response.json();
  advise.textContent = `"${result.slip.advice}"`;
  id.textContent = `ADVICE #${result.slip.id}`;
}
dice.addEventListener("click", fetchAdvise);
fetchAdvise();
