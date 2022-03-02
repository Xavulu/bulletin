package onramp.assessment.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Document(collection = "audio")
public class AudioUpload {

    @Id
    private String id; 
    private String name; 
    private String description; 
    private String image; 
    private int upvotes; 
    private int downvotes; 
    private String source; 
    private String audio; 

    public AudioUpload(){}

    public AudioUpload(String name, String description, String image, String source, String audio ) {
        this.name = name; 
        this.description = description; 
        this.image = image; 
        this.upvotes = 0; 
        this.downvotes = 0;
        this.source = source; 
        this.audio = audio;
    } 

    public String getId() {
        return id;
    } 

    public String getName() {
        return name;
    } 

    public String getDescription() {
        return description;
    }

    public String getImage() {
        return image;
    } 

    public ArrayList<Integer> getVotes(){
        ArrayList<Integer> votes = new ArrayList<Integer>(); 
        votes.add(upvotes); 
        votes.add(downvotes);
        return votes;
    }

    public String getSource() {
        return source;
    } 

    public String getAudio() {
        return audio;
    }
}

