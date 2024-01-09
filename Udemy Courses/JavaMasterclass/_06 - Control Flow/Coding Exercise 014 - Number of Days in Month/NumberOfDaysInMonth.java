public class NumberOfDaysInMonth {
    public static boolean isLeapYear(int year) {
        if (year < 1 || year > 9999) {
            return false;
        }
        
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                if (year % 400 == 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        } else {
            return false;
        }
    }
    
    public static int getDaysInMonth(int month, int year) {
        if (month < 1 || month > 12 || year < 1 || year > 9999) {
            return -1;
        } else {
            int days = 0;
            switch (month) {
                case 1, 3, 5, 7, 8, 10, 12 -> days = 31;
                case 4, 6, 9, 11 -> days = 30;
                case 2 -> {
                    if (isLeapYear(year)) {
                        days = 29;
                    } else {
                        days = 28;
                    }
                }
                default -> days = -1;
            };
            return days;
        }
    }
}