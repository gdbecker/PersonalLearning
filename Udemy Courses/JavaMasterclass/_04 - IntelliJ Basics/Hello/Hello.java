public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello!!");

        int a = 78;
        int b = 50;

        if (b < a) {
            System.out.println("TRUE");
        } else {
            System.out.println("FALSE");
        }

        int topScore = 100;
        if (topScore == 100 && a > 50) {
            System.out.println("You got the highest score!!");
        }

        if (topScore < 100 || a > 50) {
            System.out.println("the OR logical operator.");
        }

        String carMake = "Ford";
        boolean isAwesome = (carMake == "Ford") ? true : false;

        if (isAwesome) {
            System.out.println("This car is awesome");
        }
    }
}
