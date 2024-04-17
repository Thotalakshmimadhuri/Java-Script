//CONDITIONAL STATEMENT
//IF ELSE
//SWITCH

var num1=20;
var num2=50;
switch (num1>num2) {
  case true:
    console.log("Hey this is from 1st case");
    break;

  case false:
  console.log("Hey this is from 2nd case");
  break;
}

//OPERATIONS
//arithmetic logical assignment comparision
//arithmetic -> + - / * %
var a="2";
var b=2;

//== (values)
//===(values and datatype)

if(a==b) {
  console.log("They both are exactly same apart from datatype");
}

else {
  console.log("Not same");
}

//LOGICAL OPERATOR
//&&

//program1

var a=0;

if (a===0&&a>0) {
  console.log("a is +ve");
}

else  {
  console.log("nothing");
}

//program2

var a=1;

if (a!=0&&a>0) {
  console.log("a is +ve");
}

else  {
  console.log("nothing");
}

//program3

var a=1;

if (a!=0||a>0) {
  console.log("a is +ve");
}

else  {
  console.log("nothing");
}

//program4

var a=1;

if (a===0||a>0) {
  console.log("a is +ve");
}

else  {
  console.log("nothing");
}

//program5

var a=1;//!+ve = 0 , !0= +ve

if (!a) {
  console.log("a is +ve");
}

else  {
  console.log("nothing");
}

//OPERATIONS
var a=2;
var b=0;
var c=2;

b=a--;//postfix
c=--a;//prefix

//a++ -> a=a+1

console.log({a,b,c});

//LOOPS
//FOR LOOP, WHILE LOOP, DOWHILE LOOPS

// for (initialisation;condition checking;increment/decrement) {
//code
//}

for (var num=0;num<=100;num++) {
  if(num%5===0)
  console.log(num);
}

//WHILE

var num=0;
while(1) {
  if (num%5===0) {
    console.log(num);
  }
  num++;
}

//DOWHILE
//program1
var num=0;
do {
  if (num%5===0) {
    console.log(num);
  }
  num++;
} while (num<=100);

//program2
var a=0;
do {
  console.log("hey");
} while(a>0);
