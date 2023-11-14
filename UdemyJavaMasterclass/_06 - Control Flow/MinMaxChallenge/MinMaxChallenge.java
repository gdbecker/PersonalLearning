import java.util.Scanner;

class MinMaxChallenge {
  public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);

      boolean gameOn = true;
      int max = 0;
      int min = 0;
      int inputCount = 0;

      do {
          System.out.println("Enter a number or another character to quit.");
          String numString = scanner.nextLine();

          try {
              int num = Integer.parseInt(numString);
              inputCount += 1;
              if (inputCount == 1) {
                  max = num;
                  min = num;
              } else if (num < min || num < max) {
                  min = num;
              } else if (num > max || num > min) {
                  max = num;
              }
          } catch (NumberFormatException e) {
              gameOn = false;
          }

      } while (gameOn);

      System.out.println("Max value entered: " + max);
      System.out.println("Min value entered: " + min);
  }
}