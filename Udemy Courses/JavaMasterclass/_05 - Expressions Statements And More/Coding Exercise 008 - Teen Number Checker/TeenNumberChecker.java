public class TeenNumberChecker {
    public static boolean hasTeen(int a, int b, int c) {
        return isTeen(a) || isTeen(b) || isTeen(c);
    }
    
    public static boolean isTeen(int age) {
        return (age >= 13 && age <= 19);
    }
}