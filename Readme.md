# JavaScript Array Practice

I wanted to learn how to use JavaScript array functions like map, reduce, filter, etc.? I used this worksheet to figure out how!

## Sample Data

Here's a sample piece of Star Wars data from the [Star Wars API](https://swapi.dev).

```
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

```

## Map

1. Get an array of all names
1. Get an array of all heights
1. Get an array of objects with just name and height properties
1. Get an array of all first names

## Reduce

1. Get the total mass of all characters
1. Get the total height of all characters
1. Get the total number of characters in all the character names
1. Get the total number of characters by eye color (hint. a map of eye color to count)

## Filter

1. Get characters with mass greater than 100
1. Get characters with height less than 200
1. Get all male characters
1. Get all female characters

## Sort

1. Sort by name
1. Sort by mass
1. Sort by height
1. Sort by gender

## Every

1. Does every character have blue eyes?
1. Does every character have mass more than 40?
1. Is every character shorter than 200?
1. Is every character male?

## Some

1. Is there at least one male character?
1. Is there at least one character with blue eyes?
1. Is there at least one character taller than 200?
1. Is there at least one character that has mass less than 50?

## Project Setup

```
npm install
```

## Compiles and Hot Reloads for Development

```
npm run dev
```
