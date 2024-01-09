public class Person {
    private String firstName;
    private String lastName;
    private int age;
    
    public String getFirstName() {
        return firstName;
    }
    
    public String getLastName() {
        return lastName;
    }
    
    public String getFullName() {
        if (firstName == "" && lastName == "") {
            return "";
        } else if (lastName == "") {
            return firstName;
        } else if (firstName == "") {
            return lastName;
        } else {
            return firstName + " " + lastName;
        }
    }
    
    public int getAge() {
        return age;
    }
    
    public void setFirstName(String n) {
        this.firstName = n;
    }
    
    public void setLastName(String n) {
        this.lastName = n;
    }
    
    public void setAge(int a) {
        if (a < 0 || a > 100) {
            this.age = 0;
        } else {
            this.age = a;
        }
    }
    
    public boolean isTeen() {
        if (age > 12 && age < 20) {
            return true;
        } else {
            return false;
        }
    }
}