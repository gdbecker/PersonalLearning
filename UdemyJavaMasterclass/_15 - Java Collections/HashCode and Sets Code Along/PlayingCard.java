public class PlayingCard {
	private String suit;
	private String face;
	private int internalHash;
  
	public PlayingCard(String suit, String face) {
	  this.suit = suit;
	  this.face = face;
	  this.internalHash = (suit.equals("Hearts")) ? 11 : 12;
	}
  
	@Override
	public String toString() {
	  return face + " of " + suit;
	}
  
	@Override // generated code
	public int hashCode() {
	  int result = suit.hashCode();
	  result = 31 * result + face.hashCode();
	  return result;
	}
  
	@Override // generated code
	public boolean equals(Object obj) {
	  if (this == obj) return true;
	  if (obj == null || getClass() != obj.getClass()) return false;
  
	  PlayingCard that = (PlayingCard) obj;
  
	  if (!suit.equals(that.suit)) return false;
	  return face.equals(that.face);
	}
  }