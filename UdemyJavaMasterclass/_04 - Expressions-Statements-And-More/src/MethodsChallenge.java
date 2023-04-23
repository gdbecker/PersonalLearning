public class MethodsChallenge {

    public static void displayHighScorePosition(String name, int position) {
        System.out.println(name + " managed to get to position " + position + " on the high score list!");
    }

    public static int calculateHighScorePosition(int score) {
        int position = 0;

        if (score >= 1000) {
            position = 1;
        } else if (score >= 500) {
            position = 2;
        } else if (score >= 100) {
            position = 3;
        } else {
            position = 4;
        }

        return position;
    }

    public static boolean areEqualByThreeDecimalPlaces(double a, double b) {
        String aString = String.format("%.3f", a);
        String bString = String.format("%.3f", b);

        System.out.println(aString);
        System.out.println(bString);

        if (aString.equals(bString)) {
            return true;
        } else {
            return false;
        }
    }

    public static void main(String[] args) {
        displayHighScorePosition("Din", calculateHighScorePosition(1500));
        displayHighScorePosition("Cassian", calculateHighScorePosition(1000));
        displayHighScorePosition("Kylo", calculateHighScorePosition(500));
        displayHighScorePosition("Finn", calculateHighScorePosition(100));
        displayHighScorePosition("Obi-Wan", calculateHighScorePosition(25));
        System.out.println(areEqualByThreeDecimalPlaces(0.0, 0.0));
    }

}
