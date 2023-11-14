public class Challenge {
    public static void main(String[] args) {
        double x = 20.0;
        double y = 80.0;
        double z = (x + y) * 100;

        double remainder = z % 40.0;
        boolean hasRemainder = remainder != 0.0;

        if (hasRemainder) {
            System.out.println("got some remainder");
        }
    }
}
