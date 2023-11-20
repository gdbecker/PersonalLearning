import java.util.Scanner;
import java.util.LinkedList;
import java.util.ListIterator;
import java.util.Comparator;

record Place(String name, int distance) {

  @Override
  public String toString() {
    return name + ": " + distance + " km";
  }

  public int getDistance() {
    return distance;
  }

}

class Main {
  public static void main(String[] args) {
    boolean keepGoing = true;
    boolean forward = false;
    boolean backward = false;
    Scanner sc = new Scanner(System.in);

    LinkedList<Place> locs = new LinkedList<Place>();
    locs = addPlaces(locs);
    locs = sortPlaces(locs);

    ListIterator<Place> it = locs.listIterator(0);

    printOptionMenu();

    while (keepGoing) {

      System.out.println();
      System.out.println("Select your action:");
      String choice = sc.nextLine();

      if (choice.equals("F") || choice.equals("f")) {
        forward = true;
        if (it.hasNext()) {
          if (backward) {
            backward = false;
            it.next();
            System.out.println(it.next().toString());
          } else {
            System.out.println(it.next().toString());
          }
        } else {
          System.out.println("You are the furthest away from Sydney.");
        }
      } else if (choice.equals("B") || choice.equals("b")) {
        backward = true;
        if (it.hasPrevious()) {
          if (forward) {
            forward = false;
            it.previous();
            System.out.println(it.previous().toString());
          } else {
            System.out.println(it.previous().toString());
          }
        } else {
          System.out.println("You are the closest to Sydney.");
        }
      } else if (choice.equals("L") || choice.equals("l")) {
        for (Place p : locs) {
          System.out.println(p.toString());
        }
      } else if (choice.equals("M") || choice.equals("m")) {
        printOptionMenu();
      } else {
        keepGoing = false;
      }
    }

    sc.close();
  }

  private static LinkedList<Place> addPlaces(LinkedList<Place> placesList) {
    placesList.add(new Place("Adelaide", 1374));
    placesList.add(new Place("Alice Springs", 2771));
    placesList.add(new Place("Brisbane", 917));
    placesList.add(new Place("Darwin", 3972));
    placesList.add(new Place("Melbourne", 877));
    placesList.add(new Place("Perth", 3923));
    return placesList;
  }

  private static LinkedList<Place> sortPlaces(LinkedList<Place> placesList) {
    Comparator<Place> c = Comparator.comparing(Place::getDistance);
    placesList.sort(c);
    return placesList;
  }

  private static void printOptionMenu() {
    System.out.println();
    System.out.println("Available actions (select word or letter)");
    System.out.println("(F)orward");
    System.out.println("(B)ackward");
    System.out.println("(L)ist Places");
    System.out.println("(M)enu");
    System.out.println("(Q)uit");
  }

}