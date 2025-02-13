function populGrowth() {
	let initialPopul = prompt('Enter your initial population growth:');
	let growthRate = prompt('Enter the value of your growth rate:');
	let time = prompt('Enter your time (in hours):');
	
	let finalPopul = Math.round(parseFloat(initialPopul) * (Math.pow(Math.E, (parseFloat(growthRate) * parseFloat(time))))); 
	
	let locOfMonster = prompt('Where is it located?');
	let monstName = prompt('What is the monsters name?');
	
	document.getElementById('result').innerHTML = 'After ' + time + ' hour/s, the population of  ' + monstName.concat(', in ', locOfMonster).toUpperCase() + ' has risen to ' + finalPopul + '!!';
}