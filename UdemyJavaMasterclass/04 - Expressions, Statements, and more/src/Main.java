public class Main {
    public static void main(String[] args) {
        //
        // Learning expressions in Java
        double kilometers = (100 * 1.609344);

        int highScore = 50;

        if (highScore > 25) {
            highScore = 1000 + highScore; //add bonus points
        }

        int health = 100;

        if ((health < 25) && (highScore > 1000)) {
            highScore = highScore - 1000;
        }

        System.out.println(highScore);

        //
        // Statements, whitespace and indentation
        int myVar = 0;

        myVar++;
        System.out.println(myVar);

        myVar--;
        System.out.println(myVar);

        System.out.println("This is "+
                "another " +
                "still another test");

        int anotherVar = 50; anotherVar--; anotherVar++; // this is allowed
        int                        testVar
                =
                50
                ; // this is also allowed but obvi not good

        if (myVar == 0) {
            System.out.println("It's now zero.");
        }

        //
        // Code blocks and if/else statements
        myVar ++;
        if (myVar == 0) {
            System.out.println("It's now zero.");
        } else if (myVar == 1) {
            System.out.println("It's now one.");
        } else {
            System.out.println("I dunno");
        }

        //
        // if/else challenge problem
        boolean gameOver = true;
        int score = 10000;
        int levelCompleted = 8;
        int bonus = 200;

        int finalScore = score;

        if (gameOver) {
            finalScore += (levelCompleted * bonus);
            System.out.println("Your final score was " + finalScore);
        } else if ((levelCompleted >= 5) && (score > 5000)) {
            System.out.println("You are at level " + levelCompleted);
        }


    }
}
