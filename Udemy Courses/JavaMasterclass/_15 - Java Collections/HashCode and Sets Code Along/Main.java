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
    // Learning Hash code and Sets
    String aText = "Hello";
    String bText = "Hello";
    String cText = String.join("l", "He", "lo");
    String dText = "He".concat("llo");
    String eText = "hello";

    List<String> hellos = Arrays.asList(aText, bText, cText, dText, eText);
    hellos.forEach(s -> System.out.println(s + ": " + s.hashCode()));

    Set<String> helloSet = new HashSet<>(hellos);
    System.out.println("\nhelloSet = " + helloSet);
    System.out.println("# of elements = " + helloSet.size());

    System.out.println();
    PlayingCard aceHearts = new PlayingCard("Hearts", "Ace");
    PlayingCard kingClubs = new PlayingCard("Clubs", "King");
    PlayingCard queenSpade = new PlayingCard("Spades", "Queen");
    List<PlayingCard> cards = Arrays.asList(aceHearts, kingClubs, queenSpade);
    cards.forEach(c -> System.out.println(c + ": " + c.hashCode()));

    Set<PlayingCard> deck = new HashSet<>();
    for (PlayingCard c : cards) {
      if (!deck.add(c)) {
        System.out.println("Duplicate card: " + c);
      }
    }
    System.out.println("\ndeck = " + deck);
    
  }
}