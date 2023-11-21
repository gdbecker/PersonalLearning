public interface Mappable {
	String JSON_PROPERTY = """
		 "Properties":{%s}
		""";
  
	String getLabel();
  
	Geometry getShape();
  
	String getMarker();
  
	default String toJSON() {
	  return """
		  "type": %s, "label": %s, "marker": %s""".formatted(getShape(), getLabel(), getMarker());
	}
  
	static void mapIt(Mappable m) {
	  System.out.println(JSON_PROPERTY.formatted(m.toJSON()));
	}
  }