class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

// using inheritance
class Car extends Vehicle {
  constructor(
    color: string,
    public wheels: number,
  ) {
    super(color);
  }

  private drive(): void {
    console.log("vroom vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car("blue", 4);
car.startDrivingProcess();
console.log(car.color);
console.log(car.wheels);
