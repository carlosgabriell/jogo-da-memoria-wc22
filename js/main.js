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

let firstCard = "";
let secondCard = "";

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll(".disabled-card");

  if (disabledCards.length === 24) {
    alert(`Congratulations!`);
  }
};

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute("data-character");
  const secondCharacter = secondCard.getAttribute("data-character");

  if (firstCharacter == secondCharacter) {
    firstCard.firstChild.classList.add("disabled-card");
    secondCard.firstChild.classList.add("disabled-card");

    firstCard = "";
    secondCard = "";

    checkEndGame();
  } else {
    setTimeout(() => {
      firstCard.classList.remove("reveal-card");
      secondCard.classList.remove("reveal-card");

      firstCard = "";
      secondCard = "";
    }, 500);
  }
};

const revealCard = ({ target }) => {
  if (target.parentNode.className.includes("reveal-card")) {
    return;
  }

  if (firstCard == "") {
    target.parentNode.classList.add("reveal-card");
    firstCard = target.parentNode;
  } else if (secondCard == "") {
    target.parentNode.classList.add("reveal-card");
    secondCard = target.parentNode;

    checkCards();
  }

  target.parentNode.classList.add("reveal-card");
};

const createCard = (character) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url('../assets/card_images/${character}.jpg')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revealCard);
  card.setAttribute("data-character", character);

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
// play button
const playBtn = document.querySelector(".play_btn");
var pressed = true;

playBtn.addEventListener("click", () => {
  if (pressed) {
    startTimer();
    playBtn.src = "assets/svgs-icon/pause.svg";
    pressed = false;
  } else if (pressed === false) {
    playBtn.src = "assets/svgs-icon/play.svg";
    pauseTimer();
    pressed = true;
  }
});

// reset button
const resetBtn = document.querySelector(".forward-icon");

resetBtn.addEventListener("click", () => {
  pressed = true;
  if (pressed) {
    resetTimer();
    playBtn.src = "assets/svgs-icon/play.svg";
  }
});

// cronometro
const countTime = document.querySelector(".time");
let hours = 0;
let minutes = 0;
let seconds = 0;
let time;

function startTimer() {
  time = setInterval(timer, 1000);
}

function pauseTimer() {
  clearInterval(time);
}

function resetTimer() {
  clearInterval(time);
  hours;
  hours = 0;
  minutes = 0;
  seconds = 0;

  countTime.innerHTML = "00:00:00";
}

function timer() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;

    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  countTime.innerHTML =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);
}

function heartLoss() {
  let lifes = 5;

  const hearts = ["heart1", "heart2", "heart3", "heart4", "heart5"];
  const hearts_icon = {
    heart1: document.getElementById("heart1"),
    heart2: document.getElementById("heart2"),
    heart3: document.getElementById("heart3"),
    heart4: document.getElementById("heart4"),
    heart5: document.getElementById("heart5"),
  };

  lifes--;
  lifes == 4
    ? (hearts_icon[hearts[4]].src = "assets/svgs-icon/heart-loss.svg")
    : "";
  lifes--;
  lifes == 3
    ? (hearts_icon[hearts[3]].src = "assets/svgs-icon/heart-loss.svg")
    : "";
  lifes == 2
    ? (hearts_icon[hearts[2]].src = "assets/svgs-icon/heart-loss.svg")
    : "";
  lifes == 1
    ? (hearts_icon[hearts[1]].src = "assets/svgs-icon/heart-loss.svg")
    : "";
  lifes == 0
    ? (hearts_icon[hearts[0]].src = "assets/svgs-icon/heart-loss.svg")
    : "";
}
heartLoss();

/*
let hearts = {
    heart1: document.getElementById('heart1'),
    heart2: document.getElementById('heart2'),
    heart3: document.getElementById('heart3'),
    heart4: document.getElementById('heart4'),
    heart5: document.getElementById('heart5'),
  }
    hearts.heart5.src= 'assets/svgs-icon/heart-loss.svg';
*/
