// 유니언: 값에 허용된 타입을 두개 이상의 가능한 타입으로 확장 하는 것
// 내로잉: 값에 허용된 타입이 하나 이상의 가능한 타입이 되지 않도록 좁히는 것

let mathematician = Math.random() > 0.5 ? undefined : "Mark Goldberg";

let thinker: string | null = null;

if (Math.random() > 0.5) {
  thinker = "Susanne L:anger";
}

let physicist = Math.random() > 0.5 ? "Marie Curie" : 84;

physicist.toString();

physicist.toUppercase();

physicist.toFixed();
