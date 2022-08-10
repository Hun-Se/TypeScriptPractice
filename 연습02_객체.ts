const player2: { name: string; age?: number } = {
  name: "sehun",
};

// 숫자인것처럼 사용했지만 player2.age가 undefined이기 떄문에 오류가 발생한다.
// if (player2.age < 10) {
//
// }

// Alias(별칭) 사용하는 방법
type Age = number;
type Name = string;
type Player = {
  readonly name: Name;
  age?: Age;
};

const sehun: Player = {
  name: "sehun",
};

const player3: Player = {
  name: "sehun",
  age: 12,
};

function playerMaker(name: string): Player {
  return {
    name,
  };
}

const sehun2 = playerMaker("sehun");
sehun2.age = 12;

const playerMaker2 = (name: string): Player => ({ name });
const sehun3 = playerMaker2("sehun");
sehun3.age = 12;
