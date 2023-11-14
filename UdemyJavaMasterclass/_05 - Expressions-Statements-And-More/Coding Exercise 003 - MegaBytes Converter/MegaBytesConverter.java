public class MegaBytesConverter {
	public static void printMegaBytesAndKiloBytes(int kiloBytes) {
		if (kiloBytes < 0) {
			System.out.println("Invalid Value");
		} else {
			int mb = Math.floorDiv(kiloBytes, 1024);
			int kb_leftover = kiloBytes % 1024;
			
			System.out.println(kiloBytes + " KB = " + mb + " MB and " + kb_leftover + " KB");
		}
	}
}