import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Random;
import java.util.function.Function;
import java.util.function.BiFunction;
import java.util.function.Consumer;
import java.util.function.BiConsumer;
import java.util.function.Supplier;
import java.util.function.UnaryOperator;
import java.util.function.BinaryOperator;
import java.util.function.Predicate;
import java.time.LocalDate;

class PlainOld {
  private static int last_id = 1;

  private int id;
  
  public PlainOld() {
    id = PlainOld.last_id++;
    System.out.println("Instantiating a PlainOld object: id = " + id);
  }
}

class Main {
  
  public static void main(String[] args) {
    List<String> names = new ArrayList<>(List.of(
      "John", "Jane", "Bob", "Alice", "Tom", "Mary", "Emily"));
    names.forEach(n -> System.out.println(n));

    // Example of a method reference
    calculator(Integer::sum, 10, 25);

    // Practice using our own method reference
    System.out.println("\nGetting a PlainOld object array:");
    PlainOld[] pojo1 = seedArray(PlainOld::new, 10);

    calculator((s1, s2) -> s1 + s2, "Hello ", "World");

    // String::concat is a method reference
    calculator(String::concat, "Hello ", "World");

    // Practice with Java interfaces and method references
    BinaryOperator<String> b1 = String::concat;
    BiFunction<String, String, String> b2 = String::concat;
    UnaryOperator<String> u1 = String::toUpperCase;

    System.out.println(b1.apply("Hello ", "World"));
    System.out.println(b2.apply("Hello ", "World"));
    System.out.println(u1.apply("Hello "));

    // Practice with the transform method for Strings and using method references
    String result = "Hello".transform(u1);
    System.out.println("Result = " + result);

    result = result.transform(String::toLowerCase);
    System.out.println("Result = " + result);

    Function<String, Boolean> f0 = String::isEmpty;
    boolean resultBoolean = result.transform(f0);
    System.out.println("Result = " + resultBoolean);

    // Method References Challenge
    System.out.println("\nMethod References Challenge:");
    // Make new List of names
    List<String> listNames = new ArrayList<>(List.of(
      "Anna", "Bob", "cHAd", "Eddie", "DereK", "Alaida", "Egwene", "PErrin", "Rand"));

    // Upper case function
    Function<String, String> fUpper = String::toUpperCase;
    listNames.replaceAll(n -> n.transform(fUpper));

    // Add random middle initial function
    // Use addMiddleInitial() method below

    // Add last name which is reverse of first name function
    Function<String, String> fLast = Main::reverseString;

    // Apply the two new method references
    listNames.replaceAll(n -> n + addMiddleInitial() + n.transform(fLast));
    
    // Print list of new names
    listNames.forEach(System.out::println);

    // Learning convenience methods
    System.out.println("\nLearning convenience methods:");
    String name = "Tim";
    Function<String, String> uCase = String::toUpperCase;
    System.out.println(uCase.apply(name));

    Function<String, String> lastName = s -> s.concat(" Buchalka");
    Function<String, String> uCaseLastName = uCase.andThen(lastName);
    System.out.println(uCaseLastName.apply(name));

    uCaseLastName = uCase.compose(lastName);
    System.out.println(uCaseLastName.apply(name));

    // Practicing chaining methods together
    Function<String, String[]> fExample1 = uCase.andThen(s -> s.concat(" Buchalka")).andThen(s -> s.split(" "));
    System.out.println(Arrays.toString(fExample1.apply(name)));

    Function<String, String> fExample2 = uCase.andThen(s -> s.concat(" Buchalka")).andThen(s -> s.split(" ")).andThen(s -> s[1].toUpperCase() + ", " + s[0]);
    System.out.println(fExample2.apply(name));

    Function<String, Integer> fExample3 = uCase.andThen(s -> s.concat(" Buchalka")).andThen(s -> s.split(" ")).andThen(s -> String.join(", ", s)).andThen(String::length);
    System.out.println(fExample3.apply(name));

    // Practice with Consumer interface
    String[] namesExample = {"Ann", "Bob", "Clark"};
    Consumer<String> s0 = s -> System.out.print(s.charAt(0));
    Consumer<String> s1 = System.out::println;
    Arrays.asList(namesExample).forEach(s0.andThen(s -> System.out.print(" - ")).andThen(s1));

    // Practice with Predicate interface
    Predicate<String> p1 = s -> s.equals("TIM");
    Predicate<String> p2 = s -> s.equalsIgnoreCase("Tim");
    Predicate<String> p3 = s -> s.startsWith("T");
    Predicate<String> p4 = s -> s.endsWith("e");

    Predicate<String> combined1 = p1.or(p2);
    System.out.println("combined1 = " + combined1.test("Tim"));

    Predicate<String> combined2 = p3.and(p4);
    System.out.println("combined2 = " + combined2.test(name));

    Predicate<String> combined3 = p3.and(p4).negate();
    System.out.println("combined3 = " + combined3.test(name));

    // More Comparator methods
    System.out.println("\nMore Comparator methods:");
    record Person(String firstName, String lastName) {}

    List<Person> listPersons = new ArrayList<>(Arrays.asList(
      new Person("Peter", "Pan"),
      new Person("Peter", "PumpkinEater"),
      new Person("Minnie", "Mouse"),
      new Person("Mickey", "Mouse")
    ));

    listPersons.sort((o1, o2) -> o1.lastName.compareTo(o2.lastName));
    listPersons.forEach(System.out::println);

    System.out.println("\nComparing with Comparator.comparing for lastName:");
    listPersons.sort(Comparator.comparing(Person::lastName));
    listPersons.forEach(System.out::println);

    System.out.println("\nComparing with Comparator.comparing for lastName and then firstName:");
    listPersons.sort(Comparator.comparing(Person::lastName).thenComparing(Person::firstName));
    listPersons.forEach(System.out::println);

    System.out.println("\nComparing with Comparator.comparing for lastName and then firstName, then reverse it:");
    listPersons.sort(Comparator.comparing(Person::lastName).thenComparing(Person::firstName).reversed());
    listPersons.forEach(System.out::println);
  }

  private static <T> void calculator(BinaryOperator<T> function, T value1, T value2) {
    T result = function.apply(value1, value2);
    System.out.println("\nResult of operation: " + result);
  }

  private static PlainOld[] seedArray(Supplier<PlainOld> ref, int count) {
    PlainOld[] array = new PlainOld[count];
    Arrays.setAll(array, i -> ref.get());
    return array;
  }

  // Method References Challenge: add a middle initial
  private static String addMiddleInitial() {
    String upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    Random random = new Random();

    return " " + Character.toString(upper.charAt(random.nextInt(upper.length()))) + ". ";
  }

  // Method References Challenge: reverse a String
  private static String reverseString(String s) {
    String rev = "";

    for (int i = 0; i < s.length(); i++) {
        rev += Character.toString(s.charAt(s.length() - i - 1));
    }
    return rev;
  }
}