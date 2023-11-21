public class UtilityLine implements Mappable {
	private String name;
	private UtilityType type;
  
	public UtilityLine(String name, UtilityType type) {
	  this.name = name;
	  this.type = type;
	}
  
	public String getName() {
	  return name;
	}
  
	public UtilityType getType() {
	  return type;
	}
  
	@Override
	public String getLabel() {
	  return name + "(" + type + ")";
	};
  
	@Override
	public Geometry getShape() {
	  return Geometry.LINE;
	};
  
	@Override
	public String getMarker() {
	  return switch (type) {
		case ELECTRICAL -> Color.PURPLE + " " + LineMarker.DASHED;
		case FIBER_OPTIC -> Color.GREEN + " " + LineMarker.SOLID;
		default -> Color.BLACK + " " + LineMarker.DOTTED;
	  };
	};
  }