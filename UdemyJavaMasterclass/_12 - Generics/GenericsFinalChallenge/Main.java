import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;

class Main {
  public static void main(String[] args) {
    int studentCount = 10;

    List<Student> students = new ArrayList<>();
    for (int i = 0; i < studentCount; i++) {
      students.add(new Student());
    }
    students.add(new LPAStudent());
    // printList(students);
    printMoreLists(students);

    List<LPAStudent> lpaStudents = new ArrayList<>();
    for (int i = 0; i < studentCount; i++) {
      lpaStudents.add(new LPAStudent());
    }
    // printList(lpaStudents);
    printMoreLists(lpaStudents);

    testList(new ArrayList<String>(List.of("Able", "Barry", "Charlie")));
    testList(new ArrayList<Integer>(List.of(1, 2, 3, 4, 5)));

    var queryList = new QueryList<>(lpaStudents);
    var matches = queryList.getMatches("Course", "Python");
    printMoreLists(matches);

    var students2021 = QueryList.getMatches(students, "YearStarted", "2021");
    printMoreLists(students2021);

    // QueryList<Employee> employeeList = new QueryList<>();

    // Generics section challenge
    QueryList<LPAStudent> lpaList = new QueryList<>();
    for (int i = 0; i < 25; i++) {
        lpaList.add(new LPAStudent());
    }

    System.out.println("Ordered");
    lpaList.sort(Comparator.naturalOrder());
    printList(lpaList);

    System.out.println("Matches");
    matches = lpaList.getMatches("PercentComplete", "50").getMatches("Course", "Python");
    matches.sort(new LPAStudentComparator());
    printList(matches);

    System.out.println("Ordered");
    matches.sort(null);
    printList(matches);
  }

  public static void printList(List<?> students) {
    for (var s : students) {
      System.out.println(s);
    }
  }

  public static void printMoreLists(List<? extends Student> students) {
    for (var s : students) {
      System.out.println(s.getYearStarted() + ": " + s);
    }
    System.out.println();
  }

  public static void testList(List<?> lst) {
    for (var element : lst) {
      if (element instanceof String s) {
        System.out.println("String: " + s.toUpperCase());
      } else if (element instanceof Integer i) {
        System.out.println("Integer: " + i.floatValue());
      }
    }
  }

  // public static void testList(List<String> lst) {
  // for (var element : lst) {
  // System.out.println("String: " + element.toUpperCase());
  // }
  // }

  // public static void testList(List<Integer> lst) {
  // for (var element : lst) {
  // System.out.println("Integer: " + element.floatValue());
  // }
  // }

  // public static <T extends Student> void printList(List<T> students) {
  // for (var s : students) {
  // System.out.println(s.getYearStarted() + ": " + s);
  // }
  // System.out.println();
  // }
}