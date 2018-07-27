// Object Destructure

const person = {
  name: "Rob",
  age: 46,
  location: {
    city: 'Leicester',
    temp: '30'
  }
}

const {name: firstName = "Anonymous", age} = person;

console.log(`${firstName} is ${age}`)

const {city, temp: temper} = person.location

if(temper && city) {
  console.log(`It's ${temper} in ${city}`)
}

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };
//
// const {name: publisherName = "Self-Published"} = book.publisher;
//
// console.log(publisherName)

/*Array Deconstruct*/

const address = ["10 Summer Close", "Byfleet", "England", "BF212"]

const [, town, country] = address

console.log(`You are in ${town}, ${country}`)

// const item = ["Coffee (Hot)", "£1", "£2", "£3.50"]
//
// const [itemName, , mediumCost] = item
//
// console.log(`A medium ${itemName} costs ${mediumCost}`)
