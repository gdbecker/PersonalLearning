import java.util.Scanner;
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Random;
import java.util.Collection;
import java.util.Collections;
import java.util.NavigableSet;
import java.util.TreeSet;
import java.util.HashSet;
import java.util.Set;
import java.util.function.Function;
import java.util.function.BiFunction;
import java.util.function.Consumer;
import java.util.function.BiConsumer;
import java.util.function.Supplier;
import java.util.function.UnaryOperator;
import java.util.function.BinaryOperator;
import java.util.function.Predicate;
import java.time.LocalDate;

class Main {
  
  public static void main(String[] args) {
    // Learning LinkedHashSets and TreeSets
    List<Contact> phones = ContactData.getData("phone");
    List<Contact> emails = ContactData.getData("email");

    Comparator<Contact> mySort = Comparator.comparing(Contact::getName);
    NavigableSet<Contact> sorted = new TreeSet<>(mySort);
    sorted.addAll(phones);
    sorted.forEach(System.out::println);

    NavigableSet<String> justNames = new TreeSet<>();
    phones.forEach(c -> justNames.add(c.getName()));
    System.out.println("-------------------------------");
    System.out.println(justNames);

    NavigableSet<Contact> fullSet = new TreeSet<>(sorted);
    fullSet.addAll(emails);
    System.out.println("-------------------------------");
    fullSet.forEach(System.out::println);

    List<Contact> fullList = new ArrayList<>(phones);
    fullList.addAll(emails);
    fullList.sort(sorted.comparator());
    System.out.println("-------------------------------");
    fullList.forEach(System.out::println);

    Contact min = Collections.min(fullSet, fullSet.comparator());
    Contact max = Collections.max(fullSet, fullSet.comparator());

    Contact first = fullSet.first();
    Contact last = fullSet.last();
    
    System.out.println("-------------------------------");
    System.out.printf("min = %s, first=%s %n", min.getName(), first.getName());
    System.out.printf("max = %s, last=%s %n", max.getName(), last.getName());

    NavigableSet<Contact> copiedSet = new TreeSet<>(fullSet);
    System.out.println("-------------------------------");
    System.out.println("First element = " + copiedSet.pollFirst());
    System.out.println("Last element = " + copiedSet.pollLast());
    copiedSet.forEach(System.out::println);

    // More NavigableSet methods
    Contact daffy = new Contact("Daffy Duck");
    Contact daisy = new Contact("Daisy Duck");
    Contact snoopy = new Contact("Snoopy");
    Contact archie = new Contact("Archie");

    System.out.println("-------------------------------");
    for (Contact c : List.of(daffy, daisy, last, snoopy)) {
      System.out.printf("ceiling(%s)=%s%n", c.getName(), fullSet.ceiling(c));
      System.out.printf("higher(%s)=%s%n", c.getName(), fullSet.higher(c));
    }

    System.out.println("-------------------------------");
    for (Contact c : List.of(daffy, daisy, last, archie)) {
      System.out.printf("floor(%s)=%s%n", c.getName(), fullSet.floor(c));
      System.out.printf("lower(%s)=%s%n", c.getName(), fullSet.lower(c));
    }

    NavigableSet<Contact> descendingSet = fullSet.descendingSet();
    System.out.println("-------------------------------");
    descendingSet.forEach(System.out::println);

    Contact lastContact = descendingSet.pollLast();
    System.out.println("-------------------------------");
    System.out.println("Removed " + lastContact);
    System.out.println("-------------------------------");
    fullSet.forEach(System.out::println);
    System.out.println("-------------------------------");

    Contact marion = new Contact("Maid Marion");
    var headSet = fullSet.headSet(marion, true);
    headSet.forEach(System.out::println);
    System.out.println("-------------------------------");

    var tailSet = fullSet.tailSet(marion, false);
    tailSet.forEach(System.out::println);
    System.out.println("-------------------------------");

    Contact linus = new Contact("Linus Van Pelt");
    var subset = fullSet.subSet(linus, false, marion, true);
    subset.forEach(System.out::println);

  }
}