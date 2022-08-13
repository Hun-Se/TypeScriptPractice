type Nickname = string;
type Health = number;
type Freinds = Array<string>;

type Player4 = {
  nickname: Nickname;
  healthBar: Health;
};

const nico: Player4 = {
  nickname: "nico",
  healthBar: 10,
};

type Team = "red" | "blue" | "yellow";
type Health2 = 1 | 5 | 10;

//타입 제한 interface 둘다 객체의 모양을 설정해주지만 type 키워드는 인터페이스에 비해 사용 하는 곳이 많다. interface는 오브젝트의 모양을 알려줄때 사용될 수 있는데 type 보다 더 객체지향 프로그래밍처럼 보여서 보다 이해하기 쉬워 보인다. + 같은 이름을 가진 property들을 쌓을 수 있다.
interface Player5 {
  nickname: string;
  team: string;
  health: Health2;
}

const hun: Player5 = {
  nickname: "nico",
  team: "yellow",
  health: 10,
};

interface User {
  name: string;
}

type Player6 = User & {};
