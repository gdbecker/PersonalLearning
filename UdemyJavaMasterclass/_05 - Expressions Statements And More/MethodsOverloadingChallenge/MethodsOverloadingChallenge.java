public class MethodsOverloadingChallenge {

    public static double convertToCentimeters(int inches) {
        return 2.54 * inches;
    }

    public static double convertToCentimeters(int feet, int inches) {
        return ((feet * 12.0) + inches) * 2.54;
    }

    public static void main(String[] args) {
        System.out.println(convertToCentimeters(68));
        System.out.println(convertToCentimeters(5, 8));
    }
}
