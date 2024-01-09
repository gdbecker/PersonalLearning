import java.util.ArrayList;
import java.util.LinkedList; 
import java.util.Iterator; 

public class Album {
    
    public static class SongList {
        
        private ArrayList<Song> songs;

        private SongList() {
            this.songs = new ArrayList<>();
        }
        
        private boolean add(Song s) {
            if (!songs.contains(s)) {
                songs.add(s);
                return true;
            } else {
                return false;
            }
        }
        
        private Song findSong(String title) {
            for (Song s : songs) {
                if (s.getTitle().equalsIgnoreCase(title)) {
                    return s;
                }
            }
            return null;
        }
        
        private Song findSong(int trackNumber) {
            for (Song s : songs) {
                if (songs.indexOf(s) == trackNumber) {
                    return s;
                }
            }
            return null;
        }
    }
    
    private String name;
    private String artist;
    private SongList songs;
    
    public Album(String name, String artist) {
        this.name = name;
        this.artist = artist;
        this.songs = new SongList();
    }
    
    public boolean addSong(String title, double duration) {
        Song s = songs.findSong(title);
        
        if (s == null) {
            songs.add(new Song(title, duration));
            return true;
        } else {
            return false;
        }
    }
    
    public boolean addToPlayList(int trackNumber, LinkedList<Song> playList) {
        Song s = songs.findSong(trackNumber - 1);
        if (s != null) {
            playList.add(s);
            return true;
        } else {
            return false;
        }
    }
    
    public boolean addToPlayList(String title, LinkedList<Song> playList) {
        Song s = songs.findSong(title);
        
        if (s != null) {
            playList.add(s);
            return true;
        } else {
            return false;
        }
    }
}