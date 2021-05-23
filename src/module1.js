const sayHell = (name) => {
    console.log(`Hello there ${name}`);
}

module.exports = sayHellconst 

names = require('./names')

const sayHell = require('./module1')

const data = require('./names2')
require('./names3')
// console.log(data)
// console.log(names);
// console.log(sayHell);




const {peter, john} = names

// if(amount < 10){
//     console.log("small number")
// }else{
//     console.log("Large Number")
// }

// console.log("Hey it's my first node app");

// console.log(__dirname);
// // setInterval(() => {
// //     console.log('Hello World');
// // })
// console.log(__filename);


//Module


sayHell('susan')
sayHell(john)
sayHell(peter)

// console.log(module);



