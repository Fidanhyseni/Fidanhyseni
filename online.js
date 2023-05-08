var car = {
	name:"Mercedes",
	color:"Red",
	year:2020,
	kilometers:0,
	startEngine : function(){
		alert("Vroom");
	},

  get getKilometers() {
	return this.kilometers;
},

  set setKilometers(km) {
	this.kilometers = km;
},
};

console.log(car.getKilometers);
car.setKilometers = 100;
console.log(car.getKilometers);



function Computer(name,CPU,RAM,GPU){
	this.name = name;
	this.CPU = CPU;
	this.RAM = RAM;
	this.GPU - GPU;
}

var computer1 = new Computer("MAC BOOK PRO", "M1 8-core", "8GB", "560M GPU")
var computer2 = new Computer("ACER", "Intel Core i-3", "4GB", "Integrated")

function Person(firstname, lastname, age) {
	this.firsname = firstname,
	this.Lastname = Lastname,
	this.age =  age,
	//ikemi kriju dy persona
	 varMySister = new Person ("Alana","Krasniqi",15);

	 varMyBrother = new Person ("Shpetim","Krasniqi",15);

	 console.log()

console.log(MySister.Lastname);
console.log(MyBrother.Age);
}

function World(state, population){
	this.State = state,
	this.Population = population,
	this.Language = " Shqipe "
}
var myCoountry = new World(" Kosova ", 2);
var Neighbour = new World(" Shqiperia ", 3)

console.log(myCoountry.State);
console.log(myCoountry.Language);

var shtetet = myCoountry.State +" dhe "+ - Neighbour.state +"flasin  gjuhen"+ Neighbour.Language;
console.log(shtetet)
