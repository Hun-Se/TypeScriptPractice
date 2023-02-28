function sing(song: string) {
  console.log(`Singing: ${song}`);
}

// function announSong(song: string, singer?: string) {
//   console.log(`Son: ${song}`);
//   if (singer) {
//     console.log(`Singer: ${singer}`);
//   }
// }

announSong("Greensleeves");
announSong("Greensleeves", undefined);
announSong("Greensleeves", "Sia");

function annouceSongby(singer: string | undefined, song: string) {
  console.log(song);
}

annouceSongby(undefined, "Green");

function announSong(singer?: string, song: string) {
  console.log(`Son: ${song}`);
  if (singer) {
    console.log(`Singer: ${singer}`);
  }
}

function rateSong(song: string, rating = 0) {
  console.log(`${song} gets ${rating}/5 stars`);
}

rateSong("Photo");
rateSong("Seth", 5);
rateSong("lalal", undefined);

rateSong("At last", "111");

// 스프레드 연산자는 마지막에 와야한다.
function singAllTheSongs(singer: string, ...songs: string[]) {
  for (const song of songs) {
    console.log(`${song}, by ${singer}`);
  }
}

singAllTheSongs("Alicia KEys");
singAllTheSongs("Alicia KEys", "hi", "Dancd", "LAlAL");

function singSongs(songs: string[]) {
  for (const song of songs) {
    console.log(`${song}`);
  }
  return songs.length;
}

// function getSongAt(songs: string[], index: number) {
//   return index < songs.length ? songs[index] : undefined;
// }

function singSongRecursive(songs: string[], count = 0): number {
  return songs.length ? singSongRecursive(songs.slice(1), count + 1) : count;
}

const singSongsRcursive = (songs: string[]): string => {
  return "1";
};

// const songs = ["Juice", "Shake It Off", "What's Up"];

function runOnSongs(getSongAt: (index: number) => string) {
  for (let i = 0; i < songs.length; i += 1) {
    console.log(getSongAt(i));
  }
}

// function getSongAt(index: number) {
//   return `${songs[index]}`;
// }
// runOnSongs(getSongAt);

// function logSong(song: string) {
//   return `${song}`;
// }

// runOnSongs(logSong);

let returnStringOrUndefined: () => string | undefined;

let mayBeReturnString: (() => string) | undefined;

let singer: (song: string) => string;

singer = function (song) {
  return `Singing: ${song.toUpperCase()}`;
};

const songs = ["Call Me", "Join", "The Chain"];

songs.forEach((song, index) => {
  console.log(`${song} is at index ${index}`);
});

type StringToNumber = (input: string) => number;

let stringToNumber: StringToNumber;

stringToNumber = (input) => input.length;
stringToNumber = (input) => input.toUpperCase();

type NumberToString = (input: number) => string;

function useNumberToString(numberToString: NumberToString) {
  console.log(`The string is : ${numberToString(1234)}`);
}

useNumberToString((input) => `${input}! Hory`);
useNumberToString((input) => input + 2);

function logSong(song: string | undefined): void {
  if (!song) {
    return;
  }
  console.log(`${song}`);

  return true;
}

const records: string[] = [];

function saveRecords(newRecords: string[]) {
  newRecords.forEach((record) => records.push(record));
}

saveRecords(["21", "Come On Over", "The Bodyguard"]);

function fail(message: string): never {
  throw new Error(`Invarian Fali ${message}`);
}

function workWithUnsafeParam(param: unknown) {
  if (typeof param !== "string") {
    fail(`param should be a string, not ${typeof param}`);
  }

  param.toUpperCase();
}

function createDate(timestamp: number): Date;
function createDate(month: number, day: number, year: number): Date;
function createDate(monthOrTimestamp: number, day?: number, year?: number) {
  return day === undefined || year === undefined
    ? new Date(monthOrTimestamp)
    : new Date(year, monthOrTimestamp, day);
}

createDate(554356800);
createDate(7, 27, 1987);

createDate(4, 1);

// function createDate(monthOrTimestamp, day, year) {
//   return day === undefined || year === undefined
//     ? new Date(monthOrTimestamp)
//     : new Date(year, monthOrTimestamp, day);
// }

function format(data: string): string;
function format(data: string, needle: string, haystack: string): string;

function format(getData: () => string): string;

function format(data: string, needle?: string, haystack?: string) {
  return needle && haystack ? data.replace(needle, haystack) : data;
}
