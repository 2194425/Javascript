const gooiKnop = document.getElementById("gooi-knop");
const resultaatDiv = document.getElementById("resultaat");
let rollsOver = 3;
let totaalscore = 0;
let dobbelsteenWaarden = [0, 0, 0, 0, 0];
let holdStatus = [false, false, false, false, false];

const dobbelsteenPlaatjes = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
];

gooiKnop.addEventListener("click", function () {
  gooiDobbelstenen();
  rollsOver--;
  updateRollsOverDisplay();

  if (rollsOver === 0) {
    resultaatDiv.textContent += " Kiest een score!";
    gooiKnop.disabled = true;
    activeerScoreSelectie();
  }
});

function gooiDobbelstenen() {
  totaalscore = 0;
  dobbelsteenWaarden = [0, 0, 0, 0, 0];

  for (let i = 0; i < 5; i++) {
    if (!holdStatus[i]) {
      let randomGetal = Math.floor(Math.random() * 6) + 1;
      dobbelsteenWaarden[i] = randomGetal;
    }
  }

  let frequenties = dobbelsteenWaarden.reduce((acc, waarde) => {
    acc[waarde] = (acc[waarde] || 0) + 1;
    return acc;
  }, {});

  totaalscore = dobbelsteenWaarden.reduce(
    (totaal, waarde) => totaal + waarde,
    0
  );

  let isThreeOfAKind = Object.values(frequenties).some((aantal) => aantal >= 3);
  let isFourOfAKind = Object.values(frequenties).some((aantal) => aantal >= 4);

  if (isThreeOfAKind) {
    document.getElementById("three-of-a-kind-score").textContent = totaalscore;
  } else {
    document.getElementById("three-of-a-kind-score").textContent = "0";
  }

  if (isFourOfAKind) {
    document.getElementById("four-of-a-kind-score").textContent = totaalscore;
  } else {
    document.getElementById("four-of-a-kind-score").textContent = "0";
  }

  toonDobbelsteenAfbeeldingen(dobbelsteenWaarden);

  updateScorebord(dobbelsteenWaarden);
}

function updateEnenTotZessen(telling) {
  document.getElementById("enen").textContent = (telling[1] || 0) * 1;
  document.getElementById("tweeën").textContent = (telling[2] || 0) * 2;
  document.getElementById("drieën").textContent = (telling[3] || 0) * 3;
  document.getElementById("vieren").textContent = (telling[4] || 0) * 4;
  document.getElementById("vijfen").textContent = (telling[5] || 0) * 5;
  document.getElementById("zessen").textContent = (telling[6] || 0) * 6;
}

function updateScorebord(dobbelsteenWaarden) {
  let telling = {};
  totaalscore = 0;

  for (let i = 0; i < dobbelsteenWaarden.length; i++) {
    let getal = dobbelsteenWaarden[i];
    telling[getal] = (telling[getal] || 0) + 1;
    totaalscore += getal;
  }

  let frequenties = new Array(7).fill(0);
  for (let i = 0; i < dobbelsteenWaarden.length; i++) {
    let getal = dobbelsteenWaarden[i];
    frequenties[getal]++;
  }

  updateEnenTotZessen(frequenties);
  document.getElementById("totaal").textContent = totaalscore;
}

function checkFullHouse(telling) {
  let heeftDrie = false;
  let heeftTwee = false;
  for (let getal = 1; getal <= 6; getal++) {
    if (telling[getal] == 3) {
      heeftDrie = true;
    }
    if (telling[getal] == 2) {
      heeftTwee = true;
    }
  }
  let fullHouse = false;
  if (heeftDrie && heeftTwee) {
    fullHouse = true;
  }

  if (fullHouse) {
    document.getElementById("full-house").textContent = 25;
  } else {
    document.getElementById("full-house").textContent = 0;
  }
}

function checkSmallStraight(dobbelsteenWaarden) {
  let kleineStraights = [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
  ];
  let heeftSmallStraight = false;
  for (let i = 0; i < kleineStraights.length; i++) {
    let straight = kleineStraights[i];
    let gevonden = true;
    for (let j = 0; j < straight.length; j++) {
      let getalInStraight = straight[j];
      let gevondenInDobbelstenen = dobbelsteenWaarden.includes(getalInStraight);
      if (!gevondenInDobbelstenen) {
        gevonden = false;
        break;
      }
    }
    if (gevonden) {
      heeftSmallStraight = true;
      break;
    }
  }
  if (heeftSmallStraight) {
    document.getElementById("small-straight").textContent = 30;
  } else {
    document.getElementById("small-straight").textContent = 0;
  }
}

function checkLargeStraight(dobbelsteenWaarden) {
  let groteStraights = [
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
  ];
  let heeftLargeStraight = false;
  for (let i = 0; i < groteStraights.length; i++) {
    let straight = groteStraights[i];
    let gevonden = true;
    for (let j = 0; j < straight.length; j++) {
      let getalInStraight = straight[j];
      let gevondenInDobbelstenen = dobbelsteenWaarden.includes(getalInStraight);
      if (!gevondenInDobbelstenen) {
        gevonden = false;
        break;
      }
    }
    if (gevonden) {
      heeftLargeStraight = true;
      break;
    }
  }
  if (heeftLargeStraight) {
    document.getElementById("large-straight").textContent = 40;
  } else {
    document.getElementById("large-straight").textContent = 0;
  }
}

function checkYahtzee(telling) {
  let yahtzee = false;
  for (let getal = 1; getal <= 6; getal++) {
    if (telling[getal] == 5) {
      yahtzee = true;
      break;
    }
  }
  if (yahtzee) {
    document.getElementById("yahtzee").textContent = 50;
  } else {
    document.getElementById("yahtzee").textContent = 0;
  }
}

function checkChance(totaalscore) {
  document.getElementById("chance").textContent = totaalscore;
}

function toonDobbelsteenAfbeeldingen(dobbelsteenWaarden) {
  let dobbelstenenContainer = document.getElementById("dobbelstenen-container");
  dobbelstenenContainer.innerHTML = "";

  for (let i = 0; i < dobbelsteenWaarden.length; i++) {
    let dobbelsteenImg = document.createElement("img");
    let dobbelsteenWaarde = dobbelsteenWaarden[i];
    dobbelsteenImg.src = dobbelsteenPlaatjes[dobbelsteenWaarde - 1];
    dobbelsteenImg.alt = "Dobbelsteen " + dobbelsteenWaarde;
    dobbelsteenImg.style.width = "50px";

    dobbelsteenImg.addEventListener("click", function () {
      toggleHoldOnDices(i);
    });

    if (holdStatus[i]) {
      dobbelsteenImg.classList.add("held");
    } else {
      dobbelsteenImg.classList.remove("held");
    }

    dobbelstenenContainer.appendChild(dobbelsteenImg);
  }
}

function toggleHoldOnDices(index) {
  holdStatus[index] = !holdStatus[index];
  updateHoldDisplay();
}

function updateHoldDisplay() {
  toonDobbelsteenAfbeeldingen(dobbelsteenWaarden);
}

function updateRollsOverDisplay() {
  const rollsOverDiv = document.getElementById("rollen-over");
  rollsOverDiv.textContent = "Aantal worpen over: " + rollsOver;
}

function resetSpel() {
  rollsOver = 3;
  gooiKnop.disabled = false;
  updateRollsOverDisplay();
}

function kiesScore(scoreCategorie) {
  alert("Je hebt " + scoreCategorie + " gekozen!");
  resetSpel();
}

function activeerScoreSelectie() {
  document
    .getElementById("three-of-a-kind")
    .addEventListener("click", function () {
      kiesScore("three-of-a-kind");
    });

  document
    .getElementById("four-of-a-kind")
    .addEventListener("click", function () {
      kiesScore("four-of-a-kind");
    });

  document.getElementById("full-house").addEventListener("click", function () {
    kiesScore("full-house");
  });

  document
    .getElementById("small-straight")
    .addEventListener("click", function () {
      kiesScore("small-straight");
    });

  document
    .getElementById("large-straight")
    .addEventListener("click", function () {
      kiesScore("large-straight");
    });

  document.getElementById("yahtzee").addEventListener("click", function () {
    kiesScore("yahtzee");
  });

  document.getElementById("chance").addEventListener("click", function () {
    kiesScore("chance");
  });
}

updateRollsOverDisplay();
