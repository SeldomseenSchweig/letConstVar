class Vehicle{
    constructor(vehicle, model, year){
        this.vehicle = vehicle;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beep.";
    }
    toString(){
        return `The vehicle is a ${this.vehicle} ${this.model} from ${this.year}. `

    }  
}

class Car extends Vehicle {
constructor(vehicle, model, year, numWheels){
    super(vehicle, model, year);
    this.numWheels = numWheels;
}

}

class Motorcycle extends Car{
    constructor(vehicle, model, year){;
    super(vehicle, model, year);
    this.numWheels = 2;
    }
    revEngine(){
        return "VROOM";
    } 
    
}

class Garage {
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(obj){
        if(this.vehicles.length < this.capacity){
            this.vehicles.push(obj);
            return "Vehicle added!"
        }else{
            throw "Your garage can't fit anymore cars";
        }
        
    }
}