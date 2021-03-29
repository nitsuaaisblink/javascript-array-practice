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

//* Map */
// Get an array of all names
const allNames = characters.map((character) => character.name);
console.table(allNames);

// Get an array of all heights
const allHeights = characters.map((character) => character.height);
console.table(allHeights);

// Get an array of objects with just name and height properties
const allNamesAndHeight = characters.map((character) => ({
	name: character.name,
	height: character.height,
}));
console.table(allNamesAndHeight);

// Get an array of all first names
const firstNames = characters.map((character) => character.name.split(' ')[0]);
console.table(firstNames);

//* Some */
// Is there at least one male character?
const oneMaleCharacter = characters.some((character) => character.gender === 'male');
console.table(oneMaleCharacter);

// Is there at least one character with blue eyes?
const oneWithBlueEyes = characters.some((character) => character.eye_color === 'blue');
console.table(oneWithBlueEyes);

// Is there at least one character taller than 200?
const oneTallerThan200 = characters.some((character) => character.height > 200);
console.table(oneTallerThan200);

// Is there at least one character that has mass less than 50?
const oneMassLessThan40 = characters.some((character) => character.mass < 40);
console.table(oneMassLessThan40);
