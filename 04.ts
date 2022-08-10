//변수의 타입을 알지 못할 때 사용
let d: unknown;

// 타입을 확인해 준뒤 사용한다.
if (typeof d === "number") {
  let f = d + 1;
}

if (typeof d === "string") {
  let f = d.toUpperCase();
}

//void는 아무것도 return하지 않는 함수를 대상으로 사용한다. void 명시하는건 생략 가능하다.
function hell(): void {
  console.log("x");
}

//never 절대 return하지 않을때 예외상황 만들 떄 사용한다.
function hello(): never {
  throw new Error("xxxx");
}

function hello2() {
  if (typeof name === "string") {
    name;
  } else if (typeof name === "number") {
    name;
  } else {
    name;
  }
}
