const grid = document.querySelector(".grid");

const characters = [
  "Bale",
  "Gavi",
  "Harry Kane",
  "Lewandowski",
  "Mbappe",
  "Messi",
  "Modric",
  "Muller",
  "Neymar Jr.",
  "Ronaldo",
  "Valencia",
  "Van Djik",
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

const createCard = (character) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url('../images/card images/${character}.jpg')`;

  card.appendChild(front);
  card.appendChild(back);

  return card;
};

const loadGame = () => {
  const duplicateCharacters = [...characters, ...characters];

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
};

loadGame();
