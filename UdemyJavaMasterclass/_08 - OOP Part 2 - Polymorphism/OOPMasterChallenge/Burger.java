class Burger extends Item {

	private int extraToppings = 0;
  
	public Burger() {
	  super("BURGER", "BEEF", "REGULAR");
	  this.setPrice(calculatePrice());
	}
  
	public Burger(String name, String size) {
	  super("BURGER", name, size);
	}
  
	public Burger(String type, String name, String size, int extraToppings) {
	  super("BURGER", name, size);
	  setExtraToppings(extraToppings);
	  setPrice(calculatePrice());
	}
  
	public void setExtraToppings(int num) {
	  if (this.getSize().equals("REGULAR") && num > 3) {
		this.extraToppings = 3;
	  } else if (this.getSize().equals("DELUXE") && num > 2) {
		this.extraToppings = 2;
	  } else if (extraToppings < 0) {
		this.extraToppings = 0;
	  } else {
		this.extraToppings = num;
	  }
	  setPrice(calculatePrice());
	}
  
	@Override
	public String getDetails() {
	  return this.getSize() + " " + this.getName() + " " + this.getType() + " with " + extraToppings + " toppings : $"
		  + this.getPrice();
	}
  
	@Override
	public double calculatePrice() {
	  double basePrice = switch (this.getName()) {
		case "BEEF" -> 3.99;
		case "TURKEY" -> 4.99;
		default -> 0.00;
	  };
  
	  double upcharge = switch (this.getSize()) {
		case "REGULAR" -> 0.00;
		case "DELUXE" -> 1.99;
		default -> 0.00;
	  };
  
	  double extraToppingsPrice = 0.50 * extraToppings;
  
	  return basePrice + upcharge + extraToppingsPrice;
	}
  
  }