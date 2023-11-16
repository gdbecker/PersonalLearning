class Meal {
	private Burger burger;
	private Side side;
	private Drink drink;
	private double price;
  
	public Meal(Burger burger, Side side, Drink drink) {
	  this.burger = burger;
	  this.side = side;
	  this.drink = drink;
	  this.price = burger.getPrice() + side.getPrice() + drink.getPrice();
	}
  
	public Burger getBurger() {
	  return burger;
	}
  
	public Side getSide() {
	  return side;
	}
  
	public Drink getDrink() {
	  return drink;
	}
  
	public double getPrice() {
	  return (double) Math.round(price * 100d) / 100d;
	}
  
	public void printReceipt() {
	  System.out.println("");
	  System.out.println("----- ORDER DETAILS -----");
	  System.out.println(burger.getDetails());
	  System.out.println(side.getDetails());
	  System.out.println(drink.getDetails());
	  System.out.println("");
	  System.out.println("----- TOTAL PRICE -----");
	  System.out.println("$" + getPrice());
	}
  }