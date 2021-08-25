function sum (a:number, b:number):number{
  return a + b
}

console.log(sum(7,8))

interface Iperson {
  name:"string"
  age: number
}

function sayHi(person: Iperson)   {
return `Hi I'm ${person.name} and I'm ${person.age} years old`

}

sayHi({
  Name: "The Queen",
  age: 95
})
