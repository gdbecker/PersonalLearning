class Main {
	public static void main(String[] args) {
	  Printer p = new Printer(50, true);
	  System.out.println("Printer has printed " + p.getPagesPrinted() + " pages thus far.");
	  p.printPages(44);
	  System.out.println("Printer has printed " + p.getPagesPrinted() + " pages thus far.");
	}
  }