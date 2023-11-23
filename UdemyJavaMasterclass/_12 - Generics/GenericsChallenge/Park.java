public class Park extends Point {
	public Park(String name, double[] coordinates) {
	  super(name, coordinates);
	}
  
	public Park(String name, String coordinates) {
	  super(name, coordinates);
	}
  
	public String getName() {
	  return name;
	}
  
	@Override
	public String toString() {
	  return "Park: " + name;
	}
  }