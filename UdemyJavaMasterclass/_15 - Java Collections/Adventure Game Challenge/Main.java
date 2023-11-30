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
    // Adventure Game challenge

    String myLocations = """
        lake,at the edge of Lake Tim,E:ocean,W:forest,S:well house,N:cave
        ocean,on Tim's beach before an angry sea,W:lake
        cave,at the mouth of Tim's bat cave,E:ocean,W:forest,S:lake
        """;

    AdventureGame game = new AdventureGame(myLocations);
    game.play("road");

    Scanner scanner = new Scanner(System.in);

    while (true) {
      String direction = scanner.nextLine().trim().toUpperCase().substring(0, 1);
      if (direction.equals("Q"))
        break;
      game.move(direction);
    }
  }
}