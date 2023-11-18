import java.util.Scanner;
import java.util.LinkedList;
import java.util.ListIterator;

record Place(String name, int distance) {

  @Override
  public String toString() {
    return name + ": " + distance + " km";
  }

}

class Main {
  public static void main(String[] args) {
    boolean keepGoing = true;
    Scanner sc = new Scanner(System.in);
    LinkedList<Place> locs = new LinkedList<Place>();
    locs = addPlaces(locs);

    ListIterator<Place> it = locs.listIterator(0);

    while (keepGoing) {
      printOptionMenu();
      String choice = sc.nextLine();

      if (choice.equals("F")) {
        if (it.hasNext()) {
          System.out.println(it.next().toString());
        } else {
          System.out.println("You are at the end of the list.");
        }
      } else if (choice.equals("B")) {
        if (it.hasPrevious()) {
          System.out.println(it.previous().toString());
        } else {
          System.out.println("You are at the start of the list.");
        }
      } else if (choice.equals("L")) {
        for (Place p : locs) {
          System.out.println(p.toString());
        }
      } else if (choice.equals("M")) {
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