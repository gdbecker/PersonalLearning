import java.util.ArrayList;
import java.util.Arrays;

class Main {
  public static void main(String[] args) {
    double[] grandCanyonCoordinates = new double[] { 40.1021, -75.4231 };
    Park grandCanyon = new Park("Grand Canyon National Park", grandCanyonCoordinates);
    // grandCanyon.render();

    Park grandCanyon2 = new Park("Grand Canyon National Park", "40.1021, -75.4231");
    // grandCanyon2.render();

    double[][] mississippiCoordinates = new double[][] { { 47.2160, -95.2348 }, { 35.1556, -90.0659 },
        { 29.1566, -89.2495 } };
    River mississippiRiver = new River("Mississippi River", mississippiCoordinates);
    // mississippiRiver.render();

    String[] mississippiCoordinates2 = new String[] {"47.2160, -95.2348", "35.1556, -90.0659", "29.1566, -89.2495" };
    River mississippiRiver2 = new River("Mississippi River", mississippiCoordinates2);
    // mississippiRiver2.render();

    var parks = new Park[] {
      new Park("Yellow Stone National Park", "44.4882, -110.5916"),
      new Park("Grand Canyon National Park", "36.0636, -112.1079"),
      new Park("Yosemite National Park", "37.8855, -119.5360")
    };
    
    Layer USNationalParks = new Layer(parks);
      USNationalParks.addElements(mississippiRiver, mississippiRiver2);
      USNationalParks.renderElements();

  }
}