import java.util.Scanner;
import java.util.Arrays;
import java.util.Collections;

public class SortedArray {
    
    public static int[] getIntegers(int length) {
        Scanner scanner = new Scanner(System.in);
        int myArray[] = new int[length];
        
        for (int i = 0; i < length; i++) {
            System.out.println("Enter an integer!");
            int newInt = scanner.nextInt();
            myArray[i] = newInt;
        }
        
        return myArray;
    }
    
    public static int[] sortIntegers(int[] numArray) {
        Arrays.sort(numArray);
        int rev[] = new int[numArray.length];
        
        for (int i = 0; i < numArray.length; i++) {
            rev[numArray.length - i - 1] = numArray[i];
        }
        
        return rev;
    }
    
    public static void printArray(int[] numArray) {
        for (int i = 0; i < numArray.length; i++) {
            System.out.println("Element " + i + " contents " + numArray[i]);
        }
    }
}