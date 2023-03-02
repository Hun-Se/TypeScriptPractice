// const warriors = ["Artemisia", "Boudica"];

warriors.push("Zenobia");

warriors.push(true);

// let arrayOfNumbers: number[];
// let array222: Array<number>;

// arrayOfNumbers = [4, 8, 15, 16, 23, 42];

// string 배열을 반환하는 함수
let createStrings: () => string[];

// 각각의 string을 반환하는 함수 배열
let stringCreators: (() => string)[];

let stringOrArrayOfNumbers: string | number;

let arrayOfNumbers: (string | number)[];

const nameMaybe = ["Aqualtune", "Blenda", undefined];

let values = [];

values.push("");

values[0] = 0;

let arrayOfArraysOfNumbers: number[][];

arrayOfArraysOfNumbers = [
  [1, 2, 3],
  [2, 4, 7],
  [3, 6, 8],
];

const defenders = ["Clarenza", "Dina"];

const defender = defenders[0];

const soldiersOrDates = ["Deborah Sampson", new Date(1782, 6, 3)];

const soldierOrDate = soldiersOrDates[0];

function withElements(elements: string[]) {
  console.log(elements[9001].length);
}

withElements(["It's", "over"]);

const soldiers = ["Marriet Tunbam", "John of anc", "Khutulun"];

const soldierAges = [90, 15, 45];

const conjoined = [...soldiers, ...soldierAges];

function logWarriors(greeting: string, ...names: string[]) {
  for (const name of names) {
    console.log(`${greeting}, ${name}!`);
  }
}

const warriors = ["Cathay Williams", "Lozen", "Nzinga"];

logWarriors("Hello", ...warriors);

const birthYears = [1844, 1840, 1583];

logWarriors("Born in", ...birthYears);

let yearAndWarrior: [number, string];

yearAndWarrior = [530, "Tomyris"];

yearAndWarrior = [false, "Tomyris"];

yearAndWarrior = [530];

const pairLoose = [false, 123];
const pairTupleLoose: [boolean, number] = pairLoose;

const tupleThree: [boolean, number, string] = [false, 1583, "Nzinga"];

const tupleTwoExact: [boolean, number] = [tupleThree[0], tupleThree[1]];

const tupleTwoExtra: [boolean, number] = tupleThree;

function logPair(name: string, value: number) {
  console.log(`${name} has ${value}`);
}

const pairArray = ["Amage", 1];

logPair(...pairArray);

const pairTupleIncorrect: [number, string] = [1, "Amage"];

logPair(...pairTupleIncorrect);

const pairTupleCorrect: [string, number] = ["Amage", 1];

logPair(...pairTupleCorrect);

function logTrio(name: string, value: [number, boolean]) {
  console.log(`${name} has ${value} (${value[1]})`);
}

const trios: [string, [number, boolean]][] = [
  ["Amanitore", [1, true]],
  ["Amanitore", [2, false]],
  ["Amanitore", [3, false]],
];

trios.forEach((trio) => logTrio(...trio));

trios.forEach(logTrio);

function firstCharAndSize(input: string) {
  return [input[0], input.length];
}

// const [firstChar, size] = firstCharAndSize("Gudit");

function firstCharAndSizeExplicit(input: string): [string, number] {
  return [input[0], input.length];
}

// const [firstChar, size] = firstCharAndSizeExplicit("Cathay Williams");

const unionArray = [1157, "Tomoe"];

const readonlyTuple = [1157, "Tomoe"] as const;

const pairMutable: [number, string] = [1157, "Tomoe"];

pairMutable[0] = 1247;

const pairAlsoMutable: [number, string] = [1157, "Tomoe"] as const;

const pairConst = [1157, "Tomeoe"] as const;
pairConst[0] = 1247;

function firstCharAndSizeAsConst(input: string) {
  return [input[0], input.length] as const;
}

const [firstChar, size] = firstCharAndSizeAsConst("HI Everyone");
