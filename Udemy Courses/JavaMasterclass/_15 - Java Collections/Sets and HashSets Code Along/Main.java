import java.util.Scanner;
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Random;
import java.util.Collection;
import java.util.Collections;
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
    List<Contact> emails = ContactData.getData("email");
    List<Contact> phones = ContactData.getData("phone");
    printData("Email List", emails);
    printData("Phone List", phones);

    // Learning Sets and HashSets
    Set<Contact> emailContacts = new HashSet<>(emails);
    Set<Contact> phoneContacts = new HashSet<>(phones);
    printData("Email List", emailContacts);
    printData("Phone List", phoneContacts);

    int index = emails.indexOf(new Contact("Robin Hood"));
    Contact robinHood = emails.get(index);
    robinHood.addEmail("Sherwood Forest");
    robinHood.addEmail("Sherwood Forest");
    robinHood.replaceEmailIfExists("RHood@sherwoodforest.com", "RHood@sherwoodforest.org");
    System.out.println(robinHood);

    // More Sets methods
    // Union (a symmetric operation)
    Set<Contact> unionAB = new HashSet<>();
    unionAB.addAll(emailContacts);
    unionAB.addAll(phoneContacts);
    printData("(A \u222A B) Union of Emails (A) with phones (B)", unionAB);

    // Intersect (a symmetric operation)
    Set<Contact> intersectAB = new HashSet<>(emailContacts);
    intersectAB.retainAll(phoneContacts);
    printData("(A \u2229 B) Intersect of emails (A) with phones (B)", intersectAB);

    Set<Contact> intersectBA = new HashSet<>(phoneContacts);
    intersectBA.retainAll(emailContacts);
    printData("(B \u2229 A) Intersect of phones (A) with emails (B)", intersectBA);

    // Minus (an asymetric operation)
    Set<Contact> AMinusB = new HashSet<>(emailContacts);
      AMinusB.removeAll(phoneContacts);
    printData("(A - B) emails (A) with phones (B)", AMinusB);

    Set<Contact> BMinusA = new HashSet<>(phoneContacts);
        BMinusA.removeAll(emailContacts);
    printData("(B - A) phones (B) with emails (A)", BMinusA);

    Set<Contact> symmetricDiff = new HashSet<>(AMinusB);
    symmetricDiff.addAll(BMinusA);
    printData("Symmetric Difference: phones and emails", symmetricDiff);

    Set<Contact> symmetricDiff2 = new HashSet<>(unionAB);
    symmetricDiff2.removeAll(intersectAB);
    printData("Symmetric Difference: phones and emails", symmetricDiff2);
  }

  public static void printData(String header, Collection<Contact> contacts) {
    System.out.println("-------------------------------------");
    System.out.println(header);
    System.out.println("-------------------------------------");
    contacts.forEach(System.out::println);
  }
}