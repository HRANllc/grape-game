// 1.
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// 1-1.Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
function doubleObject(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = {
      quantity: array[i].quantity * 2,
      price: array[i].price * 2,
    };
  }
  return newArray;
}
console.log(doubleObject(itemsObject));
// Map version
console.log(
  itemsObject.map(({ quantity, price }) => {
    return {
      quantity: quantity * 2,
      price: price * 2,
    };
  })
);
// 1-2.Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
function selectObject(array1) {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1[i].quantity > 2 && array1[i].price > 300) {
      newArray.push(array1[i]);
    }
  }
  return newArray;
}
console.log(selectObject(itemsObject));

// 1-2.-----------filter version solution-------------
let newArray = itemsObject.filter(function (ele) {
  return ele.quantity > 2 && ele.price > 300;
});
console.log(newArray);

// 1-3.Given the array, implement a function to calculate the total value of the items.
function totalValue(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].quantity * items[i].price;
  }
  return total;
}
console.log(totalValue(itemsObject));

// 2.Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.

const string =
  " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array  ";
function convert(str) {
  const regex = /[^A-Za-z]/g;
  str = str.trim().split(" ").join(" ").toLowerCase().replace(regex, " ");
  return str;
}
console.log(convert(string));
