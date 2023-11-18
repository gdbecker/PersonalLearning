import java.util.ArrayList;

public class MobilePhone {
    private String myNumber;
    private ArrayList<Contact> myContacts;
    
    public MobilePhone(String muNumber) {
        this.myNumber = myNumber;
        this.myContacts = new ArrayList<Contact>();
    }
    
    public boolean addNewContact(Contact c) {
        if (findContact(c) == -1) {
            myContacts.add(c);
            return true;
        } else {
            return false;
        }
    }
    
    public boolean updateContact(Contact o, Contact n) {
        int i = findContact(o);
        if (i != -1) {
            myContacts.set(i, n);
            return true;
        } else {
            return false;
        }
    }
    
    public boolean removeContact(Contact c) {
        if (findContact(c) != -1) {
            myContacts.remove(c);
            return true;
        } else {
            return false;
        }
    }
    
    private int findContact(Contact c) {
        return findContact(c.getName());
    }
    
    private int findContact(String s) {
        for (Contact c : myContacts) {
            if (c.getName().equals(s)) {
                return myContacts.indexOf(c);
            }
        }
        
        return -1;
    }
    
    public Contact queryContact(String s) {
        for (Contact c : myContacts) {
            if (c.getName() == s) {
                return c;
            }
        }
        
        return null;
    }
    
    public void printContacts() {
        System.out.println("Contact List:");
        for (Contact c : myContacts) {
            int i = myContacts.indexOf(c) + 1;
            System.out.println(i + ". " + c.getName() + " -> " + c.getPhoneNumber());
        }
    }
}