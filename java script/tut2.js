console.log("hellow world");
console.warn("this is warning)");
console.error("this is an error");



//javasscript variables
//what are variables _______> container to store data variables


var num1 = 34;
var num2 = 23;
console.log(num1 + num2);


//4.data types in javascript
//string
var string1 = "this is string in double cot";
var string2 = 'this is string in single cot';

//object
var marrk = { ravi: 34, shubham: 78, harry: 99.34 };

//booleans
var a = true;
var b = false;

//undifined
var aa;
//then it means aa is not defined so your autput will undiffined

var as = null;
// your output will null   matlb kuch nhhi dalna h

//at a very highy level , there are two types of data types in javascrript
//1.primitive data types:-undefined, null, number, strinng, boolean, symbol
//2.reference data types:- arrays and object

//arey
var arr = [1, 2, "string", 4];
// console.log(arr);

//operaters in javascripts
var a1 = 232;
var b1 = 32;
console.log("the value of a1*b1 is ", a1 * b1);


var c = a1;
console.log(c);
c += 2;
console.log(c);




//comparission operations
//console.log(a1==b1);   //false


/*
//logical operators
//1.logical and
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
//2.logical or
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
//3.logical not
console.log(!true);
console.log(!false);
*/


//in 2+3    operater is +   and aprerant is 2 & 3
/*
//function
function avg(a,b){var c=(a+b)/2;return c;};
c1=avg(2,3);
c2=avg(4,6);
console.log(c1,c2);

var age=4;
if(age>8){
    console.log('you can drink rashna waterr');
}
else{
    console.log('no abele');
}
*/
/*
var arr = [1, 2, 3, 4, 5];
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
arr.forEach(function (elemen) {
    console.log(elemen);
})

//now var becomes ald so now we will us let
let j = 0;
const aaa = 0;//like in c++

while(j<arr.length){
    console.log(arr[j]);
    j++;
}
*/
//do while loop is same as in c++
//break and continue also same as in C++
let myArr =["fan" ,"Camera",34, null,true];
console.log(myArr.length);
myArr.pop();//to remove last element from the arry
myArr.push("lalan");//to push an element in the last position in arry
myArr.shift();//to remove first elemet from the arry
myArr.unshift("lal");//to push a element in the first possition 
console.log(myArr);
//arry methode bahut hote h internet pe ja ke sikhe  mdn sight is good
myArr.toString();//change arry into string
console.log(myArr);
myArr.sort();//to shorting arry in the forn of  dictonary
console.log(myArr);


//string methodes in java scipt
let my ="lalan is good boy good";
console.log(my.length);
console.log(my.indexOf("good"));
// console.log(lastIndexOf("good"));
console.log(my.slice(2,7));//output is lan i
d =my.replace("lalan","chandan");
e =my.replace("good","bed");
console.log(e,d,my);

let myDate= Date();
console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
//console.log(myDate.getday());//this output a no sun(0),mon(1),...sat(6);
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());


//DOM Manupulation
// let elem = document.getElementById('click');
// console.log(elem);
// let elemclass=document.getElementByClassName("container")
// console.log(elemclass);









// change and modify
// module 
// react jarur sikhe
let aaaa=['a','n','d'];
console.log('a')