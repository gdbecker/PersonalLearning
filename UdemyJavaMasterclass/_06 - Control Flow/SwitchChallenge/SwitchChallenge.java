public class SwitchChallenge {

    public static void main(String[] args) {
        char myChar = 'B';

        switch (myChar) {
            case 'A':
                System.out.println(myChar + " is for 'Able'");
                break;
            case 'B':
                System.out.println(myChar + " is for 'Baker'");
                break;
            case 'C':
                System.out.println(myChar + " is for 'Charlie'");
                break;
            case 'D':
                System.out.println(myChar + " is for 'Dog'");
                break;
            case 'E':
                System.out.println(myChar + " is for 'Easy'");
                break;
            default:
                System.out.println("Invalid char, not found");
                break;
        }

        int dayOfWeek = 5;
        switch (dayOfWeek) {
            case 0 -> System.out.println(dayOfWeek + " is Sunday.");
            case 1 -> System.out.println(dayOfWeek + " is Monday. And a weekday.");
            case 2 -> System.out.println(dayOfWeek + " is Tuesday. And a weekday.");
            case 3 -> System.out.println(dayOfWeek + " is Wednesday. And a weekday.");
            case 4 -> System.out.println(dayOfWeek + " is Thursday. And a weekday.");
            case 5 -> System.out.println(dayOfWeek + " is Friday. And a weekday.");
            case 6 -> System.out.println(dayOfWeek + " is Saturday.");
            default -> {
                System.out.println(dayOfWeek + " is invalid!");
            }
        }
    }
}
