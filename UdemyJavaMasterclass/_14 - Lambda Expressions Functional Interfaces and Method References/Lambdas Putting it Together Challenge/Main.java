import java.util.List;
import java.util.ArrayList;
import java.util.Random;

class Main {
  
  public static void main(String[] args) {
    // Make new List of names
    List<String> names = new ArrayList<>(List.of(
      "Anna", "Bob", "cHAd", "Eddie", "DereK", "Alaida", "Egwene", "PErrin", "Rand"));
    List<String> namesFiltered = new ArrayList<>(List.of(
      "Anna", "Bob", "cHAd", "Eddie", "DereK", "Alaida", "Egwene", "PErrin", "Rand"));

    // Set all names to uppercase
    names.replaceAll(s -> s.toUpperCase());
    namesFiltered.replaceAll(s -> s.toUpperCase());

    // Add a randomly generated middle initial with period, and add last name that's reversed of the first
    String upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    Random random = new Random();

    names.replaceAll(n -> n + " " + Character.toString(upper.charAt(random.nextInt(upper.length()))) + ". " + reverseString(n));
    
    // Print the List
    System.out.println("\nNames as is:");
    names.forEach(n -> System.out.println(n));

    // Remove names which first name = last name
    namesFiltered.removeIf(n -> n.equals(reverseString(n)));
      namesFiltered.replaceAll(n -> n + " " + Character.toString(upper.charAt(random.nextInt(upper.length()))) + ". " + reverseString(n));

    // Print the new List
    System.out.println("\nNames where first != last:");
    namesFiltered.forEach(n -> System.out.println(n));
  }

  private static String reverseString(String s) {
    String rev = "";

    for (int i = 0; i < s.length(); i++) {
        rev += Character.toString(s.charAt(s.length() - i - 1));
    }
    return rev;
  }
}