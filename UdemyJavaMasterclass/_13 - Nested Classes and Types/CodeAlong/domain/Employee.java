import java.util.Comparator;

public class Employee {

  public static class EmployeeComparator<T extends Employee> implements Comparator<Employee> {

    private String sortType;

    public EmployeeComparator() {
      this.sortType = "name";
    }

    public EmployeeComparator(String sortType) {
      this.sortType = sortType;
    }

    @Override // Comparator method
    public int compare(Employee e1, Employee e2) {
      if (sortType.equalsIgnoreCase("yearStarted")) {
        return e1.yearStarted - e2.yearStarted;
      } else {
        return e1.name.compareTo(e2.name);
      }
    }
  }
  
  private int employeeId;
  private String name;
  private int yearStarted;

  public Employee() {
    
  }

  public Employee(int employeeId, String name, int yearStarted) {
    this.employeeId = employeeId;
    this.name = name;
    this.yearStarted = yearStarted;
  }

  public String getName() {
    return name;
  }

  @Override
  public String toString() {
    return "%d %-8s %d".formatted(employeeId, name, yearStarted);
  }
}