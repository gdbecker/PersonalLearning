import java.util.Scanner;
import java.util.Arrays;

public class MinimumElement {
    
    private static int readInteger() {
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();
        return num;
    }
    
    private static int[] readElements(int num) {
        Scanner scanner = new Scanner(System.in);
        
        int array[] = new int[num];
        
        for (int i = 0; i < num; i++) {
            array[i] = scanner.nextInt();
        }
        
        return array;
    }
    
    private static int findMin(int[] array) {
        Arrays.sort(array);
        return array[0];
    }
    
}