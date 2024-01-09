import java.util.Random;

public class Student implements QueryItem, Comparable<Student> {
  private static int LAST_ID = 10_000;
  private int studentId;
  private String name;
  private String course;
  private int yearStarted;
  protected static Random random = new Random();
  protected static String[] firstNames = { "Anne", "Bill", "Cathy", "John", "Tim" };
  private static String[] courses = {
      "C++", "Java", "Python" };

  public Student() {
    this.studentId = LAST_ID++;
    int lastNameIndex = random.nextInt(65, 91);
    this.name = firstNames[random.nextInt(5)] + " " + (char) lastNameIndex;
    this.course = courses[random.nextInt(3)];
    this.yearStarted = random.nextInt(2018, 2023);
  }

  @Override // General Java object method
  public String toString() {
    return "%d %-15s %-15s %d".formatted(studentId, name, course, yearStarted);
  }

  public int getYearStarted() {
    return yearStarted;
  }

  @Override // QueryItem method
  public boolean matchFieldValue(String fieldName, String value) {
    String fName = fieldName.toUpperCase();
    return switch (fName) {
      case "NAME" -> name.equalsIgnoreCase(value);
      case "COURSE" -> course.equalsIgnoreCase(value);
      case "YEARSTARTED" -> yearStarted == (Integer.parseInt(value));
      default -> false;
    };
  }

  @Override // Comparable method
  public int compareTo(Student s) {
    return Integer.valueOf(this.studentId).compareTo(s.studentId);
  }
}