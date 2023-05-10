const fuelCalc = require("./math5FuelCalc");
const proc = require("node:process");

if(proc.argv.length < 3){
	console.error("no number in arg");
	proc.exit(1);
}

const i = Number(proc.argv[2]);

if(!i){
	console.error("arg is 0 or NaN")
	proc.exit(1);
}

if(i < 3){
	console.error("arg is less then 3")
	proc.exit(1);
}

console.table(fuelCalc.getFuel(i), ["distance", "fuel", "tripsForward", "distanceReal", "fuelReal"]);