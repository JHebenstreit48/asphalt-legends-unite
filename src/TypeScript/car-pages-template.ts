// Car class that extends Vehicle class
class Car {
  // Declare properties of the Car class
  type: string;
  defaultColor: string;
  make: string;
  model: string;
  maxStarRank: number;
  fuelCapacity: number;
  fuelRefillTime: number;
  threeStarCar: [];
  fourStarCar: [];
  fiveStarCar: [];
  sixStarCar: [];
  topSpeed: [];
  acceleration: [];
  handling: [];
  nitro: [];
  upgradeStages: [];

  // Constructor for the Car class
  constructor(
    type: string,
    color: string,
    make: string,
    model: string,
    maxStarRank: number,
    capacity: number,
    fuelRefill: number,
    topSpeed: [],
    acceleration: [],
    handling: [],
  ) {

    // Initialize properties of the Car class
    this.type = type;
    this.defaultColor = color;
    this.make = make;
    this.model = model;
    this.maxStarRank = maxStarRank;
    this.fuelCapacity = capacity;
    this.fuelRefillTime = fuelRefill;
    this.topSpeed = topSpeed;
    this.acceleration = acceleration;
    this.handling = handling;
  }
}

// Export the Car class as the default export
export default Car;
