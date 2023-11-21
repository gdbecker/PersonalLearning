class Main {
	public static void main(String[] args) {
	  Store s = new Store();
	  Computer Mac = new Computer("Mac", 700.00, "Apple M1");
	  s.addProduct(Mac);
	  Headphone Bose = new Headphone("Bose", 300.00, "Quietcomfort 45");
	  s.addProduct(Bose);
  
	  // Test to make sure store won't add because it's already there
	  s.addProduct(Mac);
  
	  OrderItem order1 = new OrderItem(2, Mac);
	  s.addOrderItem(order1);
  
	  OrderItem order2 = new OrderItem(1, Bose);
	  s.addOrderItem(order2);
  
	  s.printStoreOrders();
	  s.printStoreProducts();
  
	}
  }