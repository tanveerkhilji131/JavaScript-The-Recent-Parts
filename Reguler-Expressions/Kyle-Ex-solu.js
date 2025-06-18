// The Power of a Smile
// by Tupac Shakur
var poem = `
The power of a gun can kill
and the power of fire can burn
the power of wind can chill
and the power of a mind can learn
the power of anger can rage
inside until it tears u apart
but the power of a smile
especially yours can heal a frozen heart`;

// function *powers(poem) {
// 	var re = /(?<=power of )(?<thing>(a )?\w+).*?(?<=can )(?<verb>\w+)/gs;
// 	var match;
// 	while (match = re.exec(poem)) {
// 		let { groups: { thing, verb } } = match;
// 		yield `${thing}: ${verb}`;
// 	}
// }
// for (let power of powers(poem)) {
// 	console.log(power);
// }


// you know this code vary compicated so i make new function not using regex 
function *powers(poem) {
	let newline = poem.trim().split("\n");
	for (let line of newline) {
		
		line = line.trim().toLowerCase();
		
		
		if (line.includes("power of") && line.includes("can")) {
		
		

			let start = line.trim().indexOf("power of")+9;
			
			let end = line.trim().indexOf("can")-0;

			let thing = line.slice(start,end);
			
			let verb = line.slice(end+3)

			yield `${thing} : ${verb}`

		}

	}
	
}
for (const power of powers(poem)) {
	console.log(power);
	
}
// output : 
// a gun: kill
// fire: burn
// wind: chill
// a mind: learn
// anger: rage




