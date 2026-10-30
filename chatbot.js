// Import or define your car list (same as in customer.html)
let cars = [
{name:"Toyota Prius", type:"economy"},
{name:"Honda Civic", type:"economy"},
{name:"Hyundai Elantra", type:"economy"},
{name:"Ford Focus", type:"economy"},
{name:"Volkswagen Golf", type:"economy"},

{name:"Mercedes S-Class", type:"luxury"},
{name:"BMW 7 Series", type:"luxury"},
{name:"Audi A8", type:"luxury"},
{name:"Lexus LS", type:"luxury"},
{name:"Jaguar XJ", type:"luxury"},

{name:"Porsche 911", type:"sport"},
{name:"Chevrolet Corvette", type:"sport"},
{name:"Ford Mustang", type:"sport"},
{name:"Nissan GT-R", type:"sport"},
{name:"Dodge Challenger", type:"sport"},

{name:"Volvo XC90", type:"comfortable"},
{name:"Toyota Camry", type:"comfortable"},
{name:"Honda Accord", type:"comfortable"},
{name:"Mazda CX-5", type:"comfortable"},
{name:"Subaru Outback", type:"comfortable"},

{name:"Bugatti Chiron", type:"fastest"},
{name:"Koenigsegg Jesko", type:"fastest"},
{name:"McLaren Speedtail", type:"fastest"},
{name:"Lamborghini Aventador", type:"fastest"},
{name:"Ferrari SF90", type:"fastest"},

{name:"Tesla Model S", type:"electric"},
{name:"BMW i8", type:"electric"},
{name:"Audi e-tron", type:"electric"},
{name:"Mercedes EQS", type:"electric"},
{name:"Lucid Air", type:"electric"}
];

// Chatbot function
function suggestCar(type){
type = type.toLowerCase();
let matches = cars.filter(car => car.type === type);

if(matches.length > 0){
return "Here are some " + type + " cars you can choose:\n" +
matches.map(c => "- " + c.name).join("\n");
} else {
return "Sorry, I don’t have cars for that category. Try: economy, luxury, sport, comfortable, fastest, electric.";
}
}

// Example usage:
console.log(suggestCar("luxury"));
console.log(suggestCar("sport"));

