import java.util.Scanner;

class UserInputChallenge {
  public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      int sum = 0;

      for (int i = 1; i <= 5; i++) {
          boolean valid = false;
          do {
              System.out.println("Enter #" + i);
              String numString = scanner.nextLine();

              try {
                  int num = Integer.parseInt(numString);
                  sum += num;
                  valid = true;
              } catch (NumberFormatException e) {
                  // keep looping
              }
          } while (!valid);
      }

      System.out.println("Total sum is " + sum);
  }
}