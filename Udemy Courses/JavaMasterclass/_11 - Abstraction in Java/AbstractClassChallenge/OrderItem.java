class OrderItem {
	private double quantity;
	private ProductForSale product;
  
	public OrderItem(int quantity, ProductForSale product) {
	  this.quantity = quantity;
	  this.product = product;
	}
  
	public double getQuantity() {
	  return quantity;
	}
  
	public ProductForSale getProductForSale() {
	  return product;
	}
  }