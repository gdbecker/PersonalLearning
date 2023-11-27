import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Random;
import java.util.function.Consumer;
import java.util.function.BiConsumer;
import java.util.function.Supplier;
import java.util.function.UnaryOperator;
import java.time.LocalDate;

class Main {

  record Person (String firstName, String lastName) {
    @Override // General Java object method
      public String toString() {
        return firstName + " " + lastName;
      }
  }
  
  public static void main(String[] args) {
    List<Person> people = new ArrayList<>(Arrays.asList(
      new Main.Person("Lucy", "Van Pelt"),
      new Person("Sally", "Brown"),
      new Person("Linus", "Van Pelt"),
      new Person("Peppermint", "Patty"),
      new Person("Charlie", "Brown")
    ));

    // Using anonymous class
    var comparatorLastName = new Comparator<Person>() {
      @Override // Comparator method
      public int compare(Person p1, Person p2) {
        return p1.lastName().compareTo(p2.lastName());
      }
    };
    // people.sort(comparatorLastName);

    // Using a lambda expression
    people.sort((p1, p2) -> p1.lastName().compareTo(p2.lastName()));
    System.out.println(people);

    // Make a generic interface -> not a functional interface because it has more than one method
    interface EnhancedComparator<T> extends Comparator<T> {
      int secondLevel(T o1, T o2);
    }

    var comparatorMixed = new EnhancedComparator<Person>() {
      @Override // Comparator method
      public int compare(Person p1, Person p2) {
        int result = p1.lastName().compareTo(p2.lastName());
        return (result == 0 ? secondLevel(p1, p2) : result);
      }

      @Override // EnhancedComparator method from above
      public int secondLevel(Person p1, Person p2) {
        return p1.firstName().compareTo(p2.firstName());
      }
    };

    people.sort(comparatorMixed);
    System.out.println(people);

    // Practice using another functional interface for lambdas
    List<String> list = new ArrayList<>(List.of(
      "alpha", "bravo", "charlie", "delta"
    ));

    System.out.println("\nPrint using a for loop:");
    for (String s : list) {
      System.out.println(s);
    }

    System.out.println("\nPrint using a lambda expression:");
    list.forEach((s) -> System.out.println(s));

    System.out.println("\nPrint using a lambda expression but with more functionality:");
    String prefix = "nato";
    list.forEach((s) -> {
      char first = s.charAt(0);
      System.out.println(prefix + " " + s + " means " + first);
    });

    System.out.println("\nMultipication:");
    int result1 = calculator((a, b) -> a * b, 5, 2);

    System.out.println("\nAddition:");
      int result2 = calculator((Integer a, Integer b) -> a + b, 5, 2);

    System.out.println("\nDivision:");
    double result3 = calculator((a, b) -> a / b, 5.0, 3.2);

    System.out.println("\nUsing Strings:");
    String result4 = calculator((a, b) -> a.toUpperCase() + " " + b.toUpperCase(), "Ralph", "Kramden");

    var coords = Arrays.asList(
      new double[]{47.2160, -95.2348},
      new double[]{29.1566, -89.2495},
      new double[]{35.1556, -90.0659}
    );

    System.out.println("\nAnother lambda expresion:");
    coords.forEach(s -> System.out.println(Arrays.toString(s)));

    // Making a custom functional interface for lambda expressions
    BiConsumer<Double, Double> p1 = (lat, lng) -> System.out.printf("[lat:%.3f lon:%.3f]%n", lat, lng);

    System.out.println("\nLambda expressions with BiConsumer:");
    coords.forEach(s -> processPoint(s[0], s[1], p1));

	// Practicing List and ArrayList lambda functions
    System.out.println();
    list.addAll(List.of("echo", "easy", "earnest"));
    list.forEach(s -> System.out.println(s));

    System.out.println();
    list.removeIf(s -> s.startsWith("ea"));
    list.forEach(s -> System.out.println(s));

    System.out.println();
    list.replaceAll(s -> s.charAt(0) + " - " + s.toUpperCase());
    list.forEach(s -> System.out.println(s));

    System.out.println();
    String[] emptyStrings = new String[10];
    System.out.println(Arrays.toString(emptyStrings));
    Arrays.fill(emptyStrings, "");
    System.out.println(Arrays.toString(emptyStrings));
    Arrays.setAll(emptyStrings, (i) -> "" + (i + 1) + ". ");
    System.out.println(Arrays.toString(emptyStrings));

    // Using custom functional interface built off of Supplier interface
    String[] names = {"Ann", "Bob", "Carol", "David", "Ed", "Fred"};
    String[] randomList = randomlySelectedValues(15, names, () -> new Random().nextInt(0, names.length));
  System.out.println(Arrays.toString(randomList));

    // Mini Challenge #1
    System.out.println("\nMini Challenge #1");
    List<String> c1 = new ArrayList<>(List.of("a b c", "d e f", "g h i j k"));
    Consumer<String> separator = s -> {
      String[] parts = s.split(" ");
      for (String p : parts) {
        System.out.println(p);
      };
    };
    
    for (String c : c1) {
      separator.accept(c);
    }

    // Mini Challenge #2-3
    System.out.println("\nMini Challenge #2-3");
    UnaryOperator<String> resultString = source -> {
      StringBuilder returnVal = new StringBuilder();
      for (int i = 0; i < source.length(); i++) {
        if (i % 2 == 1) {
          returnVal.append(source.charAt(i));
        }
      }
      return returnVal.toString();
    };

    String c23 = resultString.apply("123456789");
    System.out.println(c23);

    // Mini Challenge #4-5
    System.out.println("\nMini Challenge #4-5");
    String c4 = everySecondCharacter("123456789", resultString);
    System.out.println(c4);

    // Mini Challenge #6-7
    System.out.println("\nMini Challenge #6-7");
    Supplier<String> supplierResult = () -> "I love Java";
    System.out.println(supplierResult.get());
  }

  // Made new custom functional interface
  public static <T> T calculator(Operation<T> function, T value1, T value2) {
    T result = function.operate(value1, value2);
    System.out.println("Result of operation = " + result);
    return result;
  }

  // Made new functional interface using BiConsumer interface
  public static <T> void processPoint(T t1, T t2, BiConsumer<T,T> consumer) {
    consumer.accept(t1, t2);
  }

  // Made new functional interface with Supplier interface
  public static String[] randomlySelectedValues(int count, String[] values, Supplier<Integer> s) {
    String[] selectedValues = new String[count];
    for (int i = 0; i < count; i++) {
      selectedValues[i] = values[s.get()];
    }
    return selectedValues;
  }

  // Mini Challenge #4-5
  public static String everySecondCharacter(String source, UnaryOperator<String> o) {
    return o.apply(source);
  }
}