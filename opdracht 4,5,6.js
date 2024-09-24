const gooiKnop = document.getElementById("gooi-knop");
const resultaatDiv = document.getElementById("resultaat");
const tellingDiv = document.getElementById("telling");

function gooiDobbelstenen() {
  const dobbelsteenWaarden = [];

  for (let i = 0; i < 5; i++) {
    const randomGetal = Math.floor(Math.random() * 6) + 1;
    dobbelsteenWaarden.push(randomGetal);
  }

  resultaatDiv.textContent = `Waardes: ${dobbelsteenWaarden.join(", ")}`;

  const aantalEnen = countNumber(dobbelsteenWaarden, 1);
  const aantalTweeën = countNumber(dobbelsteenWaarden, 2);
  const aantalDrieën = countNumber(dobbelsteenWaarden, 3);
  const aantalVieren = countNumber(dobbelsteenWaarden, 4);
  const aantalVijfen = countNumber(dobbelsteenWaarden, 5);
  const aantalZessen = countNumber(dobbelsteenWaarden, 6);

  tellingDiv.innerHTML = `
    Aantal enen: ${aantalEnen}<br>
    Aantal tweeën: ${aantalTweeën}<br>
    Aantal drieën: ${aantalDrieën}<br>
    Aantal vieren: ${aantalVieren}<br>
    Aantal vijfen: ${aantalVijfen}<br>
    Aantal zessen: ${aantalZessen}
  `;
}

function countNumber(array, number) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      count++;
    }
  }

  return count;
}

gooiKnop.addEventListener("click", gooiDobbelstenen);
