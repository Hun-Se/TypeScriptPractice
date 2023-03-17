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
  critic: number;
}

// function getRating(ratings: Ratings, key: string): number {
//   return ratings[key];
// }

// const ratings: Ratings = { audience: 66, critics: 84 };

getRating(ratings, "audience");
getRating(ratings, "nuot valid");

function getRating(ratings: Ratings, key: "audience" | "critic"): number {
  return ratings[key];
}

// const ratings: Ratings = { audience: 66, critic: 84 };

// getRating(ratings, "audience");
// getRating(ratings, "no valid");

// keyof 연산자는 해당 타입에 허용되는 모든 키의 조합을 반환한다.
function getCountKeyof(ratings: Ratings, key: keyof Ratings): number {
  return ratings[key];
}

// const ratings: Ratings = { audience: 66, critic: 84 };

getCountKeyof(ratings, "audience");
getCountKeyof(ratings, "not valid");
getCountKeyof(ratings, "critic");

//typeof는 제공되는 값의 타입을 반환한다. 값의 타입을 수동으로 작성하는 것이 짜증날 정도로 복잡할 때 사용하면 좋다.
const original = {
  medium: "movie",
  title: "Mean Girls",
};

let adptation: typeof original;

if (Math.random() > 0.5) {
  adptation = { ...original, medium: "play" };
} else {
  adptation = { ...original, medium: 2 };
}

// keyof 와 typeof를 동시에 사용하면 명시적 인터페이스 타입이 없는 객체에 혀용된 키를 나타내는 타입에 대한 코들르 작성하고 업데이트하는 수고를 줄일 수 있다.
const ratings = {
  imdb: 8.4,
  metacritic: 82,
};

function logRating(key: keyof typeof ratings) {
  console.log(ratings[key]);
}

logRating("imdb");
logRating("invalid");

// 타잆어선션(type cast라고도 한다.): 타입스크립트 갑의 타입에 대한 타입 시스템의 이해를 재정의하기 위한 구문 as키워드 사용

const rawData = '["grace","frankie"]';

JSON.parse(rawData);

JSON.parse(rawData) as string[];

const fe = JSON.parse(rawData) as [string, string];

const f = JSON.parse(rawData) as ["grace", "frankie"];

// 타입스크립트의 모범사례는 타입어서션을 사용하지 않는 것, 하지만 코드가 완전히 타입화되고 어서션을 사용해 타입스크립트의 타입 이해를 방해할 필요가 없는 것이 가장 좋다.

try {
} catch (error) {
  console.warn("Oh no!", (error as Error).message);
}

// 타입 어서션은 undefined를 포함할수있는 변수에서 null과 undefined를 제거할 때 주로 사용한다.

let maybeDate = Math.random() > 0.5 ? undefined : new Date();

maybeDate as Date;

maybeDate;

const seasonCounts = new Map([
  ["I love Lucy", 6],
  ["asdfwq", 10],
]);

const knowValue = seasonCounts.get("I love Lucy")!;

console.log(knowValue.toUpperCase());

interface Entertainer {
  acts: string[];
  name: string;
}

const declared: Entertainer = {
  name: "Moms Mabley",
  acts: ["dsafdsa"],
};

// 어서션은 타입검사 중 일부를 건너 뛰도록 명시적으로 지시하기 때문에 오류를 못잡을 수 있다. 따라서 타입스크립트가 초기값에서 변수의 타입을 유추 하도록 해야한다.
const asserted = {
  name: "monm Mabley",
} as Entertainer;

// 완전히 상관 없으면 오류를 출력한다.
let myValue = "Stella!" as number;

// 요렇게 하면 완전히 상관 없어도 오류 출력안하지만 이렇게 사용하면 안된다.(위험하고 항상 코드의 타입이 잘못됬다고 나타내는 것이기 때문)
let myValueDouble = "1337" as unknown as number;

const getName = () => "Maria";

const getNameConst = () => "Maria" as const;

function describePreference(preference: "maybe" | "no" | "yes") {
  switch (preference) {
    case "maybe":
      return "I suppose...";
    case "no":
      return "No thanks";
    case "yes":
      return "Yes please";
  }
}

const preferenceMutable = {
  movie: "maybe",
  standup: "yes",
};

describePreference(preferenceMutable.movie);

preferenceMutable.movie = "no";

const preferenceReadonly = {
  movie: "maybe",
  standup: "yes",
} as const;

describePreference(preferenceReadonly.movie);
preferenceReadonly.movie = "no";
