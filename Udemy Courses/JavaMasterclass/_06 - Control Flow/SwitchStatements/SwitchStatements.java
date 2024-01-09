public class SwitchStatements {

    public static String getQuarter(String month) {
        //Enhanced switch statement with JDK 17
        return switch (month) {
            case "JAN", "FEB", "MAR" -> "First";
            case "APR", "MAY", "JUN" -> "Second";
            case "JUL", "AUG", "SEP" -> "Third";
            case "OCT", "NOV", "DEC" -> "Fourth";
            default -> {
                yield month + " is BAD INPUT";
            }
        };
    }

    public static void main(String[] args) {
        //
        // Control flow: switch
        int switchValue = 2;

        switch(switchValue) {
            case 1:
                System.out.println("Value was 1");
                break;
            case 2:
                System.out.println("Value was 2");
                break;
            default:
                System.out.println("Value was not 1 or 2.");
                break;
        }

        System.out.println(getQuarter("MAR"));

    }
}