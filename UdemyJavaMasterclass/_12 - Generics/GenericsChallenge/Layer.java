import java.util.List;
import java.util.ArrayList;

public class Layer<T extends Mappable> {
  List<T> mappables;

  public Layer(T[] elements) {
    this.mappables = new ArrayList<T>(List.of(elements));
  }

  public void addElement(T element) {
    mappables.add(element);
  }

  public void addElements(T... elements) {
    mappables.addAll(List.of(elements));
  }

  public void renderElements() {
    mappables.forEach(mappable -> mappable.render());
  }
}