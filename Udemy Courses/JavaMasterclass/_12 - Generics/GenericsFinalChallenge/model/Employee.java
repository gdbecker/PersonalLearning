record Employee(String name) implements QueryItem {

	@Override // QueryItem method
	public boolean matchFieldValue(String fieldName, String value) {
	  return false;
	}
  }