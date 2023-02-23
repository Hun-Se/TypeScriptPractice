//타입스크립트는 파라미터를 작성하면 자동으로 Constructor 함수를 만들어 준다.
// private은 타입스크립트에서만 나타난다. private property들은 인스턴스 밖에서 접근할수가 없고 다른 자식 클래스에서도 접근할 수 없다.
// protected를 사용하면 인스턴스 밖에서 접근 할 수는 없지만,다른 자식 클래스에서 사용 될 수 있다.
// public을 사용하면 인스턴스 밖에서 접근 할 수 도 있고, 다른 자식 클래스에서 사용도 가능 하다.

//추상 클래스: 메소드를 클래스 안에서 구현하지 않으면 된다.
abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickname: string
  ) {}
  abstract getNickName(): void;
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player3 extends User {
  getNickName() {
    console.log(this.nickname);
  }
}

const sehun5 = new Player3("sehun", "las", "first");

sehun5.getFullName();
