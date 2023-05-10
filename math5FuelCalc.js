function getFuel(stops){

	//maximala bränsle avlägning för en lengd enhet (g)
	const leftFuel = stops - 2;
	// det olika depon
	const depos = [];
	for(var i = 0; i < stops + 1; i++){
		let extrafuel = 1;
		
		// starten behöver inte ha extra bränsle
		if(i == 0)
			extrafuel = 0;

		depos.push(new depo(i, extrafuel));
		
		// gör det sista depon har en bränsle enhet
		if(i == stops)
			depos[i].fuel = extrafuel;

		// console.log(depos[i]);
	}

	for (var i = depos.length - 2; 0 <= i; i--){
		const tripsForward = Math.ceil(depos[i + 1].fuel / leftFuel);
		depos[i].tripsForward = tripsForward;
		
		depos[i].fuel = tripsForward * 2 + depos[i + 1].fuel + depos[i].targetExtra;

		// console.log("forward trips: " + tripsForward);
		// console.log( "depo: " + i);
		// console.log(depos[i].fuel * 50)
		// console.log("\n")
	}

	depos.forEach(d => {
		d.fuelReal = d.fuel * 200/stops
		d.distanceReal = 500/stops * d.distance;
	});

	return depos
}

class depo {
	distance;
	fuel = 0;
	fuelReal;
	distanceReal;
	targetExtra;
	tripsForward = 0;
	constructor (distance, targetExtra){
		this.distance = distance;
		this.targetExtra = targetExtra
	}
}

module.exports = {getFuel: getFuel, depo: depo};