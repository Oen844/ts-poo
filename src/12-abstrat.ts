import { Animal, Dog } from "./08-inheritance";

const animal = new Animal('Fifi');
animal.greeting();


const cheis = new Dog('Cheis', 'Fifi');
cheis.woof(3);
cheis.greeting();

//con la palabra reservada abstract se puede definir una clase abstracta, esto hace que solo podamos instanciar la clase hija


//
