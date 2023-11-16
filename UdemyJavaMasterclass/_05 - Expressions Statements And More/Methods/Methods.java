public class Methods {

    public static void calculateScore() {
        int startScore = 90;
        int bonus = 150;

        System.out.println(startScore * bonus);
    }

    public static int calculateScore2() {
        int startScore = 90;
        int bonus = 150;

        return startScore * bonus;
    }

    public static int calculateScore3(int startScore, int bonus) {
        return startScore * bonus;
    }

    public static void main(String[] args) {
        //
        // Methods in Java
        int start = 100;
        int b = 70;

        calculateScore();
        System.out.println(calculateScore2());
        System.out.println(calculateScore3(start, b));
        System.out.println(calculateScore3(900, 3));
    }

}
