import java.util.ArrayList;
import java.util.LinkedList; 
import java.util.Iterator; 

public class Album {
    
    private String name;
    private String artist;
    private ArrayList<Song> songs;
    
    public Album(String name, String artist) {
        this.name = name;
        this.artist = artist;
        this.songs = new ArrayList<Song>();
    }
    
    public boolean addSong(String title, double duration) {
        Song s = findSong(title);
        
        if (s == null) {
            songs.add(new Song(title, duration));
            return true;
        } else {
            return false;
        }
    }
    
    private Song findSong(String title) {
        for (Song s : songs) {
            if (s.getTitle().equals(title)) {
                return s;
            }
        }
        
        return null;
    }
    
    public boolean addToPlayList(int trackNumber, LinkedList<Song> songList) {
        if (trackNumber > 0) {
            Song s = songs.get(trackNumber - 1);
            songList.add(trackNumber - 1, s);
            return true;
        } else {
            return false;
        }
    }
    
    public boolean addToPlayList(String title, LinkedList<Song> songList) {
        Song s = findSong(title);
        
        if (s != null) {
            songList.add(s);
            return true;
        } else {
            return false;
        }
    }
}