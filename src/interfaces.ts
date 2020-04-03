export {};

type ObjectType = {
  name: string;
  age: number;
};

interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectType = {
  name: 'Hideo',
  age: 31
};

let object2: ObjectInterface = {
  name: 'kai',
  age: 31
};
