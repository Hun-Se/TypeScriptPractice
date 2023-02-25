// // 유니언: 값에 허용된 타입을 두개 이상의 가능한 타입으로 확장 하는 것
// // 내로잉: 값에 허용된 타입이 하나 이상의 가능한 타입이 되지 않도록 좁히는 것

// let mathematician = Math.random() > 0.5 ? undefined : "Mark Goldberg";

// let thinker: string | null = null;

// if (Math.random() > 0.5) {
//   thinker = "Susanne L:anger";
// }

// let physicist = Math.random() > 0.5 ? "Marie Curie" : 84;

// physicist.toString();

// physicist.toUppercase();

// physicist.toFixed();

// let admiral: number | string;

// admiral = "Grace";

// // 타입가드 덕분에 string으로 좁혀졌다.
// admiral.toUpperCase();

// admiral.toFixed();

// // 일반적으로 타입스크립트에서는 변수가 알려진 값과 같은지 확인하는 if문을 통해 변소의 값을 좁히는 방법을 사용한다.

// let scientist = Math.random() > 0.5 ? "Rosalind" : 51;

// if (scientist === "Rosalind") {
//   scientist.toUpperCase();
// }

// scientist.toUpperCase();

// let LifeSpan: number | "ongoing" | "uncertain";

// LifeSpan = 89;

// LifeSpan = "ongoing";

// LifeSpan = true;

// let specificallyAda: "Ada";

// specificallyAda = "Ada";
// specificallyAda = "Byron";

// let someString = "";

// specificallyAda = someString;

// someString = ":)";

// let nameMaybe = Math.random() > 0.5 ? "Tony Hoare" : undefined;

// nameMaybe.toLowerCase();

// // 타입스크립트의 모범 사례는 일반적으로 엄격한 null 검사를 활서오하 하는 것이다.

// let geneticist = Math.random() > 0.5 ? "Barbara" : undefined;

// geneticist && geneticist.toUpperCase();

// // 타입 좁히기 undefined는 falsy라서
// if (geneticist) {
//   //타입 추론
//   geneticist.toUpperCase();
// }

// geneticist.toUpperCase();

// let biologist = Math.random() > 0.5 && "Rachel Carson";

// if (biologist) {
//   biologist;
// } else {
//   biologist;
// }

// let mathematician: string;

// mathematician?.length;

let mathematician: string | undefined;

mathematician?.length;
