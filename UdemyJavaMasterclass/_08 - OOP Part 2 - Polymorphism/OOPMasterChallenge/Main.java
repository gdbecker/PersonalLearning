class Main {
	public static void main(String[] args) {
	  Burger b = new Burger();
	  Side s = new Side();
	  Drink d = new Drink();
	  Meal m = new Meal(b, s, d);
  
	  m.printReceipt();
  
	  Burger newBurger = new Burger("TURKEY", "DELUXE");
	  newBurger.setExtraToppings(3);
	  Side newSide = new Side("ONION RINGS", "MEDIUM");
	  Drink newDrink = new Drink("COFFEE", "LARGE");
	  newDrink.setSize("MEDIUM");
	  Meal newMeal = new Meal(newBurger, newSide, newDrink);
  
	  newMeal.printReceipt();
	}
  }