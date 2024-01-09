import java.util.Arrays;
import java.util.ArrayList;

public class Customer {
    private String name;
    private ArrayList<Double> transactions;
    
    public Customer(String name, double transaction) {
        this.name = name;
        this.transactions = new ArrayList<Double>(Arrays.asList(transaction));
    }
    
    public String getName() {
        return name;
    }
    
    public ArrayList<Double> getTransactions() {
        return transactions;
    }
    
    public void addTransaction(double transaction) {
        transactions.add(transaction);
    }
}