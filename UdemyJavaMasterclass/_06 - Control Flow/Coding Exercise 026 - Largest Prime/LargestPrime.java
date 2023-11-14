public class LargestPrime {
    public static int getLargestPrime(int number) {
        if (number <= 1) {
            return -1;
        }
        
        int largest = 0;
        
        for (int z = 1; z <= number; z++) {
            if (number % z == 0) {
                int count = 0;
        
                for (int x = 1; x <= z; x++) {
                    if (z % x == 0) {
                        count += 1;
                    }
                }
                
                boolean isPrime = count == 2;
                
                if (isPrime && z > largest) {
                    largest = z;
                }
            }
        }
        
        return largest;
    }
}