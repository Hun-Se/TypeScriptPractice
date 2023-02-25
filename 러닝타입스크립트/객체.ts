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

type FirstAndLastNames = {
  first: string;
  last: string;
};

const hasBoth: FirstAndLastNames = {
  first: "Sehun",
  last: "Kim",
};

const hasOnlyOne: FirstAndLastNames = {
  first: "Sehun",
};

type TimeRange = {
  start: Date;
};

const hasStartString: TimeRange = {
  start: "1879-2-13",
};
