class DishWasher {
	public boolean hasWorkToDo;
  
	public DishWasher() {
	  this.hasWorkToDo = true;
	}
  
	public void setHasWorkToDo(boolean hasWorkToDo) {
	  this.hasWorkToDo = hasWorkToDo;
	}
  
	public void doDishes() {
	  if (hasWorkToDo) {
		System.out.println("Doin the dishes");
		hasWorkToDo = false;
	  }
	}
  }