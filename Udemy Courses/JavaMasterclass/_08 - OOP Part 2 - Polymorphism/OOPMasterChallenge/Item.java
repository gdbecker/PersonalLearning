class Item {
	private String type;
	private String name;
	private String size;
	private double price;
  
	public Item(String type, String name, String size) {
	  this.type = type;
	  this.name = name;
	  this.size = size;
	  this.price = calculatePrice();
	}
  
	public String getType() {
	  return type;
	}
  
	public String getName() {
	  return name;
	}
  
	public String getSize() {
	  return size;
	}
  
	public void setSize(String size) {
	  this.size = size;
	  this.price = calculatePrice();
	}
  
	public double getPrice() {
	  return price;
	}
  
	public void setPrice(double price) {
	  this.price = price;
	}
  
	public String getDetails() {
	  return size + " " + name + " : $" + price;
	}
  
	public double calculatePrice() {
	  double basePrice = switch (type) {
		case "SIDE" -> 0.99;
		case "DRINK" -> 1.99;
		default -> 0.00;
	  };
  
	  double upcharge = switch (size) {
		case "SMALL" -> 0.99;
		case "MEDIUM" -> 1.49;
		case "LARGE" -> 1.99;
		default -> 0.00;
	  };
  
	  return basePrice + upcharge;
	}
  }