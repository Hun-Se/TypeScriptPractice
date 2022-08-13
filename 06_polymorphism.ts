// 다형성(polymorphism)
// concrete type이란? 우리가 number, boolean, string / generic type 타입의 placeholder
// type SuperPrint = {
//   <T>(arr: T[]): T;
// };

// const superPrint: SuperPrint = (arr) => arr[0];

// const one = superPrint([1, 2, 3, 4]);
// const two = superPrint([true, false, true]);
// const three = superPrint(["a", "b", "c"]);
// const four = superPrint([1, 2, true, false]);
// const five = superPrint([1, 2, true, false, "abc"]);

//실제로 사용되는 방법
function superPrint<T>(a: T[]) {
  return a[0];
}
type SehunExtra = {
  favFood: string;
};
type Player2<E> = {
  name: string;
  extraInfo: E;
};

type SehunPlayer = Player2<{ favFood: string }>;

const sehun4: SehunPlayer = {
  name: "sehun",
  extraInfo: {
    favFood: "kimchi",
  },
};
