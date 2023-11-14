public class SharedDigit {
    public static boolean hasSharedDigit(int a, int b) {
        if (a < 10 || a > 99 || b < 10 || b > 99) {
            return false;
        }
        
        String num_a = String.valueOf(a);
        String num_b = String.valueOf(b);
        
        for (int x = 0; x < num_a.length(); x++) {
            for (int y = 0; y < num_b.length(); y++) {
                int i = (int)num_a.charAt(x) - '0';
                int j = (int)num_b.charAt(y) - '0';
                if (i == j) {
                    return true;
                }
            }
        }
        
        return false;
    }
}