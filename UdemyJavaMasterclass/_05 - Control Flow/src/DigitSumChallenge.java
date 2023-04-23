public class DigitSumChallenge {

    public static int sumDigits(int num) {
        if (num < 0) {
            return -1;
        }

        String numString = new String(String.valueOf(num));
        int sum = 0;

        for (int i = 0; i < numString.length(); i++) {
            sum += Character.getNumericValue(numString.charAt(i));
        }

        return sum;
    }

    public static void main(String[] args) {
        int test = 10001;
        System.out.println("Digit sum of " + test + " = " + sumDigits(test));
    }
}
