# TypeScriptPractice

1. 타입스크립트는 타입을 추론해서 JavaScript에서 허용 되었던 타입변경을 막아주어 개발자가 실수 하지 않도록 도와준다.

- 타입을 `let a : number = 1` 형태로 명시적으로 표시해준다.(하지만 타입스크립트 알아서 추론해줌으로 표기를 해주지 않아도 된다.)
- 다른 타입의 array의 추가를 허용하지 않는다.

2. 타입스크립트로 객체를 사용하기 위해서는 다음과 같은 형태로 사용된다.

```TypeScirpt
const player2: { name: string; age?: number } = {
name: "sehun",
};
```

- 여기서 `age`에 `?`를 붙이는 이유는 number 또는 undefined로 인식하여 사용되지 않아도 오류가 발생하지 않도록 하기 위함이다.

- Alias(별칭)을 사용하여 반복되는 코드양을 줄일 수 있다.

3. readonly를 사용하면 배열을 수정 할 수 없다.

- readonly와 Tuple의 형태로 사용 할 수 있다.

```TypeScript
const player4: readonly [string, number, boolean] = ["sehun", 12, false];
```

4. any를 사용하면 TypeScript에서 벗어나 아무 타임이나 사용 할 수 있게 된다.
