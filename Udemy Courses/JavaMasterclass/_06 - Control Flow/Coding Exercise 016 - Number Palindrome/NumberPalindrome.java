public class NumberPalindrome {
    public static boolean isPalindrome(int number) {
        if (number < 0) {
            number = number * -1;
        }
        
        int number_copy = number;
        
        int reverse = 0;
        int lastDigit;
        
        while (number_copy > 0) {
            lastDigit = number_copy % 10;
            reverse = (reverse * 10) + lastDigit;
            number_copy = number_copy / 10;
        }
        
        return number == reverse;
        
    }
}