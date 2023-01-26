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

  front.style.backgroundImage = `url('../assets/card_images/${characters[1]}.jpg')`;

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

// cronometro
const countTime = document.querySelector(".time");
let hours = 0;
let minutes = 0;
let seconds = 0;


setInterval(function() {
  seconds++;
  if(seconds == 60) {
    seconds = 0;
    minutes++;

    if(minutes == 60) {
      minutes = 0;
      hours++;
    }
  } 
  countTime.innerHTML = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds<10 ? '0' + seconds : seconds); 
  
}, 1000);
