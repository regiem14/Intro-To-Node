// const fs = require('fs');

// fs.copyFileSync("source.txt", "destination.txt");


// var superheroes = require('superheroes');


// var superHeroNames = superheroes.random();

// console.log(superHeroNames);

const supervillains = require('supervillains');
var superheroes = require('superheroes');

var superVillains = supervillains.random();
var superVillains = supervillains.all;
var superHeroList = superheroes.all;

var superHeroNames = superheroes.random();

console.log(superHeroList);
console.log(superHeroNames);
console.log(superVillains);