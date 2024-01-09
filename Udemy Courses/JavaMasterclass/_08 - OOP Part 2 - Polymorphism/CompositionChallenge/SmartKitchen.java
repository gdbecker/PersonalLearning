class SmartKitchen {
	private Refrigerator iceBox;
	private DishWasher dishWasher;
	private CoffeeMaker brewMaster;
  
	public SmartKitchen() {
	  iceBox = new Refrigerator();
	  dishWasher = new DishWasher();
	  brewMaster = new CoffeeMaker();
	}
  
	public void doKitchenWork() {
	  this.iceBox.orderFood();
	  this.dishWasher.doDishes();
	  this.brewMaster.brewCoffee();
	}
  }