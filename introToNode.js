// const fs = require('fs');

// fs.copyFileSync("source.txt", "destination.txt");


// var superheroes = require('superheroes');


// var superHeroNames = superheroes.random();

// console.log(superHeroNames);


var superheroes = require('superheroes');

var superHeroList = superheroes.all;

var superHeroNames = superheroes.random();

console.log(superHeroList);
console.log(superHeroNames);