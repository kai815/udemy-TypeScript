export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('hideo');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'niku';
