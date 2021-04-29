# Randomizing

*randomize your code with this basic `npm` package called `randomizing`.*
## Features
| Arrays | Numbers |
|--|--|
|  Get a random array item / multiple| not done yet |

Upcoming stuff:
- number randomization
- more array features
- promise-ify and async the package

## Documentation

> INFO:
> `Array` means the array you're supplying. 
>
**Example**
```js
const randomizing = require('randomizing')
const rand = new randomizing()

const g = ['s', 'sa23', 'test', 'helloo', 'hi?', 1, true]
//these outputs are obviously random

console.log(rand.randomItem(g))
//=> helloo
console.log(rand.randomMultiple(g, 3))
//=> s, test, hi

```

**Methods**
| Function | Return | Error |
|--|--|--|
|  `obj.randomItem(Array)`| `any` | `Array.length = 0, expected an array`
|`obj.randomMultiple(Array, count)`|`Array` | `Array.length = 0, expected an array, Count expected`

## Contribution

### I would love people to contribute to this project!

### It would be amazing if you could submit your errors on my [github repo](github.com/technorav3nn/Randomize)

## Usage

- You can modify, copy, clone, and edit anything of this repository / package. But please don't just copy and paste a new package. Edit it atleast.


>Death_Blows - 2021

