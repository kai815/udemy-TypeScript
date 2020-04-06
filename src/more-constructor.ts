export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('hideo', 31);
console.log(me);
