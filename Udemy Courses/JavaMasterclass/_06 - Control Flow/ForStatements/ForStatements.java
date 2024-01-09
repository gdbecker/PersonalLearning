public class ForStatements {

    public static void main(String[] args) {

        for (int counter = 1; counter <= 5; counter++) {
            System.out.println(counter);
        }

        for (double r = 7.5; r <= 10.0; r += 0.25) {
            double interest = calculateInterest(100, r);
            System.out.println("100 at " + r + "% interst is $" + interest);
        }
    }

    public static double calculateInterest(double amount, double rate) {
        return (amount * (rate / 100));
    }
}
