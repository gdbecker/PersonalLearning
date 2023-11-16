public class Printer {
    private int tonerLevel;
	private int pagesPrinted;
	private boolean duplex;
	
	public Printer(int tonerLevel, boolean duplex) {
	    if (tonerLevel > -1 && tonerLevel <= 100) {
	        this.tonerLevel = tonerLevel;
	    } else {
	        this.tonerLevel = -1;
	    }
	    this.pagesPrinted = 0;
	    this.duplex = duplex;
	}
	
	public int addToner(int tonerAmount) {
	    if (tonerAmount > 0 && tonerAmount < 100) {
	        if (tonerLevel + tonerAmount > 100) {
	            return -1;
	        } else {
	            tonerLevel += tonerAmount;
	            return tonerLevel;
	        }
	    } else {
	        return -1;
	    }
	}
	
	public int printPages(int pages) {
	    int pagesToPrint = pages;
	    if (duplex) {
	        pagesToPrint = (int) Math.ceil(pages / 2.0);
		    pagesPrinted += pagesToPrint;
		    return pagesToPrint;
	    } else {
	        pagesPrinted += pagesToPrint;
		    return pagesToPrint;
	    }
	}
	
	public int getPagesPrinted() {
	    return pagesPrinted;
	}
}