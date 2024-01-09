public class LastDigitChecker {
    public static boolean hasSameLastDigit(int a, int b, int c) {
        if (!isValid(a) || !isValid(b) || !isValid(c)) {
            return false;
        }
        
        String a_num = String.valueOf(a);
        String b_num = String.valueOf(b);
        String c_num = String.valueOf(c);
        
        return a_num.charAt(a_num.length() - 1) == b_num.charAt(b_num.length() - 1) || a_num.charAt(a_num.length() - 1) == c_num.charAt(c_num.length() - 1) || c_num.charAt(c_num.length() - 1) == b_num.charAt(b_num.length() - 1);
    }
    
    public static boolean isValid(int x) {
        return x >= 10 && x <= 1000;
    }
}