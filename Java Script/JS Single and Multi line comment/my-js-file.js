//single line comment
/*
multi
line
comment
*/

//Program 1//
var one=1;
var two=2.2;
console.log(one);
console.log(two);

//Program 2//
const name="Lakshmi Madhuri";
const year=2024;
const okay=true;
console.log(name);
console.log(year);
console.log(okay);

//Program 3//
var num = [1,2,3,4,100,"Lakshmi Madhuri"];// 0 1 2 3 4 5 6
console.log(num);

//Program 4//
var obj = {
  //key : value
  name: "Lakshmi Madhuri",
  id:30,
  test: ["fail", "pass", "fail1"],
  "full name": "Thota Lakshmi Madhuri"
}
console.log(obj["full name"]);

//Program 5//
var obj = {
  //key : value
  name: "Lakshmi Madhuri",
  id:30,
  test: ["fail", "pass", "fail1"],
}
  console.log(obj.test[2]);
  
  //Program 6//
  var obj = {
    //key : value
    name: "Lakshmi Madhuri",
    id:30,
    test: ["fail", "pass", "fail1"],
    exam: {
      mids: "pass",
      ends: "pass"
    }
  }
    console.log(obj.exam.mids);
