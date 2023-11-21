import java.util.ArrayList;

class Store {
  private ArrayList<ProductForSale> products;
  private ArrayList<OrderItem> orderItems;

  public Store() {
    products = new ArrayList<ProductForSale>();
    orderItems = new ArrayList<OrderItem>();
  }

  public void addProduct(ProductForSale product) {
    if (findProduct(product.getType()) == null) {
      products.add(product);
    }
  }

  public void addOrderItem(OrderItem item) {
    orderItems.add(item);
  }

  public ProductForSale findProduct(String productType) {
    for (ProductForSale p : products) {
      if (p.getType().equals(productType)) {
        return p;
      }
    }

    return null;
  }

  public void printStoreProducts() {
    System.out.println();
    System.out.println("----- Available Products -----");

    for (ProductForSale p : products) {
      p.printDetails();
    }
  }

  public void printStoreOrders() {
    System.out.println();
    System.out.println("----- Store Orders -----");

    for (OrderItem o : orderItems) {
      int i = orderItems.indexOf(o) + 1;
      System.out.println();
      System.out.println("Order [" + i + "]");

      ProductForSale p = o.getProductForSale();
      double quantity = o.getQuantity();
      p.printPricedLineItem(quantity);
    }
  }

}