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
    // Set operations challenge
    // Test the code initially
    Set<Task> tasks = TaskData.getTasks("all");
    sortAndPrint("All Tasks", tasks);

    Comparator<Task> sortByPriority = Comparator.comparing(Task::getPriority);

    Set<Task> annsTasks = TaskData.getTasks("Ann");
    Set<Task> bobsTasks = TaskData.getTasks("Bob");
    Set<Task> carolsTasks = TaskData.getTasks("Carol");
    List<Set<Task>> sets = List.of(annsTasks, bobsTasks, carolsTasks);

    Set<Task> assignedTasks = getUnion(sets);
    sortAndPrint("Assigned Tasks", assignedTasks);

    Set<Task> everyTask = getUnion(List.of(tasks, assignedTasks));
    sortAndPrint("The True All Tasks", everyTask);

    Set<Task> missingTasks = getDifference(everyTask, tasks);
    sortAndPrint("Missing Tasks", missingTasks);

    Set<Task> unassignedTasks = getDifference(tasks, assignedTasks);
    sortAndPrint("Unassigned Tasks", unassignedTasks);

    Set<Task> overlap = getUnion(List.of(
      getIntersect(annsTasks, bobsTasks),
      getIntersect(annsTasks, carolsTasks),
      getIntersect(bobsTasks, carolsTasks)
    ));
    sortAndPrint("Assigned to Multiples", overlap);

    List<Task> overlapping = new ArrayList<>();
    for (Set<Task> set : sets) {
      Set<Task> dupes = getIntersect(set, overlap);
      overlapping.addAll(dupes);
    }

    Comparator<Task> priorityNatural = sortByPriority.thenComparing(Comparator.naturalOrder());
    sortAndPrint("Overlapping", overlapping, priorityNatural);
    
  }

  private static void sortAndPrint(String header, Collection<Task> collection) {
    sortAndPrint(header, collection, null);
  }

  private static void sortAndPrint(String header, Collection<Task> collection, Comparator<Task> sorter) {
    String lineSeparator = "_".repeat(90);
    System.out.println(lineSeparator);
    System.out.println(header);
    System.out.println(lineSeparator);

    List<Task> list = new ArrayList<>(collection);
    list.sort(sorter);
    list.forEach(System.out::println);
  }

  private static Set<Task> getUnion(List<Set<Task>> sets) {
    Set<Task> union = new HashSet<>();
    for (var taskSet : sets) {
      union.addAll(taskSet);
    }
    return union;
  }

  private static Set<Task> getIntersect(Set<Task> a, Set<Task> b) {
    Set<Task> intersect = new HashSet<>(a);
    intersect.retainAll(b);
    return intersect;
  }

  private static Set<Task> getDifference(Set<Task> a, Set<Task> b) {
    Set<Task> result = new HashSet<>(a);
    result.removeAll(b);
    return result;
  }

}