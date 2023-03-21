function identity<T>(input: T) {
  return input;
}

identity("abc");
identity(123);
identity({ quote: "Ithink Your self" });

const identity2 = <T>(input: T) => {
  return input;
};

function logWrapper<Input>(callback: (input: Input) => void) {
  return (input: Input) => {
    console.log("Input", input);
    callback(input);
  };
}

logWrapper((input) => {
  console.log(input.length);
});

// 명시적 제네릭 타입 인수
logWrapper<string>((input) => {
  console.log(input);
});

function makeTuple<Frist, Second>(first: Frist, second: Second) {
  return [first, second] as const;
}

let tuple = makeTuple(true, "abc");

function makePair<Key, Value>(key: Key, value: Value) {
  return { key, value };
}

makePair("abc", 123);
makePair<string, number>("abc", 123);
makePair<"abc", 123>("abc", 123);

makePair<string>("abc", 123);

interface Array<T> {
  pop(): T | undefined;
}

interface LinkedNode<Value> {
  next?: LinkedNode<Value>;
  value: Value;
}

function getLast<Value>(node: LinkedNode<Value>): Value {
  return node.next ? getLast(node.next) : node.value;
}

let lastData = getLast({
  value: new Date("09-13-1993"),
});

let lastFruit = getLast({
  next: {
    value: "banana",
  },
  value: "apple",
});

class CurriedCallback<Input> {
  #callback: (input: Input) => void;

  constructor(callback: (input: Input) => void) {
    this.#callback = (input: Input) => {
      console.log("Input", input);
      callback(input);
    };
  }

  call(input: Input) {
    this.#callback(input);
  }
}

new CurriedCallback((input: string) => {
  console.log(input.length);
});

new CurriedCallback((input) => {
  console.log(input.length);
});

new CurriedCallback<string>((input) => {
  console.log(input.length);
});

class Quotes<T> {
  lines: T;
  constructor(lines: T) {
    this.lines = lines;
  }
}

class SpokenQuote extends Quotes<string[]> {
  speak() {
    console.log(this.lines.join("\n"));
  }
}

new Quotes("The Lindefdfas fdsafklasd f").lines;
new Quotes([1, 3, 4, 45]).lines;

new SpokenQuote(["godd", "hio"]).lines;
new SpokenQuote([1, 2, 3, 4, 5]).lines;

interface ActingCredit<Role> {
  role: Role;
}

class MoviePart implements ActingCredit<string> {
  role: string;
  speaking: boolean;

  constructor(role: string, speaking: boolean) {
    this.role = role;
    this.speaking = speaking;
  }
}

const part = new MoviePart("Miranda", true);

class IncorrectExtension implements ActingCredit<string> {
  role: boolean;
}

class CreatePairFactory<Key> {
  key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  createPair<Value>(value: Value) {
    return { key: this.key, value };
  }
}

const factory = new CreatePairFactory("role");
const numberPair = factory.createPair(10);
const stringPair = factory.createPair("Sophia");

class BothLogger<OnInstance> {
  instanceLog(value: OnInstance) {
    console.log(value);
    return value;
  }

  static staticLog<Onstatic>(value: Onstatic) {
    let fromInstance: OnInstance;

    console.log(value);
    return value;
  }
}

const logger = new BothLogger<number[]>();
logger.instanceLog([1, 2, 3]);

BothLogger.staticLog([false, true]);

type Nullish<T> = T | null | undefined;

// 제네릭 타입 별칭은 일반적으로 제네릭 함수의 타입을 설명하는 함수와 함께 사용한다.
// 제네릭타입과 판별된 타입을 함께 사용하면 Result와 같은 재사용 가능한 타입을 모델링하는 방법을 제공 할 수 있다.

type CreatesValue<Input, Output> = (input: Input) => Output;

let creator: CreatesValue<string, number>;

creator = (text) => text.length;

creator = (text) => text.toUpperCase();

// 판별된 유니언
type Result<Data> = FailureResult | SuccessfulResult<Data>;

interface FailureResult {
  error: Error;
  succeeded: false;
}

interface SuccessfulResult<Data> {
  data: Data;
  succeeded: true;
}

function handleResult(result: Result<string>) {
  if (result.succeeded) {
    //result: SuccessfulResult<string>타입
    console.log(`We did it! ${result.data}`);
  } else {
    //result: FailureResult의 타입
    console.error(`Awww...${result.error}`);
  }

  result.data;
}

interface Quote<T = string> {
  value: T;
}

let explicit: Quote<number> = { value: 123 };

let implicit: Quote<number> = {
  value: "Be yourself, The world worships the original.",
};

let mismatch: Quote = { value: 123 };

interface KeyValuePair<Key, Value = Key> {
  key: Key;
  value: Value;
}

let allExplicit: KeyValuePair<string, number> = {
  key: "rating",
  value: 10,
};

let oneDefaulting: KeyValuePair<string> = {
  key: "rating",
  value: "ten",
};

let firstMissing: KeyValuePair<string, number> = {
  key: "rating",
  value: 10,
};

function inTheEnd<First, Second, Third = number, Fouth = string>() {}

function inTheMiddle<First, Second = boolean, Third = number, Fourth>() {}
