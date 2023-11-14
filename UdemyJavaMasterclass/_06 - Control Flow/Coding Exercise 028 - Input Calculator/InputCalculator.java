import java.util.Scanner;

public class InputCalculator {
    public static void inputThenPrintSumAndAverage() {
        Scanner scanner = new Scanner(System.in);
        int sum = 0;
        int count = 0;
        long avg = 0;

        boolean valid = true;
        do {
            String numString = scanner.nextLine();

            try {
                int num = Integer.parseInt(numString);
                sum += num;
                count += 1;
                valid = true;
            } catch (NumberFormatException e) {
                valid = false;
            };
        } while (valid);
        
        avg = Math.round((double)sum / count);

        System.out.println("SUM = " + sum + " AVG = " + avg);
    }
}