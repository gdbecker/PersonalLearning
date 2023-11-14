import java.util.Scanner;

class ReadingInput {
  public static void main(String[] args) {
      int currentYear = 2022;
      int userInput = Integer.parseInt("1985");

      System.out.println("Age is " + (currentYear - userInput));

      // System.out.println(getInputFromConsole(currentYear));
      System.out.println(getInputFromScanner(currentYear));
  }

  public static String getInputFromConsole(int currentYear) {
      String name = System.console().readLine("Hi, what is your name? ");
      System.out.println("Hi " + name + ", thanks for taking this course!");

      String birthYear = System.console().readLine("What year were you born? ");
      int age = currentYear - Integer.parseInt(birthYear);

      return "You are " + age + " years old.";
  }

  public static String getInputFromScanner(int currentYear) {
      Scanner scanner = new Scanner(System.in);

      System.out.println("Hi, what is your name? ");
      String name = scanner.nextLine();
      System.out.println("Hi " + name + ", thanks for taking this course!");

      System.out.println("What year were you born? ");
      String birthYear = scanner.nextLine();
      int age = currentYear - Integer.parseInt(birthYear);

      return "You are " + age + " years old.";
  }
}