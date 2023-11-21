import java.util.ArrayList;

class Main {
  public static void main(String[] args) {
    ArrayList<Mappable> maps = new ArrayList<Mappable>();

    maps.add(new Building("Charlotte City Hall", BuildingType.GOVERNMENT));
    maps.add(new Building("Spectrum Center", BuildingType.ENTERTAINMENT));
    maps.add(new Building("AT&T Center", BuildingType.ENTERTAINMENT));
    maps.add(new Building("Wildwood Apartments", BuildingType.RESIDENTIAL));
    maps.add(new Building("Optimist Hall", BuildingType.COMMERCIAL));

    maps.add(new UtilityLine("Electrical Cables", UtilityType.ELECTRICAL));
    maps.add(new UtilityLine("TV Lines", UtilityType.FIBER_OPTIC));

    for (Mappable m : maps) {
      Mappable.mapIt(m);
    }

  }
}