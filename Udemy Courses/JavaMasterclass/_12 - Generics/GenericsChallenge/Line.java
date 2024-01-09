import java.util.Arrays;

abstract class Line implements Mappable {
  protected String name;
  protected double[][] locations;

  public Line(String name, double[][] coordinates) {
    this.name = name;
    this.locations = coordinates;
  }

  public Line(String name, String[] coordinates) {
    this.name = name;

    double[][] locations = new double[coordinates.length][2];

    for (int j = 0; j < coordinates.length; j++) {

      double[] loc = stringToLatLong(coordinates[j]);

      for (int i = 0; i < 2; i++) {
        locations[j][i] = loc[i];
      }
    }

    this.locations = locations;
  }

  @Override
  public void render() {
    System.out.println(String.format("Render %s as LINE (%s)", name, Arrays.deepToString(locations)));
  }

  @Override
  public double[] stringToLatLong(String input) {
    double[] location = new double[2];

    String[] arr = input.split(",");

    for (int i = 0; i < 2; i++) {
      location[i] = Double.parseDouble(arr[i].trim());
    }

    return location;
  }
}