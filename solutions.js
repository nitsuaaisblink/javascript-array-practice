const characters = [
	{
		name: 'Luke Skywalker',
		height: '172',
		mass: '77',
		eye_color: 'blue',
		gender: 'male',
	},
	{
		name: 'Darth Vader',
		height: '202',
		mass: '136',
		eye_color: 'yellow',
		gender: 'male',
	},
	{
		name: 'Leia Organa',
		height: '150',
		mass: '49',
		eye_color: 'brown',
		gender: 'female',
	},
	{
		name: 'Anakin Skywalker',
		height: '188',
		mass: '84',
		eye_color: 'blue',
		gender: 'male',
	},
];

//* Filter */
// Get characters with mass greater than 100
const characterMassGreaterThan100 = characters.filter(
	(character) => character.mass > 100
);
console.table(characterMassGreaterThan100);

// Get characters with height less than 200
const charterHeightLessThan200 = characters.filter((character) => character.height < 200);
console.table(charterHeightLessThan200);

// Get all male characters
const maleCharacter = characters.filter((character) => character.gender === 'male');
console.table(maleCharacter);

// Get all female characters
const femaleCharacter = characters.filter((character) => character.gender === 'female');
console.table(femaleCharacter);
