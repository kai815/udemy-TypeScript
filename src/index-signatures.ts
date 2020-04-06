export {};

interface Profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Hideo', underTwenty: false };

// How to write index signatures
// {[ index: typeForIndex ]: typeForValue }
profile.name = 'hideo';
profile.age = 43;
profile.nationality = 'Japan';
