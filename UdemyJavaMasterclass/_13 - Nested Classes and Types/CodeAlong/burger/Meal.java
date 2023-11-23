import java.util.List;
import java.util.ArrayList;

public class Meal {
  // Inner Class example
  private class Item {
    protected String name;
    protected String type;
    protected double price;

    public Item(String name, String type) {
      this(name, type, type.equals("burger") ? Meal.this.price : 0);
    }

    public Item(String name, String type, double price) {
      this.name = name;
      this.type = type;
      this.price = price;
    }

    @Override // General Java object method
    public String toString() {
      return "%10s%15s $%.2f".formatted(type, name, getPrice(price, conversionRate));
    }

    private static double getPrice(double price, double rate) {
      return price * rate;
    }
  }

  // Inner class example
  private class Burger extends Item {
    private ArrayList<Item> toppings;

    public Burger(String name, String type) {
      super(name, type);
      this.toppings = new ArrayList<Item>();
    }

    public Burger(String name, String type, ArrayList<Item> toppings) {
      super(name, type);
      this.toppings = toppings;
    }

    public Burger(String name, String type, double price, ArrayList<Item> toppings) {
      super(name, type, price);
      this.toppings = toppings;
    }

    public double getToppingPrice(String toppingName) {
      return switch(toppingName) {
          case "cheese" -> 0.60;
          case "lettuce" -> 0.30;
          case "tomato" -> 0.75;
          case "onion" -> 0.40;
          case "pickle" -> 0.00;
          case "bacon" -> 0.85;
          default -> 0.50;
      };
    }

    private static double getPrice(double price, double rate) {
      return price * rate;
    }

    @Override // General Java object method
    public String toString() {
      StringBuilder itemized = new StringBuilder(super.toString());
      for (Item t : toppings) {
        itemized.append("\n");
        itemized.append(t);
      }
      return itemized.toString();
    }
  }
  
  private double price = 5.0;
  private Burger burger;
  private Item drink;
  private Item side;
  private double conversionRate;

  public Meal() {
    this(1); // default conversionRate = 1
  }

  public Meal(double conversionRate) {
    this.conversionRate = conversionRate;
    this.burger = new Burger("regular", "burger");
    this.drink = new Item("coke", "drink", 1.5);
    this.side = new Item("fries", "side", 2.0);
  }

  public void addToppings(String... items) {
    for (String t : items) {
      Item newTopping = new Item(t, "TOPPING", this.burger.getToppingPrice(t));
      this.burger.toppings.add(newTopping);
    }
  }

  public double getTotal() {
    double total = burger.price + drink.price + side.price;
    for (Item t : burger.toppings) {
      total += t.price;
    }
    return Item.getPrice(total, conversionRate);
  }

  @Override // General Java object method
  public String toString() {
    return "%s%n%s%n%s%n%26s$%.2f".formatted(burger, drink, side, "Total Due: ", getTotal());
  }
}