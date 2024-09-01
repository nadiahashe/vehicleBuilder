// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';
class Truck extends Vehicle implements AbleToTow{
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ){
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    this.wheels = (wheels && wheels.length==4) ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
  }
  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleDetails = `Make ${vehicle.make}, Model ${vehicle.model}`;

    if (vehicle.weight <= this.towingCapacity) {
      console.log(`Vehicle is being towed: ${vehicleDetails}`);
    } else {
      console.log(`Vehicle is too heavy to be towed: ${vehicleDetails}`);
    }
  }
  override printDetails(): void {
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} kg`);
    console.log(`Top Speed: ${this.topSpeed} km/h`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity} kg`);
    console.log(`Wheels: ${this.wheels.map(wheel => wheel.toString()).join(', ')}`);
  }
}
export default Truck;
