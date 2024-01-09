public class Headphone extends ProductForSale {

	public Headphone(String type, double price, String description) {
	  super(type, price, description);
	}
  
	@Override
	void printDetails() {
	  System.out.println();
	  System.out.println("~~~ Headphone Details ~~~");
	  System.out.println("Type: " + type + "\nPrice: $" + price + "\nDescription: " + description);
	}
  }