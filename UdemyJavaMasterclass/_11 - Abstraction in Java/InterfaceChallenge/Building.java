public class Building implements Mappable {
	private String name;
	private BuildingType type;
  
	public Building(String name, BuildingType type) {
	  this.name = name;
	  this.type = type;
	}
  
	public String getName() {
	  return name;
	}
  
	public BuildingType getType() {
	  return type;
	}
  
	@Override
	public String getLabel() {
	  return name + "(" + type + ")";
	};
  
	@Override
	public Geometry getShape() {
	  return Geometry.POINT;
	};
  
	@Override
	public String getMarker() {
	  return switch(type) {
		case RESIDENTIAL -> Color.BLACK + " " + PointMarker.CIRCLE;
		case COMMERCIAL -> Color.BLUE + " " + PointMarker.DIAMOND;
		case INDUSTRIAL -> Color.GREEN + " " + PointMarker.SQUARE;
		case GOVERNMENT -> Color.PURPLE + " " + PointMarker.TRIANGLE;
		case ENTERTAINMENT -> Color.GOLD + " " + PointMarker.STAR;
		default -> Color.BLACK + " " + PointMarker.CIRCLE;
	  };
	};
  }