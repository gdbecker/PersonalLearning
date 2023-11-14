public class FirstLastDigitSum {
    public static int sumFirstAndLastDigit(int number) {
        if (number < 0) {
            return -1;
        }
        
        String num = String.valueOf(number);
        int a = (int)num.charAt(0) - '0';
        int b = (int)num.charAt(num.length() - 1) - '0';
        
        return a + b;
    }
}