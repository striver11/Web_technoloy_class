console.log('example for map higher order function')

let x=[1,2,3,4]
let y=x.map((a) =>{
    return a*10
})
console.log(x)
console.log(y)

let nums=[10,2,30,4]
 let newArr=nums.map(function(element,index){
    console.log(element,index);
    return element+10
})
console.log('new arr',newArr);

console.log('example for filter  higher order function')
let n=[1,2,3,4]
let z=n.filter((a) =>{
    return a%2==0
})
console.log("even numbers",z)

console.log('example for filter  higher order function')

let nu=[1,2,3,4]
let sum=0
for(let i=0;i<nu.length;i++)
{
    sum+=nu[i]
}
console.log('sum',sum)
console.log('instead of doing above we can do easily by using reduce higher order function')
let sum2=nu.reduce((a,b) =>{
    return a+b
})
console.log('sum2 generated using reduce ',sum2)