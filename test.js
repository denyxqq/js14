const friends = [
  {
    name: "Vitalik",
    age: 16,
    eyeColor: "blue",
    gender: "male",
    isActive: true,
    email: "Vitalik@example.com",
  },
  {
    name: "Dima",
    age: 16,
    eyeColor: "green",
    gender: "male",
    isActive: false,
    email: "Dima@example.com",
  },
  {
    name: "Andriy",
    age: 15,
    eyeColor: "dark-brown",
    gender: "male",
    isActive: true,
    email: "Andriy@example.com",
  },
  {
    name: "Sofia",
    age: 16,
    eyeColor: "blue",
    gender: "female",
    isActive: false,
    email: "Sofia@example.com",
  },
  {
    name: "Stepan",
    age: 15,
    eyeColor: "temni",
    gender: "male",
    isActive: true,
    email: "Stepan@example.com",
  },
  {
    name: "Arsen",
    age: 14,
    eyeColor: "grey",
    gender: "male",
    isActive: true,
    email: "Arsen@example.com",
  },
];

// #1
const names = friends.map((friends) => friends.name );
console.log(names)

// #2
const greenEye = friends.filter((friends) => friends.eyeColor === "green");
console.log(greenEye);

const darkBrownEye = friends.filter((friends) => friends.eyeColor === "dark-brown");
console.log(darkBrownEye);

const blueEye = friends.filter((friends) => friends.eyeColor === "blue");
console.log(blueEye);

// #3

const males = friends.filter((friends) => friends.gender === "male")
console.log(males);

const female = friends.filter((friends) => friends.gender === "female");
console.log(female);

// #4

const inactive = friends.filter((friends) => friends.isActive === false)
console.log(inactive)
