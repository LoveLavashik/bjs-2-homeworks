"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	if (d === 0) {
		let x = -b / (2 * a);
		arr.push(x);
	} else {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
	}
	return arr;
}
let a = 1;
let b = 5;
let c = 4;
console.log(solveEquation(a, b, c));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  newpercent = percent / 100;
  let monthprocent = newpercent / 12;
  let credit = amount - contribution;
  let monthpayment = credit * (monthprocent + monthprocent / (((1 + monthprocent) ** countMonths) - 1));
  return Number(monthpayment * countMonths).toFixed(2);
}
console.log(calculateTotalMortgage(10, 0, 50000, 12));