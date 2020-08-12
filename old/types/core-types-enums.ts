// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Chris",
//   age: 25,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Chris",
  age: 25,
  hobbies: ["Sports", "Cooking"],
  role: Role.READ_ONLY,
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
} else if (person.role === Role.ADMIN) {
  console.log("is Admin");
} else if (person.role === Role.READ_ONLY) {
  console.log("is Read onlyr");
} else {
  console.log("No role found");
}
