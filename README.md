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

5. TypeScript의 타입을 모를 때 unknow을 사용한 뒤 조건식을 걸어준다.
6. never은 실행되지 않을 코드에 적용된다.
7. call signature는 무슨 타입을 반환하는 지 알 수 있게 해준다.
8. overroding 서로다른 여러개의 call signature를 가질 때 사용한다
9. 다형성(polymorphism)은 여러가지 다른 구조, 모양, 형태를 뜻한다. 타입스크립트는 2~3개의 파라미터를 가질 수 있는데 그 파라미터들은 다양한 type을 가질 수 있다는 특징이다.

10. 타입 제한: type과 interface 둘다 객체의 모양을 설정해주지만 type 키워드는 인터페이스에 비해 사용 하는 곳이 많다. interface는 오브젝트의 모양을 알려줄때 사용될 수 있는데 type 보다 더 객체지향 프로그래밍처럼 보여서 보다 이해하기 쉬워 보인다.

- interface는 같은 이름을 가진 property들을 쌓을 수 있다.
- interface는 자바스크립트로 컴파일될 때 보이지 않는다.
- interface는 private과 protected로 상속되지 못한다.

11. 추상클래스는 상속받는 다른 클래스가 가질 property와 메소드를 지정하도록 도와준다.

- TypeScript에서 추상클래스를 사용하면 JavaScript컴파일러에서는 일반적인 클래스로 바꾸어 버린다.
- 표준화된 property와 메소드를 갖도록 해주는 청사진을 만들기 위해 추상클래스를 사용한다.
