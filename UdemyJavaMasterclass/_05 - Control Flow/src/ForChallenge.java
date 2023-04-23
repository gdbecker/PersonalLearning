public class ForChallenge {

    public static boolean isPrime(int number) {
        if (number <= 2) {
            return true;
        }

        for (int divisor = 2; divisor < number; divisor++) {
            if (number % divisor == 0) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        System.out.println("8 is prime? -> " + isPrime(8));

        int countPrimes = 0;

        for (int x = 11; x <= 80; x++) {
            if (isPrime(x)) {
                System.out.println(x + " is a prime number.");
                countPrimes += 1;
            }

            if (countPrimes >= 3) {
                System.out.println("At least 3 primes were found.");
                break;
            }
        }
    }
}
