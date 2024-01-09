import java.util.List;
import java.util.ArrayList;

public class QueryList<T extends Student & QueryItem> extends ArrayList<T> {
  // private List<T> items;

  public QueryList() {
    
  }

  public QueryList(List<T> items) {
    super(items);
    // this.items = items;
  }

  public static <S extends QueryItem> List<S> getMatches(List<S> items, String fieldName, String value) {
    List<S> matches = new ArrayList<>();

    for (var i : items) {
      if (i.matchFieldValue(fieldName, value)) {
        matches.add(i);
      }
    }

    return matches;
  }

  public QueryList<T> getMatches(String fieldName, String value) {
    QueryList<T> matches = new QueryList<>();

    for (var i : this) {
      if (i.matchFieldValue(fieldName, value)) {
        matches.add(i);
      }
    }

    return matches;
  }
}