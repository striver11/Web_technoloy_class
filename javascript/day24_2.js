console.log('this is not hoisting')
let x
console.log('x value is',x)
x=10
console.log(asr)
var asr=45

// console.log(va)
// let va=45
// console.log(la)
// const la=45

console.log('this is  hoisting because we are declaring')
x2=4545
console.log('x value is',x2)
var x2

console.log("this is fuction hoisting")
greet()
function greet(){
    console.log("hi this is function hoisting")
}

console.log("we can overcome  fucntion hoisting using arrow and ananymous functions as we intilize the fucntions to variable even assigning it to var also it won't do funtion hosing ")
greet2()
var greet2 = () =>{
    console.log("good evening")
}



console.log('this is not hoisting')
let x5
console.log('x value is',x5)
x=10
console.log(asr)
var asr=45

console.log(va)
let va=45
console.log(la)
const la=45