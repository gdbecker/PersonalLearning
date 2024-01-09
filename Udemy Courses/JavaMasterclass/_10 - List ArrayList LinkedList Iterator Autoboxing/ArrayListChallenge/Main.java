import java.util.Scanner;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

class Main {
  public static void main(String[] args) {
    boolean keepGoing = true;
    Scanner sc = new Scanner(System.in);
    ArrayList<String> menu = new ArrayList<String>();

    while (keepGoing) {
      printOptionMenu();
      int choice = sc.nextInt();
      sc.nextLine();

      if (choice < 0 || choice > 2) {
        keepGoing = false;
      } else if (choice == 0) {
        keepGoing = false;
      } else if (choice == 1) {
        menu = addToList(menu, sc);
      } else if (choice == 2) {
        menu = removeFromList(menu, sc);
      }

      printArray(menu);
    }
  }

  private static ArrayList<String> addToList(ArrayList<String> list, Scanner sc) {
    System.out.println("Enter a comma delimited list of items to add to the menu:");
    String input = sc.nextLine();
    List<String> menuItems = Arrays.asList(input.split(","));
    list.addAll(menuItems);
    return list;
  }

  private static ArrayList<String> removeFromList(ArrayList<String> list, Scanner sc) {
    System.out.println("Enter a comma delimited list of items to remove from the menu:");
    String input = sc.nextLine();
    List<String> menuItems = Arrays.asList(input.split(","));
    list.removeAll(menuItems);
    return list;
  }

  private static void printArray(ArrayList<String> list) {
    System.out.println();
    System.out.println("Your menu is: " + String.join(", ", list));
  }

  private static void printOptionMenu() {
    System.out.println();
    System.out.println("Available Actions:");
    System.out.println("0 - to shutdown");
    System.out.println("1 - to add item(s) to list (comma delimited list)");
    System.out.println("2 - to remove item(s) from list (comma delimited list)");
    System.out.println("Enter a number for which action you would like to do: ");
  }

}