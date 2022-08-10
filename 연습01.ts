let a = "hello";
a = "bye";
// 자바스크립트에서는 string -> number 허용 / TypeScript에서는 허용하지 않음
// a = 1;

// 타입스크립트에서는 타입이 다르기 떄문에 오류
// let b : boolean = "x"

let b = false;

// 다른 타입의 array의 추가를 허용하지 않는다.
// let c = [1,2,3]
// c.push("1")

let c: number[] = [];
c.push(1);

const player = {
  name: "nico",
};
// player.name = 1
