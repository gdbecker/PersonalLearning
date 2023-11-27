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
    // Card game: WAR
    System.out.println("***** welcome to WAR *****");

    // Set up Scanner for reading user input: when to stop the game after gaining x Cards
    Scanner sc = new Scanner(System.in);
    System.out.println("\nInput number of cards your opponent needs to have for you to win (< 26):");
    int stopPoint = sc.nextInt();

    // Set up standard deck of cards
    List<Card> deck = Card.getStandardDeck();
    Collections.shuffle(deck);

    // Set up two players and deal
    List<Card> player1 = new ArrayList<>();
    List<Card> player2 = new ArrayList<>();
    for (Card c : deck) {
      if (player1.size() < 26) {
        player1.add(c);
      } else {
        player2.add(c);
      }
    }

    // Print starter player hands
    Card.printDeck(player1, "Player 1 starting hand", 2);
    Card.printDeck(player2, "Player 2 starting hand", 2);

    // Start game, and keep going until someone gets all of the cards
    List<Card> middlePile = new ArrayList<>();
    
    while (player1.size() > stopPoint && player2.size() > stopPoint) {
      // Play a round
      Card p1Card = player1.remove(0);
      Card p2Card = player2.remove(0);
      
      // Compare cards and shift as needed
      if (p1Card.getRank() > p2Card.getRank()) {
        player1.add(p1Card);
        player1.add(p2Card);
        player1.addAll(middlePile);
      } else if (p2Card.getRank() > p1Card.getRank()) {
        player2.add(p1Card);
        player2.add(p2Card);
        player2.addAll(middlePile);
      } else {
        middlePile.add(p1Card);
        middlePile.add(p2Card);
      }
    }

    // Declare winner!
    if (player1.size() > stopPoint) {
      Card.printDeck(player1, "PLAYER 1 WINS!", 4);
    } else if (player2.size() > stopPoint) {
      Card.printDeck(player2, "PLAYER 2 WINS!", 4);
    }
  }
}