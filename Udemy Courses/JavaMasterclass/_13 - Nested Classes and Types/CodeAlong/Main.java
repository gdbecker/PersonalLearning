import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.time.LocalDate;

class Main {
  public static void main(String[] args) {
    List<Employee> employees = new ArrayList<>(List.of(
      new Employee(10001, "Ralph", 2015),
      new Employee(10005, "Carole", 2021),
      new Employee(10022, "Jane", 2013),
      new Employee(13151, "Laura", 2020),
      new Employee(10050, "Jim", 2018)
    ));

    // var comparator = new EmployeeComparator<>();
    // employees.sort(comparator);

    employees.sort(new Employee.EmployeeComparator<>("yearStarted").reversed());
    printList(employees);

    System.out.println("Store Members");
    List<StoreEmployee> storeEmployees = new ArrayList<>(List.of(
      new StoreEmployee(10015, "Mags", 2019, "Target"),
      new StoreEmployee(10515, "Joe", 2021, "Walmart"),
      new StoreEmployee(10105, "Tim", 2020, "Macys"),
      new StoreEmployee(10215, "Marty", 2018, "Walmart"),
      new StoreEmployee(10322, "Bud", 2016, "Target")
    ));
    var comparator = new StoreEmployee().new StoreComparator<>();
    storeEmployees.sort(comparator);
    printList(storeEmployees);

    Meal regularMeal = new Meal();
    System.out.println(regularMeal);

    Meal USRegularMeal = new Meal(0.68);
    System.out.println(USRegularMeal);

    // Bill's Burgers with inner classes challenge
    Meal newMeal = new Meal();
    newMeal.addToppings("cheese", "lettuce", "pickle");
    System.out.println(newMeal);

    // Learning local classes inside a method
    System.out.println("With Pig Latin Names");
    addPigLatinName(storeEmployees);

    // Learning anonymous classes
    var c0 = new EmployeeComparator<StoreEmployee>();
    var c1 = new Employee.EmployeeComparator<>();
    var c2 = new StoreEmployee().new StoreComparator<StoreEmployee>();

    // another local class example
    class NameSort<T> implements Comparator<StoreEmployee> {
      @Override // Comparator method
      public int compare(StoreEmployee e1, StoreEmployee e2) {
        return e1.getName().compareTo(e2.getName());
      }
    }

    var c3 = new NameSort<StoreEmployee>();

    // Anonymous Class example
    var c4 = new Comparator<StoreEmployee>() {
      @Override // Comparator method
      public int compare(StoreEmployee e1, StoreEmployee e2) {
        return e1.getName().compareTo(e2.getName());
      }
    };

    sortIt(storeEmployees, c0);
    sortIt(storeEmployees, c1);
    sortIt(storeEmployees, c2);
    sortIt(storeEmployees, c3);
    sortIt(storeEmployees, c4);
    sortIt(storeEmployees, new Comparator<StoreEmployee>() {
            @Override // Comparator method
            public int compare(StoreEmployee e1, StoreEmployee e2) {
              return e1.getName().compareTo(e2.getName());
            }
          });
    sortIt(storeEmployees, (e1, e2) -> e1.getName().compareTo(e2.getName()));

    // Local and Anonymous Classes challenge
    ArrayList<EmployeeChallenge> ec = new ArrayList<>(List.of(
      new EmployeeChallenge("Maggie", "Lawson", "01/26/2014"),
      new EmployeeChallenge("Michael", "Fassbender", "05/01/2017"),
      new EmployeeChallenge("Brie", "Larsen", "11/10/2017"),
      new EmployeeChallenge("Rachel", "Zegler", "04/19/2020"),
      new EmployeeChallenge("Tom", "Blyth", "07/15/2010")
    ));

    System.out.println("Sorted by full name:");
    printOrderedList(ec, "fullname");

    System.out.println("Sorted by years worked:");
    printOrderedList(ec, "yearsworked");

    
  }

  
  public static void printList(List<?> list) {
    for (var item : list) {
      System.out.println(item);
    }
  }

  // Local Class inside a method
  public static void addPigLatinName(List<? extends StoreEmployee> list) {
    class DecoratedEmployee extends StoreEmployee implements Comparable<DecoratedEmployee> {
      private String pigLatinName;
      private Employee originalInstance;

      public DecoratedEmployee(String pigLatinName, Employee originalInstance) {
        this.pigLatinName = pigLatinName;
        this.originalInstance = originalInstance;
      }

      @Override // General Java object method
      public String toString() {
        return originalInstance.toString() + " " + pigLatinName;
      }

      @Override // Comparable method
      public int compareTo(DecoratedEmployee e) {
        return pigLatinName.compareTo(e.pigLatinName);
      }
    }

    List<DecoratedEmployee> newList = new ArrayList<>(list.size());
    for (var e : list) {
      String name = e.getName();
      String pigLatin = name.substring(1) + name.charAt(0) + "ay";
      newList.add(new DecoratedEmployee(pigLatin, e));
    }

    newList.sort(null);
    
    for (var d : newList) {
      System.out.println(d);
    }
  }

  public static <T> void sortIt(List<T> list, Comparator<? super T> comparator) {
    System.out.println("Sorting with Comparator: " + comparator.toString());
    list.sort(comparator);
    for (var e : list) {
      System.out.println(e);
    }
  }

  // Local and Anonymous Classes challenge
  public static void printOrderedList(List<? extends EmployeeChallenge> eList, String sortField) {
    class myEmployee implements Comparable<myEmployee> {
      String fullName;
      int yearsWorked;
      EmployeeChallenge originalInstance;

      int currentYear = LocalDate.now().getYear();

      public myEmployee(EmployeeChallenge originalInstance) {
        this.fullName = originalInstance.firstName() + " " + originalInstance.lastName();
        this.yearsWorked = currentYear - Integer.parseInt(originalInstance.hireDate().substring(originalInstance.hireDate().length() - 4));
        this.originalInstance = originalInstance;
      }

      @Override // General Java object method
      public String toString() {
        return fullName + " worked for " + yearsWorked + " years";
      }
      
      @Override // Comparable method
      public int compareTo(myEmployee e) {
        if (sortField.equalsIgnoreCase("fullName")) {
          return fullName.compareTo(e.fullName);
        } else {
          return yearsWorked - e.yearsWorked;
        }
      }
    }

    var comparator = new Comparator<myEmployee>() {
      @Override // Comparator method
      public int compare(myEmployee e1, myEmployee e2) {
        if (sortField.equalsIgnoreCase("fullName")) {
          return e1.fullName.compareTo(e2.fullName);
        } else {
          return e1.yearsWorked - e2.yearsWorked;
        }
      }
    };

    List<myEmployee> newList = new ArrayList<>(eList.size());
    List<myEmployee> newList2 = new ArrayList<>(eList.size());
    for (var e : eList) {
      newList.add(new myEmployee(e));
      newList2.add(new myEmployee(e));
    }

    newList.sort(null);
    System.out.println("Compare using Comparator as another method:");
    for (var e : newList) {
      System.out.println(e);
    }

    System.out.println("Compare using Comparator as anonymous class:");
    newList2.sort(comparator);
    for (var e : newList2) {
      System.out.println(e);
    }
  }
}