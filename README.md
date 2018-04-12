
# [Higher Order](https://www.codewars.com/kata/coding-meetup-number-2-higher-order-functions-series-greet-developers)

*/

You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an array where each object will have a new property 'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >?

var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

/

function HigherOrder()
 arg: 1 
 * an array of contact info objects:
 	- firstName : string
 	- language : string
 	- lastName: string
 	- country: string
 	- continent: string
 	- age: number
 	- language: string
 * return : new array with old objects and new property calls 'greeting'
	- Greeting: string
	- firstName : string
 	- language : string
 	- lastName: string
 	- country: string
 	- continent: string
 	- age: number
 	- language: string
 * behavior: this function HigherOrder takes <firstName> and <language> to create 
 new property calls greeting


### Index
* [Solution Process](#solution-process)
* [Solution Explanation](#solution-explanation)
* [Constraints](#constraints)  
* [Language Features](#language-features)
* [Uses](#uses)
* [Learning Journal](#learning-journal)

---

## Solution Process



[TOP](#index)

---

## Solution Explanation



[TOP](#index)

---

## Constraints


[TOP](#index)
___

## Language Features

[TOP](#index)

---
## Uses


[TOP](#index)

---

## Learning Journal

Things I learned studying this problem:
* grouping two arrays into one
* adding an object to an array
*
*

New vocabulary:

Things I struggled with:
* Adding an object to an array


My study goals and stragegies:
* How to use .push to add an object to an array when this object is indicated by the index of the array it belongs.
* constructing a string by indicating a given value to be inserted with the index of original property of original object (e.g. why can't I make a string as such: string = "something" + object[i] - where the value of object property at position i would be inserted in the string?)


[TOP](#index)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

