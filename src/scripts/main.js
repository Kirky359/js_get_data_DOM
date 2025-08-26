'use strict';

// write your code here
const population = document.querySelectorAll('.population');
const arrayOfPopulation = Array.from(population).map((el) =>
  Number(el.textContent.replaceAll(',', '')),);
const total = arrayOfPopulation.reduce((sum, curr) => sum + curr, 0);
const avg = total / arrayOfPopulation.length;

const formattedTotal = total.toLocaleString('en-US');
const formattedAvg = Math.round(avg).toLocaleString('en-US');

document.querySelector(`.total-population`).textContent = formattedTotal;
document.querySelector(`.average-population`).textContent = formattedAvg;
