export class Animal {
  constructor(protected name: string) { }
  move() {
    console.log('Moving along');
  }
  greeting() {
    console.log('Hello, I am a ' + this.name);
  }

  protected doSomething() {
    console.log('Doing something');
  }
}
const fifi = new Animal('Fifi');
fifi.move();
fifi.greeting();

export class Dog extends Animal {

  constructor(
    name: string,
    public owner: string
  ) {
    super(name);
  }

  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('Woof! my name is ' + this.name);
    }
    this.doSomething();
  }
  move(): void {
    console.log('Moving as a dog');
    super.move();
  }
}


const cheis = new Dog('Cheis', 'Fifi');
cheis.move();
cheis.greeting();
cheis.woof(3);

console.log('owner: ', cheis.owner);
cheis.move();


