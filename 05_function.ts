//call signature는 무슨 타입을 반환하는 지 알 수 있게 해준다.
//overroding 서로다른 여러개의 call signature를 가질 때 사용한다.
// type Add = {
//   (asd: number, bsd: number): number;
//   (asd: number, bsd: string): number;
// };
// const add: Add = (asd, bsd) => {
//   if (typeof bsd === "string") return asd;
//   return asd + bsd;
// };

type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

//파라미터 개수가 다른 여러개의 call signatures일때
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

// c가 number 일수도 있다고 작성해주기(선택사항)
const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add(1, 2);
