'use strict';

let e = Math.exp(1);
let x;
let y;
let d;
let d1;
let d2;
let dd;
let nd;

console.log("Экспонента = " + e);
console.log();

x = +prompt("Введите число x:");
y = +prompt("Введите число y:");

d = (x * Math.pow(e, x * y) + 8 * Math.pow(Math.sin(x), 2))/(x*(x-y)*(3*x+y));
d1 = x * Math.pow(e, x * y) + 8 * Math.pow(Math.sin(x), 2);
d2 = x*(x-y)*(3*x+y);
dd = d1 / d2;

console.log("d = " + d);
console.log();
console.log("dd = " + dd);
console.log();

console.log("m = " + d);
console.log();
nd = Math.floor(d);
console.log("n = " + nd);

