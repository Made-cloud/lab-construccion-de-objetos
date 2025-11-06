// Type your code below this line!
function Journey(from, to) {
    this.start = from;
    this.end = to;
}

const prompt = require("prompt-sync")();

const from = prompt("Punto de inicio: ");
const to = prompt("Punto de destino: ");


// Type your code above this line!

const travel = new Journey(from, to)

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".")