import java.util.Comparator;

public class StoreEmployee extends Employee {

  // Nested Class example
  public class StoreComparator<T extends StoreEmployee> implements Comparator<StoreEmployee> {

    @Override // Comparator method
    public int compare(StoreEmployee e1, StoreEmployee e2) {
      int result = e1.store.compareTo(e2.store);

      if (result == 0) {
        return new Employee.EmployeeComparator<>("yearStarted").compare(e1, e2);
      }

      return result;
    }
  }

  private String store;

  public StoreEmployee() {

  }

  public StoreEmployee(int employeeId, String name, int yearStarted, String store) {
    super(employeeId, name, yearStarted);
    this.store = store;
  }

  @Override // General Java object method
  public String toString() {
    return "%-8s%s".formatted(store, super.toString());
  }
}