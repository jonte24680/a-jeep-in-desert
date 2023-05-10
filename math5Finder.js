const fs = require("node:fs");
const proc = require("node:process");
const fuelCalc = require("./math5FuelCalc");

if(proc.argv.length < 3){
	console.error("no amount arg");
	proc.exit(1);
}

const amount = Number(proc.argv[2]);

if(!amount){
	console.error("arg is 0 or NaN")
	proc.exit(1);
}

if(amount < 3){
	console.error("arg is less then 3")
	proc.exit(1);
}

// const tests = [];
// tests.length = antal;

const best = {stops: 0, fuel: Infinity}

let wStr = "";

for(let i = 3; i < amount; i++){
	const element = fuelCalc.getFuel(i)
	// tests[i] = element;

	if(element[0].fuelReal < best.fuel){
		best.fuel = element[0].fuelReal;
		best.stops = i;
	}
	// console.log(`${i}: ${tests[i][0].fuelReal}`);
	wStr += `${i}: ${element[0].fuelReal} \n`
}
console.log(best);


fs.writeFileSync(`./${amount}stops.csv`, wStr.replace(/\./g, ","), {encoding: "utf-8"})