//child removed
database.ref("expenses").on("child_removed", (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

//child changed
database.ref("expenses").on("child_changed", (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

//child added
database.ref("expenses").on("child_added", (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

//callback for database
database.ref("expenses").on("value", (snapshot) => {
  const expenses = [];

  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })
  console.log(expenses)
})

//push objects to database
database.ref("expenses").push({
  description: "1st",
  amount: 3400,
  createdAt: 100,
  notes: "dddddd"
})

database.ref("expenses").push({
  description: "2nd",
  amount: 200,
  createdAt: -100,
  notes: ""
})

database.ref("expenses").push({
  description: "3rd",
  amount: 14200,
  createdAt: 0,
  notes: "ask"
})

//callback example
const onValueChange = database.ref().on("value", (snapshot) => {
  const val = snapshot.val()
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
}, (e) => {
  console.log("Error with fetch", e)
})

//turn off callback
database.ref().off(onValueChange)

//examples of data manipulation
database.ref()
  .once("value")
  .then((snapshot) => {
    const val = snapshot.val()
    console.log(val)
  })
  .catch(() => {
    console.log("error", error)
  })

database.ref().set({
  name: "Robert Doherty",
  age: 27,
  stressLevel: 8,
  job: {
    title: "Software Developer",
    company: "Wearable Tech"
  },
  location: {
    city: "Leicester",
    country: "United Kingdom"
  }
}).then(() => {
  console.log("Save data!")
}).catch((error) => {
  console.log("Error!", error)
})

database.ref().update({
  stressLevel: 9,
  "job/company": "Faye's Company",
  "location/city": "Vancouver"
}).then(() => {
  console.log("Data updated")
}).catch((error) => {
  console.log("error", error)
})

database.ref("attributes").set({
  height: "6'0",
  weight: "108.8"
}).then(() => {
  console.log("Saved data!")
}).catch((error) => {
  console.log("Error!", error)
})

database.ref("isSingle")
.remove()
.then(() => {
  console.log("data removed")
})
.catch((error) => {
  console.log("Error: ", error)
})
