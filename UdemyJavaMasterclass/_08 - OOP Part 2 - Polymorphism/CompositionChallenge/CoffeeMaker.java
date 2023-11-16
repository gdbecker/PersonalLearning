class CoffeeMaker {
	public boolean hasWorkToDo;
  
	public CoffeeMaker() {
	  this.hasWorkToDo = true;
	}
  
	public void setHasWorkToDo(boolean hasWorkToDo) {
	  this.hasWorkToDo = hasWorkToDo;
	}
  
	public void brewCoffee() {
	  if (hasWorkToDo) {
		System.out.println("Coffee is brewing");
		hasWorkToDo = false;
	  }
	}
  }