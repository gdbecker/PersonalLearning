abstract class ProductForSale {
	protected String type;
	protected double price;
	protected String description;
  
	public ProductForSale(String type, double price, String description) {
	  this.type = type;
	  this.price = price;
	  this.description = description;
	}
  
	public String getType() {
	  return type;
	}
  
	public double getSalesPrice(double quantity) {
	  return (double) Math.round((price * quantity) * 100d) / 100d;
	}
  
	public void printPricedLineItem(double quantity) {
	  double salesPrice = getSalesPrice(quantity);
	  System.out.println("(" + quantity + ") " + type + " = $" + salesPrice);
	}
  
	abstract void printDetails();
  }