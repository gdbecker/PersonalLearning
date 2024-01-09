public class River extends Line {
	public River(String name, double[][] coordinates) {
	  super(name, coordinates);
	}
  
	public River(String name, String[] coordinates) {
	  super(name, coordinates);
	}
  
	public String getName() {
	  return name;
	}
  
	@Override
	public String toString() {
	  return "River: " + name;
	}
  }