export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Hideo';
  static lastName: string = 'Kaizuka';

  static work() {
    return `Hey. guys! This is ${this.firstName} Are you interested in TypeScript?`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());
