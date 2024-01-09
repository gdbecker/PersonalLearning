import java.util.ArrayList;

public class Bank {
    private String name;
    private ArrayList<Branch> branches;
    
    public Bank(String name) {
        this.name = name;
        this.branches = new ArrayList<Branch>();
    }
    
    public boolean addBranch(String branchName) {
        Branch b = findBranch(branchName);
        
        if (b == null) {
            branches.add(new Branch(branchName));
            return true;
        } else {
            return false;
        }
    }
    
    public boolean addCustomer(String branchName, String custName, double transaction) {
        Branch b = findBranch(branchName);
        
        if (b != null) {
            boolean addedCustomer = b.newCustomer(custName, transaction);
            
            if (addedCustomer) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    
    public boolean addCustomerTransaction(String branchName, String custName, double transaction) {
        Branch b = findBranch(branchName);
        
        if (b != null) {
            boolean addedCustomerTransaction = b.addCustomerTransaction(custName, transaction);
            
            if (addedCustomerTransaction) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    
    private Branch findBranch(String branchName) {
        for (Branch b : branches) {
            if (b.getName().equals(branchName)) {
                return b;
            }
        }
        
        return null;
    }
    
    public boolean listCustomers(String branchName, boolean printTransactions) {
        Branch b = findBranch(branchName);
        
        if (b != null) {
            ArrayList<Customer> customers = b.getCustomers();
            System.out.println("Customer details for branch " + branchName);
            
            for (Customer c : customers) {
                int i = customers.indexOf(c) + 1;
                System.out.println("Customer: " + c.getName() + "[" + i + "]");
                
                if (printTransactions) {
                    ArrayList<Double> transactions = c.getTransactions();
                    System.out.println("Transactions");
                    
                    for (Double t : transactions) {
                        int j = transactions.indexOf(t) + 1;
                        System.out.println("[" + j + "] Amount " + t);
                    }
                }
            }
            return true;
        } else {
            return false;
        }
    }
}