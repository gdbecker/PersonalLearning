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
    int rows = 10;
    int totalSeats = 100;
    Theatre rodgersNYC = new Theatre("Richard Rodgers", rows, totalSeats);
    rodgersNYC.printSeatMap();

    bookSeat(rodgersNYC, 'A', 3);
    rodgersNYC.printSeatMap();
    bookSeat(rodgersNYC, 'A', 3);
    bookSeat(rodgersNYC, 'C', 1);
    rodgersNYC.printSeatMap();
    bookSeat(rodgersNYC, 'M', 100);

    bookSeats(rodgersNYC, 4, 'B', 3, 10);
    bookSeats(rodgersNYC, 6, 'B', 'C', 3, 10);
  }

  private static void bookSeat(Theatre theatre, char row, int seatNo) {
    String seat = theatre.reserveSeat(row, seatNo);
    if (seat != null) {
      System.out.println("Congratulations! Your reserved seat is " + seat);
    } else {
      System.out.println("Sorry! Unable to reserve " + row + seatNo);
    }
  }

  private static void bookSeats(Theatre theatre, int tickets, char minRow, int minSeat, int maxSeat) {
    bookSeats(theatre, tickets, minRow, minRow, minSeat, maxSeat);
  }

  private static void bookSeats(Theatre theatre, int tickets, char minRow, char maxRow, int minSeat, int maxSeat) {
    var seats = theatre.reserveSeats(tickets, minRow, maxRow, minSeat, maxSeat);
    if (seats != null) {
      System.out.println("Congratulations! Your reserved seats are " + seats);
      theatre.printSeatMap();
    } else {
      System.out.println("Sorry! No matching continous seats in rows: " + minRow + " - " + maxRow);
    }
    
  }


}