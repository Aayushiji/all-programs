////------------------Arrays---------------------///
// arrays is a collection of items//
let marks = [45,66,88,99,100,22]
console.log(marks)

let heros = ["ironman","thor","hulk"]
console.log(heros.length)

let info = ["aayushi",22]
console.log(info[0])

let heroes = ["thor","ironman","hulk"]
for(let i= 0;i<heroes.length;i++){
    console.log(heroes[i]);
}
//-------------for of -----------------//
for(let hero of heroes){
    console.log(hero)
}
//------------- Array practice question-----------------//
let marks1 = [60,44,33,20,70,90]
let sum = 0;
for(let val of marks1){
    sum = sum + val;
}
let avg = sum / marks.length
console.log(`avg marks of the class = ${avg}`)

let items = [250,645,300,900,50]

for(let i = 0;i<items.length;i++){
   let offer = items[i]/10;
     items[i] -= offer;
}
console.log(items)


//----------------Array methods------------------//
//-------push add items at last index------------//
let foodItems = ["apple","orange","lichi"]
foodItems.push("chips")
console.log(foodItems)
//----------pop remove items at last index--------//
foodItems.pop("chips")
console.log(foodItems)
//------------tostring convert array to a string----------//
foodItems.toString
console.log(foodItems)
//--------------concat-----------------///
let marvelHero = ["ironman","spidarman","thor","hulk"]
let dcHero = ["superman","batman"]
let indianHero = ["shaktiman","krish"]

let heroe = marvelHero.concat(dcHero,indianHero)
console.log(heroe)

//----------------unshift ---------------------//
heroe.unshift("aayushi")
console.log(heroe)

//-----------------shift-------------------//
heroe.shift("aayushi")
console.log(heroe)

//----------------slice----------------//
//------------------splice-----------------//

//---------------------array method practice------------------//
let companies = ["bloomberg","microsoft","uber","google","ibm","netflix"]
companies.shift()
console.log(companies)
companies.splice(1,1,"ola")
console.log(companies)
companies.push("amazone")
console.log(companies)
///-----------------reverse or index value---------------//
//--------if mene 5th index pr item add kraa or 4th index khali hai to vo empty dikhaye ga 
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
console.log(colors)
colors.reverse()
console.log(colors)
const newColors = colors.toReversed(); 
console.log(newColors)