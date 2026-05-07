let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
  "1": "value1",
  "my choice": "value2",
};

let a = "firstName";
let { gender, age } = person;

console.log(person.firstName);

console.log(person["gender"]);

console.log(person[a]);

console.log(person.a);

console.log(gender);

console.log(age);




let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
  run: function () {
    console.log("Start Running.");
  },
  habits: ["Playing Chess", "Singing", "Dancing"],
  car: {
    name: "Audi",
    model: "A6",
    color: "White",
  },
};

person.run();

console.log(person.car.name);

console.log(person.car["model"]);

