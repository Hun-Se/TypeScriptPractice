interface Poet {
  born: number;
  name: string;
}

let valueLater: Poet;

valueLater = {
  born: 1935,
  name: "Sara Tesdale",
};

valueLater = "Emily dic";

valueLater = {
  born: 1,
  name: "SAm",
};

interface Book {
  author?: string;
  pages: number;
}

const ok: Book = {
  author: "Rita Dove",
  pages: 80,
};

const missing: Book = {
  pages: 80,
};

interface Page {
  readonly text: string;
}

function read(page: Page) {
  console.log(page.text);

  page.text += "!";
}

const pageIsh = {
  text: "Hello, world",
};

pageIsh.text += "!";

read(pageIsh);

interface HasBothFunctionTypes {
  //속성 구문
  property: () => string;

  // 메서드 구문
  method(): string;
}

type FunctionAlias = (input: string) => number;

interface CallSignature {
  (input: string): number;
}

const typeFunctionAlias: FunctionAlias = (input) => input.length;
const ypedCallSignature: CallSignature = (input) => input.length;

interface FunctionWithCount {
  count: number;
  (): void;
}

let hasCallCount: FunctionWithCount;

function keepsTrackOfCalls() {
  keepsTrackOfCalls.count += 1;
  console.log(`Ive been called ${keepsTrackOfCalls.count}`);
}

keepsTrackOfCalls.count = 0;

hasCallCount = keepsTrackOfCalls;

function doesNotHaveCount() {
  console.log("No idea!");
}

hasCallCount = doesNotHaveCount;

interface WordCounts {
  [i: string]: number;
}

const counts: WordCounts = {};

counts.apple = 0;
counts.banana = 0;
counts.cherry = false;

interface DatesByName {
  [i: string]: Date;
}

const publishDates: DatesByName = {
  Frankenstein: new Date("1 January 1818"),
};

publishDates.Frankenstein;
console.log(publishDates.Frankenstein.toString());

publishDates.Beloved;
console.log(publishDates.Beloved.toString());

interface HistoricalNovels {
  Oroonoko: number;
  [i: string]: number;
}

const novels: HistoricalNovels = {
  Outlander: 1991,
  Oroonoko: 1688,
};

const missingOroonoko: HistoricalNovels = {
  Outlander: 1991,
};

interface ChpaterStarts {
  preface: 0;
  [i: string]: number;
}

const correctPreface: ChpaterStarts = {
  preface: 0,
  night: 1,
  shopping: 5,
};

const wrongPreface: ChpaterStarts = {
  preface: 1,
};

interface Novel {
  author: {
    name: string;
  };
  setting: Setting;
}

interface Setting {
  place: string;
  year: number;
}

let myNovel: Novel;

myNovel = {
  author: {
    name: "Jane",
  },
  setting: {
    place: "Jeju",
    year: 26,
  },
};

myNovel = {
  author: {
    name: "Emily Bronte",
  },
  setting: {
    place: "West",
  },
};

interface Writing {
  title: string;
}

interface Novella extends Writing {
  pages: number;
}

let myNovella: Novella = {
  pages: 1985,
  title: "Ethe",
};

let missingPages: Novella = {
  title: "The Awakening",
};

let extraProperty: Novella = {
  pages: 30,
  stragey: "baseline",
  style: "Naturie",
};

interface WithNullableName {
  name: string | null;
}

interface WithNonnNullableName extends WithNullableName {
  name: string;
}

interface WithNumericName extends WithNullableName {
  name: number | string;
}

interface GivesNumber {
  giveNumber(): number;
}

interface GivesString {
  giveStirng(): string;
}

interface GiveBothAndEither extends GivesNumber, GivesString {
  giveEither(): number | string;
}

function useGivesBoth(instance: GiveBothAndEither) {
  instance.giveEither();
  instance.giveNumber();
  instance.giveStirng();
}

interface Merged {
  fromFirst: string;
}

interface Merged {
  formSecond: number;
}

interface Window {
  myEnviromentVariable: string;
}

window.myEnviromentVariable;

interface MergedProperties {
  different: (input: string) => string;
}

interface MergedProperties {
  different: (input: number) => string;
}

interface MergedMethods {
  different(input: string): string;
}

interface MergedMethods {
  different(input: number): string;
}
