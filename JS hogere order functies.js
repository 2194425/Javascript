//opdracht 1//
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
let value1 = toCelsius(10);
let value2 = toCelsius;

console.log(typeof value1, typeof value2);
//opdracht 1//

//opdracht 2//
function kwadraat(x) {
  return x * x;
}

console.log(kwadraat(7, 17));

const kwadraat = function (x) {
  return x * x;
};
console.log(kwadraat(3, 4));
console.log(typeof kwadraat);
//opdracht 2//

//opdracht 3//
const woorden = ["JavaScript", "is", "erg", "leuk"];
woorden.forEach(console.log);
//opdracht 3//

//opdracht 4//
const woorden4 = ["JavaScript", "is", "erg", "leuk"];
const woordenGefilterd = woorden4.filter((woorden4) => woorden4.length >= 3);
console.log(woordenGefilterd);
//opdracht 4//

//opdracht 5//
const studenten = [
  { naam: "Jan", cijfer: 7 },
  { naam: "Piet", cijfer: 8 },
  { naam: "Klaas", cijfer: 6 },
  { naam: "Marie", cijfer: 9 },
];
const cijfersFilter = studenten.filter((studenten) => studenten.cijfer >= 8);
console.log(cijfersFilter);
//opdracht 5//

//opdracht 6//
studenten.forEach((studenten) => {
  if (studenten.cijfer >= 8) {
    console.log(studenten);
  }
});
//opdracht 6//

//opdracht 7//
const getallen = [1, 2, 3, 4, 5];

let verdubbeld3 = getallen.map((x) => x * 2);

console.log(verdubbeld3);
//opdracht 7//

//opdracht 8//
function pasToeOpArray(func, array) {
  const resultaat = [];

  array.forEach((element) => {
    resultaat.push(func(element));
  });

  return resultaat;
}

function verdubbelen(x) {
  return x * 2;
}
const getallen2 = [1, 2, 3, 4, 5];

const verdubbeld = pasToeOpArray(verdubbelen, getallen2);

console.log(verdubbeld);
//opdracht 8//

//opdracht 9//
let animePersonages = [
  "Naruto Uzumaki",
  "Monkey D. Luffy",
  "Goku",
  "Sailor Moon",
  "Spike Spiegel",
];

let personageGevonden = animePersonages.find(
  (personage) => personage === "Goku"
);

console.log(personageGevonden);
//opdracht 9//

//opdracht 10//
const cijfers = [1, 2, 3, 4, 5];

const som = getallen.reduce((totaal, huidigGetal) => totaal + huidigGetal, 0);

console.log(som);
//opdracht 10//
