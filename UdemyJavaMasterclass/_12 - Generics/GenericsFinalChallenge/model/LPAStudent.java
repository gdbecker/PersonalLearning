import java.util.Random;

public class LPAStudent extends Student {
  private double percentComplete;

  public LPAStudent() {
    this.percentComplete = random.nextDouble(0, 100.001);
  }

  @Override // General Java object method
  public String toString() {
    return "%s %8.1f%%".formatted(super.toString(), percentComplete);
  }

  public double getPercentComplete() {
    return percentComplete;
  }

  @Override // QueryItem method
  public boolean matchFieldValue(String fieldName, String value) {
    if (fieldName.equalsIgnoreCase("percentComplete")) {
      return percentComplete <= Integer.parseInt(value);
    }

    return super.matchFieldValue(fieldName, value);
  }
}