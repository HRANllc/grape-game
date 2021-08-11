//wenhan1 js_assignment2-(1)
// function doubleObject(array){
//   let result = [...array];
//   for(let i = 0; i< array.length; i++){
//       result[i].quantity = result[i].quantity *2;
//       result[i].price = result[i].price *2;
//   }
//   return result
// }

// function doubleObject(array) {
// return array.map((item) => {
//   item.quantity = item.quantity * 2;
//   item.price = item.price * 2;
//   return item;
// });
// }

// console.log(doubleObject(itemsObject));

// class shape {
//   constructor() {
//     this.type = "shape";
//   }
//   getType() {
//     return console.log(this.type);
//   }
// }
// class Triangle extends shape {
//   constructor(a, b, c) {npx create-react-app my-app
//     super();
//     this.a = a;
//     this.b = b;
//     this.c = c;
//     this.type = "Triangle";
//   }
//   getPerimeter() {
//     return console.log(this.a + this.b + this.c);
//   }
// }
// var t = new Triangle(1, 2, 3);
// console.log(t.constructor === Triangle);
// console.log(shape.prototype.isPrototypeOf(t));

// t.getPerimeter();
// t.getType();

// function sum(element){
// let res = 0;
// element.forEach(element => {
//   res += element;
// });
// return console.log(res);
// }
// let arr = [1,2,4];
// sum(arr)

const url = 'https://api.github.com/users/wikiwi';
//Given an API, consuming the data from backend and create the list dynamically by vanilla JavaScript?
const generateListByData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const unorderList = document.createElement('ul');
  const nodesList = Object.keys(data).map((key, index) => {
    const li = document.createElement('li');
    li.textContent = `${key} : ${data[key]}`;
    li.id = index + 1;
    return li;
  });
  unorderList.onclick = (e) => {
    alert(e.target.id);
    e.stopPropagation();
  };
  unorderList.append(...nodesList);
  return unorderList;
};

generateListByData().then((unorderList) => {
  document.querySelector('#content').append(unorderList);
});