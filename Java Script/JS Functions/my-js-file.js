//FUNCTIONS

const items = {
  food: 1000,
  drinks: 2000
};

//HOISTING
cart = 0;
var addToCart = (item) => {//parameter
return cart+item;
};
var addCartValue = (item) => {
  cart =addToCart(item);
}

addCartValue(items.food);
console.log("cart:",cart);
var cart;

//program2
myFunction();
function myFunction(){
  console.log("Hello world!");
}

//this

function getThis() {
  console.log(this);
}

getThis();
const arrowGetThis = () => {
  console.log(this);
};
arrowGetThis();

//program2

const OurObject = {
  name: "this keyword",
  getThis: function() {
    console.log(this);
  }
};

OurObject.getThis();

//program3

var myArray = [1,2,3,4,5,6];
console.log(myArray);
myArray.push(7);
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.unshift(0);
console.log(myArray);
myArray.shift();
console.log(myArray);

//program4

var num=1;
function printNum() {
  console.log(num);
  num++;

  if(num<=10) {
    printNum();
  }
  else {
    return;
  }
}
printNum();

//program5

function getArray() {
  return [1,2];
}

const [x,y,z]=getArray();
console.log(x);
console.log(y);
console.log(z);

//program6
var myArray = [1,2,3];
const newArray = myArray.map((e) => console.log(e+1));
console.log(newArray);
console.log(myArray);

//ES 6
function hello(name) {
  if(name)
  console.log("hello "+name);
  else
    console.log("hello world");
  }
hello("Lucky");

//program7
function hello(name="world") {
  console.log("hello "+name);
}
hello();

//program8
console.log("Apple\nBanana\nGrapes\nMango");

//ES 6
//SCOPING

function outer() {
  var name1="xyz";
  let name2="pqr";

  function inner() {
    var name1="xxyyzz";
    console.log(name1);
  }
  inner();
  //console.log(name2);
  console.log(name1);
}
outer();
