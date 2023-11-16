class Printer {
	private int tonerLevel;
	private int pagesPrinted;
	private boolean duplex;
  
	public Printer(int tonerLevel, boolean duplex) {
	  this.tonerLevel = tonerLevel;
	  this.pagesPrinted = 0;
	  this.duplex = duplex;
	}
  
	public void addToner(int tonerAmount) {
	  tonerLevel += tonerAmount;
  
	  if (tonerAmount > 100) {
		tonerAmount = 100;
	  } else if (tonerAmount < 0) {
		tonerAmount = 0;
	  }
	}
  
	public void printPages(int pages) {
	  if (duplex) {
		int sheets = (int) Math.ceil(pages / 2.0);
		pagesPrinted += sheets;
		System.out.println("Duplex printer is printing " + sheets + " sheets.");
	  } else {
		pagesPrinted += pages;
		System.out.println("Duplex printer is printing " + pages + " sheets.");
	  }
	}
  
	public int getPagesPrinted() {
	  return pagesPrinted;
	}
  
  }