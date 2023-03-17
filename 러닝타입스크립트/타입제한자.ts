// 타입검사 수행 안함
let anyValue: any;
anyValue = "Lucille Ball";
anyValue = 123;

console.log(anyValue);

// unknown 타입과 any타입의 차이 : unknown 타입은 진정한 top 타입이다. 타입스크립트는 unknown 타입의 값을 훨씬 더 제한적으로 취급한다.
// 타입오류
function greetComedian(name: unknown) {
  console.log(`Announcing ${name.toUpperCase()}!`);
}

// 타입좁히기 사용
function greetComedianSafety(name: unknown) {
  if (typeof name === "string") {
    console.log(`Announcing ${name.toUpperCase()}!`);
  } else {
    console.log("Well, I'm off");
  }
}

greetComedianSafety("Berry White");
greetComedianSafety({});

// unknown이 any보다 훨씬 안전한 타입으로 사용된다. 가능하다면 unknown을 사용 할 것

// function isNumberOrString(value: unknown) {
//   return ["number", "string"].includes(typeof value);
// }

// function logValueIfExists(value:number | string | null | undefined) {
//   if (isNumberOrString(value)) {
//     value.toString();
//   } else {
//     console.log("Value does not exist", value);
//   }
// }

// 타입서술어(type predicated) = 사용자 정의 타입가드 : 매개변수로 전달된 인수가 매개변수의 타입보다 더 구체적인 타입인 지 여부를 나타낼 때 사용한다.
// 매개변수 이름, is 키워드, 특정 타입

function typePredicate(input: WideType): input is NarrowType {}

function isNumberOrString(value: unknown): value is number | string {
  return ["number", "string"].includes(typeof value);
}

function logValueIfExists(value: number | string | null | undefined) {
  if (isNumberOrString(value)) {
    value.toString();
  } else {
    console.log("Value does not exist", value);
  }
}

interface Comedian {
  funny: boolean;
}

interface StandupComedian extends Comedian {
  routine: string;
}

function isStandupComedian(value: Comedian): value is StandupComedian {
  return "routine" in value;
}

function workWithComedian(value: Comedian) {
  if (isStandupComedian(value)) {
    console.log(value.routine);
  }

  console.log(value.routine);
}

function isLongString(input: string | undefined): input is string {
  return !!(input && input.length >= 7);
}

function workWithText(text: string | undefined) {
  if (isLongString(text)) {
    console.log("Long text", text.length);
  } else {
    console.log("Short text:", text?.length);
  }
}

// 타입 서술어는 속성이나 값의 타입을 확인하는 것 이상을 수행해 잘못 사용하기 쉬우므로 가능하면 피하는 것이 좋다.

interface Ratings {
  audience: number;
  critics: number;
}

function getRating(ratings: Ratings, key: string): number {
  return ratings[key];
}

const ratings: Ratings = { audience: 66, critics: 84 };

getRating(ratings, "audience");
getRating(ratings, "nuot valid");
