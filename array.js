// ARRAY.AT()

const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.at(-1));

// OBJECT.GROUPBY()

const avengers = [
  { name: 'Iron Man', power: 'armor', strength: 50, planet: 'Earth', alive: false},
  { name: 'Black Widow', power: 'stealth', strength: 25, planet: 'Earth', alive: false},
  { name: 'Thor', power: 'hammer', strength: 100, planet: 'Asgard', alive: true},
  { name: 'Scarlet Witch', power: 'magic', strength: 102, planet: 'Earth', alive: true},
  { name: 'Hulk', power: 'durability', strength: 101, planet: 'Earth', alive: true},
  { name: 'Captain Marvel', power: 'energy', strength: 100, planet: 'Earth', alive: true},
  { name: 'Gamora', power: 'assasin', strength: 80, planet: 'Zen-Whoben', alive: false}
];

let groupedNumbers = Object.groupBy(numbers, number => {
  if(number % 2 == 0) return 'par'
  return 'impar'
});

console.log(groupedNumbers);

let groupedAvengers = Object.groupBy(avengers, hero => hero.planet);

let groupedAvengersMap = Map.groupBy(avengers, hero => hero.planet);

console.log(groupedAvengers);
console.log(groupedAvengersMap);

// ARRAY by copy  SOLO COPIA SUPERFICIAL

//? .toReversed()

const users = [
  { id: 1, name: 'midu', fav: { food: '🍔' } },
  { id: 2, name: 'ale', fav: { food: '🍨' } },
  { id: 3, name: 'flor', fav: { food: '🍕' } },
];

const reversedUsers = users.toReversed();

console.log(users);

reversedUsers[0].fav.food = '🐼'; //! modifica el array original

console.log(reversedUsers);

//? .toSorted()

// Debe devolver un número donde:
//   Un valor negativo indica que debe ir antes de .ab 📈
//   Un valor positivo indica que debe ir después de .ab 📉
//   Cero o indica que y se consideran iguales.NaNab

// numbers

const sortedNumbersAscending= numbers.toSorted((a, b) => a - b) // ascendente
console.log(sortedNumbersAscending)

const sortedNumbersDescending = numbers.toSorted((a, b) => b - a) // descendente
console.log(sortedNumbersDescending)

// strings

const name = [{ name: 'Miguel' }, { name: 'Ána' }, { name: 'Federico' }]

const sortedNames = name.toSorted((a, b) => {
  return a.name.localeCompare(b.name)
})
console.log(sortedNames)