export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'kai',
  age: 31
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'hide',
  age: 31
};

type Profile2 = typeof example1;
