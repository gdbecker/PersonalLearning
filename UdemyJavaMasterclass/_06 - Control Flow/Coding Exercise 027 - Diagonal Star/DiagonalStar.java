public class DiagonalStar {
    // write code here
    
    public static void printSquareStar(int number) {
        boolean isValid = false;
        
        if (number < 5) {
            isValid = false;
            System.out.println("Invalid Value");
        } else {
            isValid = true;
        }
        
        if (isValid) {
            for (int row = 1; row <= number; row++) {
				double midRow = Math.ceil(number / 2);
				String rowString = "";
            
				for (int col = 1; col <= number; col++) {
					if (row == 1 || row == number) {
						rowString += "*";
					} else if (col == 1 || col == number) {
						rowString += "*";
					} else if (row == col) {
						rowString += "*";
					} else if (col == (number - row + 1)) {
						rowString += "*";
					} else {
						rowString += " ";
					}
				}

           		System.out.println(rowString);
        	}
        }
        
    }
}