import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Random;
import java.util.Collection;
import java.util.Collections;
import java.util.TreeSet;
import java.util.HashSet;
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
    // Using various Collections methods
    Card[] cardArray = new Card[13];
    Card aceOfHearts = Card.getFaceCard(Card.Suit.HEART, 'A');
    Arrays.fill(cardArray, aceOfHearts);
    Card.printDeck(Arrays.asList(cardArray), "Aces of Hearts", 1);

    List<Card> cards = new ArrayList<>(52);
    Collections.fill(cards, aceOfHearts);
    System.out.println(cards);
    System.out.println("cards.size() = " + cards.size()); 

    List<Card> acesOfHearts = Collections.nCopies(13, aceOfHearts);
    Card.printDeck(acesOfHearts, "Aces of Hearts", 1);
 
    Card kingOfClubs = Card.getFaceCard(Card.Suit.CLUB, 'K');
    List<Card> kingsOfClubs = Collections.nCopies(13, kingOfClubs);
    Card.printDeck(kingsOfClubs, "Kings of Clubs", 1);

    Collections.addAll(cards, cardArray);
    Collections.addAll(cards, cardArray);
    Card.printDeck(cards, "Card Collection with Aces added", 2);

    Collections.copy(cards, kingsOfClubs);
    Card.printDeck(cards, "Card Collection with Kings copied", 2);

    cards = List.copyOf(kingsOfClubs);
    Card.printDeck(cards, "List Copy of Kings", 1);

    // Test that setting up Card was successful, make standard deck
    List<Card> deck = Card.getStandardDeck();
    Card.printDeck(deck);

    // More Collections methods
    Collections.shuffle(deck);
    Card.printDeck(deck, "Suffled Deck", 4);

    Collections.reverse(deck);
    Card.printDeck(deck, "Reversed Deck of Cards", 4);

    var sortingAlgorithm = Comparator.comparing(Card::rank).thenComparing(Card::suit);
    Collections.sort(deck, sortingAlgorithm);
    Card.printDeck(deck, "Standard Deck sorted by rank, suit", 13);

    Collections.reverse(deck);
    Card.printDeck(deck, "Sorted by rank, suit reversed", 13);

    List<Card> kings = new ArrayList<>(deck.subList(4, 8));
    Card.printDeck(kings, "Kings in Deck", 1);

    List<Card> tens = new ArrayList<>(deck.subList(16, 20));
    Card.printDeck(tens, "Tens in Deck", 1);

    int subListIndex = Collections.indexOfSubList(deck, tens);
    System.out.println("sublist index for tens = " + subListIndex);
    System.out.println("Contains = " + deck.containsAll(tens));

    boolean disjoint = Collections.disjoint(deck, tens);
    System.out.println("Deck and Tens have nothing in common? disjoint = " + disjoint);

    boolean disjoint2 = Collections.disjoint(kings, tens);
    System.out.println("Kings and Tens have nothing in common? disjoint = " + disjoint2);

    deck.sort(sortingAlgorithm);
    Card tenOfHearts = Card.getNumericCard(Card.Suit.HEART, 10);
    int foundIndex = Collections.binarySearch(deck, tenOfHearts, sortingAlgorithm);
    System.out.println("\nFound Ten of Hearts at index (using Collections.binarySearch()) " + foundIndex);
    System.out.println("Found Ten of Hearts at index (using deck.indexOf(tenOfHearts)) " + deck.indexOf(tenOfHearts));
    System.out.println(deck.get(foundIndex));

    Card tenOfClubs = Card.getNumericCard(Card.Suit.CLUB, 10);
    Collections.replaceAll(deck, tenOfClubs, tenOfHearts);
    Card.printDeck(deck.subList(32, 36), "Tens row: replace Clubs with Hearts", 1);

    Collections.replaceAll(deck, tenOfHearts, tenOfClubs);
    Card.printDeck(deck.subList(32, 36), "Tens row: replace Hearts with Clubs", 1);

    if (Collections.replaceAll(deck, tenOfHearts, tenOfClubs)) {
      System.out.println("Tens of hearts replaced with tens of clubs");
    } else {
      System.out.println("No tens of hearts found in the list");
    }

    System.out.println("Ten of Clubs Cards = " + Collections.frequency(deck, tenOfClubs));

    System.out.println("Best Card = " + Collections.max(deck, sortingAlgorithm));
    System.out.println("Worst Card = " + Collections.min(deck, sortingAlgorithm));

    var sortBySuit = Comparator.comparing(Card::suit).thenComparing(Card::rank);
    deck.sort(sortBySuit);
    Card.printDeck(deck, "Sorted by Suit, Rank", 4);

    List<Card> copied = new ArrayList<>(deck.subList(0, 13));
    Collections.rotate(copied, 2);
    System.out.println("UnRotated: " + deck.subList(0, 13));
    System.out.println("Rotated " + 2 + ": " + copied);

    copied = new ArrayList<>(deck.subList(0, 13));
    Collections.rotate(copied, -2);
    System.out.println("UnRotated: " + deck.subList(0, 13));
    System.out.println("Rotated " + -2 + ": " + copied);

    copied = new ArrayList<>(deck.subList(0, 13));
    for (int i = 0; i < copied.size() / 2; i++) {
      Collections.swap(copied, i, copied.size() - 1 - i);
    }
    System.out.println("Manual reverse: " + copied);

    copied = new ArrayList<>(deck.subList(0, 13));
    Collections.reverse(copied);
    System.out.println("Using reverse: " + copied);
  }
}