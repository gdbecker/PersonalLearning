public class MethodsOverloading {

    public static int calculateScore(String playerName, int score) {
        System.out.println("Player " + playerName + " has " + score + " points!");
        return score * 1000;
    }

    public static int calculateScore(int score) {
        System.out.println("Unnamed player has " + score + " points!");
        return score * 1000;
    }

    public static int calculateScore() {
        System.out.println("Unnamed player has no points");
        return 0;
    }

    public static void main(String[] args) {
        int newScore = calculateScore("Garrett", 700);
        System.out.println("New score is " + newScore);

        int newScore2 = calculateScore(50);
        System.out.println("New score is " + newScore2);

        int newScore3 = calculateScore();
        System.out.println("New score is " + newScore3);
    }

}
