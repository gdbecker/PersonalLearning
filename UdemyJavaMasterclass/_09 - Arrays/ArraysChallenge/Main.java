import java.util.Random;
import java.util.Arrays;

class Main {
  public static void main(String[] args) {
    int newArray[] = getRandomArray(10);
    int sortedArray[] = sortArrayDescending(newArray);

    for (int x = 0; x < sortedArray.length; x++) {
      System.out.print(sortedArray[x] + " ");
    }
  }

  public static int[] getRandomArray(int length) {
    Random rand = new Random();
    int[] a = new int[length];
    for (int i = 0; i < length; i++) {
      a[i] = rand.nextInt(100);
    }
    return a;
  }

  public static int[] sortArrayDescending(int[] array) {
    Arrays.sort(array);
    int rev[] = new int[array.length];

    for (int i = 0; i < array.length; i++) {
      rev[array.length - i - 1] = array[i];
    }

    return rev;
  }
}