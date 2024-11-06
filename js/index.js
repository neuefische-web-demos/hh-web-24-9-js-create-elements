console.clear();

const form = document.querySelector('[data-js="card-form"]');
const textInput = document.querySelector('[data-js="text-input"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

console.log(document.body);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newCard = document.createElement("li");
  //   newCard.textContent = "Hello";
  //   newCard.textContent = textInput.value;
  newCard.innerHTML = `
<h2>Card</h2>
<p>${textInput.value}</p>
`;
  newCard.classList.add("card");
  cardContainer.append(newCard);
});
