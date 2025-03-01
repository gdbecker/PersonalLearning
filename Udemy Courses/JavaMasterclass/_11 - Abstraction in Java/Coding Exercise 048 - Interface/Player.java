import java.util.List;
import java.util.ArrayList;

public class Player implements ISaveable {
    
    private String name;
    private String weapon;
    private int hitPoints;
    private int strength;
    
    public Player(String name, int hitPoints, int strength) {
        this.name = name;
        this.weapon = "Sword";
        this.hitPoints = hitPoints;
        this.strength = strength;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getWeapon() {
        return weapon;
    }
    
    public void setWeapon(String weapon) {
        this.weapon = weapon;
    }
    
    public int getHitPoints() {
        return hitPoints;
    }
    
    public void setHitPoints(int hitPoints) {
        this.hitPoints = hitPoints;
    }
    
    public int getStrength() {
        return strength;
    }
    
    public void setStrength(int strength) {
        this.strength = strength;
    }
    
    @Override
    public List<String> write() {
        List<String> list = new ArrayList<String>();
        list.add(0, name);
        list.add(1, String.valueOf(hitPoints));
        list.add(2, String.valueOf(strength));
        list.add(3, String.valueOf(weapon));
        return list;
    }
    
    @Override
    public void read(List<String> list) {
        if (list != null && list.size() > 0) {
            this.name = list.get(0);
            this.hitPoints = Integer.parseInt(list.get(1));
            this.strength = Integer.parseInt(list.get(2));
            this.weapon = list.get(3);
        }
    }
    
    @Override
    public String toString() {
        return String.format("Player{name='%s', hitPoints=%d, strength=%d, weapon='%s'}", name, hitPoints, strength, weapon);
    }
}