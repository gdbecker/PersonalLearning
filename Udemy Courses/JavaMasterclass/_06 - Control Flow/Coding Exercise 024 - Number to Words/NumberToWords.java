public class NumberToWords {
    public static void numberToWords(int number) {
        if (number < 0) {
            System.out.println("Invalid Value");
        } else {
            String num_string = String.valueOf(number);
            
            for (int x = 0; x < num_string.length(); x++) {
                switch (num_string.charAt(x)) {
                    case '0' -> System.out.print("Zero");
                    case '1' -> System.out.print("One");
                    case '2' -> System.out.print("Two");
                    case '3' -> System.out.print("Three");
                    case '4' -> System.out.print("Four");
                    case '5' -> System.out.print("Five");
                    case '6' -> System.out.print("Six");
                    case '7' -> System.out.print("Seven");
                    case '8' -> System.out.print("Eight");
                    case '9' -> System.out.print("Nine");
                    default -> System.out.print(" ");
                };
                System.out.print(" ");
            }
        }
        
    }
    
    public static int reverse(int number) {
        if (number >= -9 && number <= 9) {
            return number;
        }
        
        boolean isNegative = false;
        if (number <= -10) {
            isNegative = true;
            number *= -1;
        } 
        
        int number_copy = number;
        
        int rev = 0;
        int lastDigit;
        
        while (number_copy > 0) {
            lastDigit = number_copy % 10;
            rev = (rev * 10) + lastDigit;
            number_copy = number_copy / 10;
        }
        
        if (isNegative) {
            return rev *= -1;
        } else {
            return rev;
        }
    }
    
    public static int getDigitCount(int number) {
        if (number < 0) {
            return -1;
        }
        return String.valueOf(number).length();
    }
}