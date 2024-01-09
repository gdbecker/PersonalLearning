import java.util.Arrays;

public class ReverseArray {
    
    private static void reverse(int[] arr) {
        int rev[] = new int[arr.length];
        
        for (int i = 0; i < arr.length; i++) {
            rev[i] = arr[arr.length - i - 1];
        }
        
        System.out.println("Array = " + Arrays.toString(arr));
        System.out.println("Reversed array = " + Arrays.toString(rev));
    }
}