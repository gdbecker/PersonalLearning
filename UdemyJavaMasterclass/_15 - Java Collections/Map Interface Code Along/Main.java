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
import java.util.Map;
import java.util.HashMap;
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
    // Map interface methods
    List<Contact> phones = ContactData.getData("phone");
    List<Contact> emails = ContactData.getData("email");

    List<Contact> fullList = new ArrayList<>(phones);
    fullList.addAll(emails);
    fullList.forEach(System.out::println);
    System.out.println("----------------------------------");

    Map<String, Contact> contacts = new HashMap<>();
    for (Contact c : fullList) {
      contacts.put(c.getName(), c);
    }
    contacts.forEach((k, v) -> System.out.println("key=" + k + " : " + "value=" + v));
    System.out.println("----------------------------------");

    System.out.println(contacts.get("Charlie Brown"));
    System.out.println("----------------------------------");

    contacts.clear();
    for (Contact c : fullList) {
      Contact duplicate = contacts.put(c.getName(), c);
      if (duplicate != null) {
        contacts.put(c.getName(), c.mergeContactData(duplicate));
      }
    }
    contacts.forEach((k, v) -> System.out.println("key=" + k + " : " + "value=" + v));
    System.out.println("----------------------------------");

    contacts.clear();
    for (Contact c : fullList) {
      contacts.putIfAbsent(c.getName(), c);
    }
    contacts.forEach((k, v) -> System.out.println("key=" + k + " : " + "value=" + v));
    System.out.println("----------------------------------");

    contacts.clear();
    for (Contact c : fullList) {
      Contact duplicate = contacts.putIfAbsent(c.getName(), c);
      if (duplicate != null) {
        contacts.put(c.getName(), c.mergeContactData(duplicate));
      }
    }
    contacts.forEach((k, v) -> System.out.println("key=" + k + " : " + "value=" + v));
    System.out.println("----------------------------------");

    contacts.clear();
    fullList.forEach(
      c -> contacts.merge(c.getName(), c, Contact::mergeContactData));
    contacts.forEach((k, v) -> System.out.println("key=" + k + " : " + "value=" + v));
    System.out.println("----------------------------------");

    for (String contactName : new String[]{"Daisy Duck", "Daffy Duck", "Scrooge McDuck"}) {
      contacts.computeIfAbsent(contactName, k -> new Contact(k));
    }
    contacts.forEach((k, v) -> System.out.println("key=" + k + " : " + "value=" + v));
    System.out.println("----------------------------------");

    for (String contactName : new String[]{"Daisy Duck", "Daffy Duck", "Scrooge McDuck"}) {
      contacts.computeIfPresent(contactName, (k, v) -> {
        v.addEmail("Fun Place"); 
        return v;
      });
    }
    contacts.forEach((k, v) -> System.out.println("key=" + k + " : " + "value=" + v));
    System.out.println("----------------------------------");

    contacts.replaceAll((k, v) -> {
      String newEmail = k.replaceAll(" ", "") + "@funplace.com";
      v.replaceEmailIfExists("DDuck@funplace.com", newEmail);
      return v;
    });
    contacts.forEach((k, v) -> System.out.println("key=" + k + " : " + "value=" + v));
    System.out.println("----------------------------------");

    Contact daisy = new Contact("Daisy Jane Duck", "daisyj@duck.com");
    Contact replacedContact = contacts.replace("Daisy Duck", daisy);
    System.out.println("daisy = " + daisy);
    System.out.println("replacedContact = " + replacedContact);
    contacts.forEach((k, v) -> System.out.println("key=" + k + " : " + "value=" + v));
    System.out.println("----------------------------------");

    Contact updatedDaisy = replacedContact.mergeContactData(daisy);
    System.out.println("updatedDaisy = " + updatedDaisy);
    boolean success = contacts.replace("Daisy Duck", daisy, updatedDaisy);
    if (success) {
      System.out.println("Successfully replaced element");
    } else {
      System.out.printf("Did not match on both key: %s and value: %s %n".formatted("Daisy Duck", replacedContact));
    }
    contacts.forEach((k, v) -> System.out.println("key=" + k + " : " + "value=" + v));
    System.out.println("----------------------------------");

    success = contacts.remove("Daisy Duck", daisy);
    if (success) {
      System.out.println("Successfully removed element");
    } else {
      System.out.printf("Did not match on both key: %s and value: %s %n".formatted("Daisy Duck", replacedContact));
    }
    contacts.forEach((k, v) -> System.out.println("key=" + k + " : " + "value=" + v));
    System.out.println("----------------------------------");

    // More Map methods
    Map<String, Contact> contacts2 = new HashMap<>();
    ContactData.getData("phone").forEach(c -> contacts2.put(c.getName(), c));
    ContactData.getData("email").forEach(c -> contacts2.put(c.getName(), c));

    Set<String> keysView = contacts2.keySet();
    System.out.println(keysView);
    System.out.println("----------------------------------");

    Set<String> copyOfKeys = new TreeSet<>(contacts2.keySet());
    System.out.println(copyOfKeys);
    System.out.println("----------------------------------");

    if (contacts2.containsKey("Linus Van Pelt")) {
      System.out.println("Linus Van Pelt is in the map");
    }
    System.out.println("----------------------------------");

    keysView.remove("Daffy Duck");
    System.out.println(keysView);
    contacts2.forEach((k, v) -> System.out.println(v));
    System.out.println("----------------------------------");

    copyOfKeys.remove("Linus Van Pelt");
    System.out.println(copyOfKeys);
    contacts2.forEach((k, v) -> System.out.println(v));
    System.out.println("----------------------------------");

    keysView.retainAll(List.of("Linus Van Pelt", "Charlie Brown", "Robin Hood", "Mickey Mouse"));
    System.out.println(keysView);
    contacts2.forEach((k, v) -> System.out.println(v));
    System.out.println("----------------------------------");

    keysView.clear();
    System.out.println(contacts2);
    System.out.println("----------------------------------");

    ContactData.getData("phone").forEach(c -> contacts2.put(c.getName(), c));
    ContactData.getData("email").forEach(c -> contacts2.put(c.getName(), c));
    System.out.println(keysView);
    System.out.println("----------------------------------");
    
    var values = contacts2.values();
    values.forEach(System.out::println);
    System.out.println("----------------------------------");

    values.retainAll(ContactData.getData("email"));
    System.out.println(keysView);
    contacts2.forEach((k, v) -> System.out.println(v));
    System.out.println("----------------------------------");

    List<Contact> list = new ArrayList<>(values);
    list.sort(Comparator.comparing(Contact::getNameLastFirst));
    list.forEach(c -> System.out.println(c.getNameLastFirst() + ": " + c));
    System.out.println("----------------------------------");

    Contact first = list.get(0);
    contacts2.put(first.getNameLastFirst(), first);
    values.forEach(System.out::println);
    keysView.forEach(System.out::println);
    System.out.println("----------------------------------");

    HashSet<Contact> set = new HashSet<>(values);
    set.forEach(System.out::println);
    if (set.size() < contacts2.keySet().size()) {
      System.out.println("Duplicate Values are in my Map");
    }
    System.out.println("----------------------------------");

    var nodeSet = contacts2.entrySet();
    for (var node : nodeSet) {
      System.out.println(nodeSet.getClass().getName());
      if (!node.getKey().equals(node.getValue().getName())) {
        System.out.println(node.getClass().getName());
        System.out.println("Key doesn't match name: " + node.getKey() + ": " + node.getValue());
      }
    }
    System.out.println("----------------------------------");
  }
}