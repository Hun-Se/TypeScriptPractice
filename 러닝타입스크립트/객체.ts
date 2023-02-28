// const poet = {
//   born: 1935,
//   name: "Mary Oliver",
// };

// poet["born"];
// poet.name;

// poet.end;

// let poetLater: {
//   born: number;
//   name: string;
// };

// poetLater = {
//   born: 1935,
//   name: "Mary Oliver",
// };

// poetLater = "Sampo";

// type Poet = {
//   born: number;
//   name: string;
// };

// let poetLate: Poet;

// poetLate = {
//   born: 1234,
//   name: "hi",
// };

// poetLate = "Emily";

// //타입스크립트의 타입 시스템은 구조적으로 타입화 되어 있습니다. 즉 타입을 충족하는 모든 값을 해당 타입의 값으로 사용 할 수 있습니다.

// type WithFirstName = {
//   firstName: string;
// };

// type WithLastName = {
//   lastName: string;
// };

// const hasBoth = {
//   firstName: "Kim",
//   lastName: "Hun",
// };

// let withFirstName: WithFirstName = hasBoth;
// let withLastName: WithLastName = hasBoth;

// type Poet = {
//   born: number;
//   name: string;
// };

// let poetLater: Poet;

// poetLater = {
//   born: 1935,
//   name: "Sara Tesdale",
// };

// poetLater = "Emily Dicknson";

// type FirstAndLastNames = {
//   first: string;
//   last: string;
// };

// const hasBoth: FirstAndLastNames = {
//   first: "Sehun",
//   last: "Kim",
// };

// const hasOnlyOne: FirstAndLastNames = {
//   first: "Sehun",
// };

// type TimeRange = {
//   start: Date;
// };

// const hasStartString: TimeRange = {
//   start: "1879-2-13",
// };

// type Poet = {
//   born: number;
//   name: string;
// };

// const existingObject2: Poet = {
//   activity: "walking",
//   born: 1935,
//   name: "Mary Oliver",
// };

// const existingObject = {
//   activity: "walking",
//   born: 1935,
//   name: "Mary Oliver",
// };

// const extraPropertyButOk: Poet = existingObject;

// type Poem = {
//   author: {
//     firstName: string;
//     lastName: string;
//   };
//   name: string;
// };

// const poemMathch: Poem = {
//   author: {
//     firstName: "Kim",
//     lastName: "Sehun",
//   },
//   name: "Lady Lazerus",
// };

// const poemMismatch: Poem = {
//   author: {
//     name: "Sylvia Plath",

//   }
//   name: "Sehun"
// }

// type Book = {
//   author?: string;
//   pages: number;
// };

// const ok: Book = {
//   author: undefined,
//   pages: 90,
// };

// const missing: Book = {
//   pages: 1,
// };

// const poem =
//   Math.random() > 0.5
//     ? { name: "The Double Image", pages: 7 }
//     : { name: "Her Kind", rhymes: true };

// poem.name;
// poem.pages;
// poem.rhymes;

// type PoemWithPages = {
//   name: string;
//   pages: number;
// };

// type PoemWithRhymes = {
//   name: string;
//   rhymes: boolean;
// };

// type Poem = PoemWithPages | PoemWithRhymes;

// const poem: Poem =
//   Math.random() > 0.5
//     ? { name: "the double", pages: 7 }
//     : { name: "Her Kind", rhymes: true };

// poem.name;
// poem.pages;
// poem.rhymes;

// if ("pages" in poem) {
//   poem.pages;
// } else {
//   poem.rhymes;
// }

// if (poem.pages) {
// }

// type PoemWithPages = {
//   name: string;
//   pages: number;
//   type: "pages";
// };

// type PoemWithRhymes = {
//   name: string;
//   rhymes: boolean;
//   type: "rhymes";
// };

// type Poem = PoemWithPages | PoemWithRhymes;

// const poem: Poem =
//   Math.random() > 0.5
//     ? { name: "The Double Image", pages: 7, type: "pages" }
//     : { name: "Her Kind", rhymes: true, type: "rhymes" };

// if (poem.type === "pages") {
//   console.log(`It's got pages: ${poem.pages}`);
// } else {
//   console.log(`이건 ryhmes: ${poem.rhymes}`);
// }

// poem.type;

// poem.pages;

// type ShortPoem = { author: string } & (
//   | { kigo: string; type: "haiku" }
//   | { meter: number; type: "vill" }
// );

// const morningGlory: ShortPoem = {
//   author: "Funke",
//   kigo: "Morning",
//   type: "vill",
// };

// type NotPossible = number & string;

// let notNumber: NotPossible = 0;
