//CONDITIONAL STATEMENT
//IF ELSE
  //SWITCH

  //if else  (syntax)

/*  if(condition) {
    code1
  }
  else {
    code2
  }*/

  //program
  var myNum1=20;
  var myNum2=50;

  if(myNum1>myNum2){
    console.log("1st num is greater");
  }
  else{
    console.log("2nd num is greater");
  }

//if else syntax

/*if(condition1) {
  stat1
}
else if(condition2) {
  stat2
}
else if .....

else {
  last-stat
}*/

//program
var a=-1;

if(a>0) {
  console.log("Positive");
}
else if(a<0) {
  console.log("Negative");
}
else {
  console.log("Its zero or negative");
}

//program 2
var a=1;

if(a>0) {
  console.log("Positive");
}
if(a<0) {
  console.log("Negative");
}
if(a>=0) {
  console.log("Its zero or positive");
}
else {
  console.log("Its zero");
}
