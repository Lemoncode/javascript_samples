// More info.

// If types are the same -> ===
var x = 5;
var y = 7;

console.log(x == y);
/*****************************/

// both null or undefined
var z; // undefined
y = null;

console.log(z == y);
/*****************************/

// string == number?
var str = 'string';
var num = 56;

console.log(str == num);

var str1; // undefined
var num2 = '3d';

console.log(str1 == num2);

var str3 = null;
num3 = '0';

console.log(str3 == num3);
/******************************/
// boolean == anything
var boolean = true;
var object = {};

console.log(boolean == object);

boolean = false;

console.log(boolean == object);

var t;

console.log(false == t);
/*****************************/

// object == string
var obj1 = { name:'Jai' };
var str3 = 'Jai';

console.log(obj1 == str3);
/****************************/

var ar = [1, 2];
var g = "1,2";

console.log(ar == g);
/***************************/

var f = 0;
var zza = "";

console.log(f == zza);
/**************************/
