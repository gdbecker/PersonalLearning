import java.util.Arrays;

abstract class Point implements Mappable {
  protected String name;
  protected double[] location;

  public Point(String name, double[] coordinates) {
    this.name = name;
    this.location = coordinates;
  }

  public Point(String name, String coordinates) {
    this.name = name;
    this.location = stringToLatLong(coordinates);
  }

  @Override
  public void render() {
    System.out.println(String.format("Render %s as POINT (%s)", name, Arrays.toString(location)));
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