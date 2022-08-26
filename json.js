const user = { id: 1, name: "Gorib Aamir", job: "Actor" };

// JavaScript Object Notation.............JSON
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

// Console Output...........
/* { id: 1, name: 'Gorib Aamir', job: 'Actor' }
{"id":1,"name":"Gorib Aamir","job":"Actor"} */

const shop = {
  owner: "Alia",
  address: {
    street: "34/R Subas by Lane",
    area: "Anondomoyi Bazar",
    country: "India",
  },
  product: ["mic", "Laptop", "mouse", "monitor"],
  revenues: 45000,
  isOpen: true,
  isNew: false,
};
const shopJSON = JSON.stringify(shop);
console.log(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);