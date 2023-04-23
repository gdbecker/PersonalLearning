public class WhileChallenge {

    public static boolean isEven(int num) {
        if (num % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }

    public static void main(String[] args) {
        int j = 5;
        System.out.println("Even numbers:");

        while (j <= 20) {
            if (isEven(j)) {
                System.out.print(j + "_");
            }
            j += 1;
        }
    }
}
