// Type your code below this line!
const prompt = require('prompt-sync')();

const car = {
    Make: prompt("Enter the car make:"),
    Model: prompt("Enter the car model:"),
    Year: Number(prompt("Enter the car year:")),
    Motortype: prompt("Enter the car motor type:"),
    Color: prompt("Enter the car color:"),
    Kilometers: Number(prompt("Enter the car kilometers:"))
};

// Type your code above this line!


console.log("Car Details: " + car.Make + " " + car.Model + ", Year: " + car.Year + ", Color: " + car.Color + ", Kilometers: " + car.Kilometers + ".");
