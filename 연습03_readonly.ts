//readonly를 쓰면 읽기만 가능하다.
const numbers: readonly number[] = [1, 2, 3, 4];

const names: readonly string[] = ["1", "2"];

// 항상 정해진 갯수의 요소를 가져야하는 array 지정,원하는 순서에 맞는 타입을 지정 할 수 있다.
// const player4: readonly [string, number, boolean] = ["sehun", 12, false];

const player4: readonly [string, number, boolean] = ["sehun", 12, false];

let ab: undefined = undefined;
let ac: null = null;

// any는 아무 타입을 사용 할 수 있도록 한다. TypeScript를 사용하지 않는 것으로 자주 사용하지 않는걸 추천하지만 사용 할 때가 있다.
const aa: any[] = [1, 2, 3, 4];
const bb: any = true;
