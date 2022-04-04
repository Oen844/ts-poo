export class Animal {
  constructor(public name: string) { }
  move() {
    console.log('Moving along');
  }
  greeting() {
    console.log('Hello, I am a ' + this.name);
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
      console.log('Woof!');
    }
  }
}
export class Cat extends Animal {
  meow(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('Meow!');
    }
  }
}

const cheis = new Dog('Cheis', 'Fifi');
cheis.move();
cheis.greeting();
cheis.woof(3);
console.log('owner: ', cheis.owner);

const cat = new Cat('miau');
cat.move();
cat.greeting();
cat.meow(3);

