export class MyService {

  static instance: MyService | null = null;

  private constructor(public name: string) { }

  getName() {
    return this.name;
  }
  static create(name: string) {
    if(!MyService.instance) {
      console.log('Creating new instance');
      MyService.instance = new MyService(name);
    }
    console.log('Returning existing instance');
    return MyService.instance;
  }
}

const myService1 = MyService.create('Fifi');
console.log(myService1.getName());
const mySercive2 = MyService.create('Cheis');
console.log(mySercive2.getName());
const myService3 = MyService.create('Pau');
console.log(myService3.getName());

console.log(myService1 === mySercive2);




//
