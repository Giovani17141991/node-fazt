console.log("hello world");

let username = "gio";
let age = 22;
let hasHobbies = false;
let points = [10, 20, 30];
let user = {
  name: "ryan",
  lastname: "ray",
};
const PI = 3.1415;

console.log(username);
console.log(age);
console.log(hasHobbies);
console.log(points);
console.log(user);
console.log(PI);

const num = 30;

if (num >= 18) {
  console.log("Adulto");
} else if (num >= 13) {
  console.log("Adolecente");
} else {
  console.log("nino");
}

const nombres = ["joe", "john", "marco"];

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

const showUserInfo = (userName,userAge) =>
  'The username is ${userName}'; 
  
console.log(showUserInfo("Jose", 30));
console.log(showUserInfo("Maria", 25));
