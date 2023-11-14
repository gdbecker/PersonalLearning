public class FlourPacker {
    public static boolean canPack(int bigCount, int smallCount, int goal) {
        return goal >= 0 && bigCount * 5 + smallCount >= goal && goal % 5 <= smallCount;
        
        
    }
}