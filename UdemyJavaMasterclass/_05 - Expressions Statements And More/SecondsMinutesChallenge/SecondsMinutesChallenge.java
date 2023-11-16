public class SecondsMinutesChallenge {

    public static String getDurationSeconds(int seconds) {
        boolean validSeconds = seconds >= 0;

        if (!validSeconds) {
            System.out.println("Seconds: " + seconds);
            return "Bad input!";
        } else {
            int secondsLeftover = seconds % 60;
            int numMinutes = (seconds - secondsLeftover) / 60;
            return getDurationSeconds(numMinutes, secondsLeftover);
        }
    }

    public static String getDurationSeconds(int minutes, int seconds) {
        boolean validSeconds = seconds >= 0 && seconds <= 59;
        boolean validMinutes = minutes >= 0;

        if (!validMinutes || !validSeconds) {
            System.out.println("Minutes: " + minutes + ", Seconds: " + seconds);
            return "Bad input!";
        } else {
            int minutesLeftover = minutes % 60;
            int numHours = (minutes - minutesLeftover) / 60;
            return "" + numHours + "h " + minutesLeftover + "m " + seconds + "s";
        }
    }

    public static void main(String[] args) {
        System.out.println(getDurationSeconds(3600));
        System.out.println(getDurationSeconds(3945));
    }
}
