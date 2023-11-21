public class Computer extends ProductForSale {

	public Computer(String type, double price, String description) {
	  super(type, price, description);
	}
  
	@Override
	void printDetails() {
	  System.out.println();
	  System.out.println("~~~ Computer Details ~~~");
	  System.out.println("Type: " + type + "\nPrice: $" + price + "\nDescription: " + description);
	}
  }