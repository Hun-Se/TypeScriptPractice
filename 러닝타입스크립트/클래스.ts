class Greeter {
  greet(name: string) {
    console.log(`${name}, do your stuff!`);
  }
}

new Greeter().greet("Miss Frizzel");

new Greeter().greet();

class Greeted {
  constructor(message: string) {
    console.log(`As I always say: get messy`);
  }
}

new Greeted();

class FieldTrip {
  destination: string;

  constructor(destination: string) {
    this.destination = destination;
    console.log(`We're going to ${this.destination}`);
  }

  this.nonexistent = destination;
}

const trip = new FieldTrip("planet");

trip.destination;

trip.nonexistent;

class WithMethod {
  myMethod() {}
}

new WithMethod().myMethod === new WithMethod().myMethod; //true

class WithProperty {
  myProperty: () => {}
}

new WithProperty().myProperty === new WithProperty().myProperty //false

class WithPropertyParameters {
  takeParameters = (input:boolean) => input ? "Yes" : "No";
}

const instance = new WithPropertyParameters();

instance.takeParameters(true);
instance.takeParameters(123);


class WithValue {
  immediate = 0;
  later: number;
  mayBeUndefined: number | undefined;
  unused:number;

  constructor() {
    this.later = 1;
    this.unused = 2;
  }
}

class MissingInitalizer {
  property: string;
}

new MissingInitalizer().property.length;

class ActivitiesQueue {
  pending!: string[];
  initialize(pending: string[]) {
    this.pending = pending;
  }

  next() {
    return this.pending.pop();
  }
}

const activities = new ActivitiesQueue();

activities.initialize(["eat", "sleep","learn"]);
activities.next();

class MissingInitializer {
  property?: string;
}

new MissingInitializer().property?.length;

new MissingInitializer().property.length;

class Quote {
  readonly text: string;

  constructor(text:string) {
    this.text= "?";
  }

  emphasize() {
    this.text +="!";
  }
}

// const quote = new Quote("There is a brillian child");

Quote.text = "hi";

class RandomQuote {
  readonly explicit: string = "Home is the nicest word there is.";
  readonly implicit = "Home"; 

  constructor() {
    if (Math.random() > 0.5) {
      this.explicit = "We start learning the minute we're born";
      this.implicit = "We start  learning";
    }
  }
}

const quote = new RandomQuote();

quote.explicit;
quote.implicit;

// class Teacher {
//   sayHello() {
//     console.log("Take chances");
//   }
// }

// let teacher: Teacher;

// teacher = new Teacher();

// teacher = "Wahoo!";

class SchoolBus {
  getAbilities() {
    return ["magic", "shapeshifiting"];
  }
}

function withSchoolBus(bus: SchoolBus) {
  console.log(bus.getAbilities())
}

withSchoolBus({
  getAbilities: () => ["transmorgif"]
})

withSchoolBus({
  getAbilities:() => 123,
})

interface Learner {
  name: string,
  study(hours:number):void;
}

class Student implements Learner {
  name: string;
  constructor (name:string) {
    this.name = name
  }

  study(hours: number): void {
    for (let i = 0 ; i < hours; i+=1) {
      console.log("...satudyuing");
    }
  }
}

class Slacker implements Learner {}

interface Graded {
  grades:number[];
}

interface Reporter {
  report: () => string;
}

class ReportCard implements Graded, Reporter {
  grades:number[];

  constructor(grades:number[]) {
    this.grades =grades;
  }

  report() {
    return this.grades.join("")
  }
}

class Empty implements Graded, Reporter {}

interface AgeIsANumber {
  age:number
}

interface AgeIstNotAnumber {
  age: () => number;
}

class AsNumber implements AgeIsANumber, AgeIstNotAnumber {
  age() {
    return 1
  };
}

class Teacher {
  teach() {
    console.log("The surest test of discipline is its absence");

  }
}

class StudentTeacher extends Teacher {
  learn() {
    console.log("I cannot afford the luxury of a clased mind");
  }
}

const teacher = new StudentTeacher();

class Lesson {
  subject: string;

  constructor(subject: string) {
    this.subject = subject
  }
}

class OnlineLesson extends Lesson {
  url: string;

  constructor(subject: string, url: string) {
    super(subject);
    this.url = url;
  }
}

let lesson: Lesson;

lesson = new Lesson("codding");
lesson = new OnlineLesson("codding", "www.naver.com");

let online: OnlineLesson;

online = new Lesson("hi");
online = new OnlineLesson("hni","hihihi");

class PastGrades {
  grades: number[] = [];
}

class LabeledPastGrades extends PastGrades {
  label?:string;
}

let subClass: LabeledPastGrades;

subClass = new LabeledPastGrades();
subClass = new PastGrades();

class GradeAnnouncer {
  message:string;

  constructor(grade:number) {
    this.message = grade >= 65 ? "Maybe next tiem..." : "Your pass";
  }
}

class PassingAnnouncer extends GradeAnnouncer {
  constructor() {
    super(100);
  }
}

class FailingAnnouncer extends GradeAnnouncer {
  constructor(){}
}

class GradeCounter {
  countGrades(grades: string[], letter: string) {
    return grades.filter(grade => grade === letter).length;
  }
}

class FailureCounter extends GradeCounter {
  countGrades(grades:string[]) {
    return super.countGrades(grades, "F")
  }
}

class AnyFailureChecker extends GradeCounter {
  countGrades(grades:string[]) {
    return super.countGrades(grades, "F") !== 0;
  }
}

const counter: GradeCounter = new AnyFailureChecker();

const count =counter.countGrades(["A","B","C"]);

class Assignment {
  grade?:number;
}

class GradedAssingment extends Assignment {
  grade: number;

  constructor (grade:number) {
    super();
    this.grade = grade;
  }
}

abstract class School {
  readonly name: string;

  constructor(name:string) {
    this.name = name;
  }
  
  abstract getStudentTypes(): string[];
}

class Preschool extends School {
  getStudentTypes(): string[] {
    return ["preschooler"];  
  }
}

class Absence extends School {};

let school: School;

school = new Preschool("SunnySide");

school = new School("somewhere else");

class Base {
  isPublicImplicit = 0;
  public isPublicExplicit = 1;
  protected isProtected = 2;
  private isPrivate = 3;
  #truePrivate = 4;
}

class SubClass extends Base {
  examples() {
    this.isPublicImplicit;
    this.isPublicExplicit;
    this.isProtected;
    this.isPrivate;
    this.#turePrivate;
  }
}

new SubClass().isProtected;

class TwoKeywords {
  private readonly name: string;

  constructor() {
    this.name = "Ane";
  }
}

const two  = new TwoKeywords();

two.name = "Savitribai Phule";

class Question {
  protected static readonly answer: "bash"
  protected static readonly prompt = "what going on?";
}