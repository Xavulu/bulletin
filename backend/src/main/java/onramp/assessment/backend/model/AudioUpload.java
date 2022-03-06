package onramp.assessment.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.CompoundIndex;
import org.springframework.data.mongodb.core.index.CompoundIndexes;
import org.springframework.data.mongodb.core.mapping.Document;


import javax.validation.constraints.NotNull;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;


@Document(collection = "audio")
@CompoundIndexes({
    @CompoundIndex(name = "audio_index", def = "{ 'name' : 1, 'description' : 1}", unique = true)
})
public class AudioUpload{

    @Id
    private String id; 
    
    @Valid
    @NotNull
    @NotBlank(message = "please enter a name")
    private String name; 

    @Valid
    @NotNull(message = "please give a description")
    @NotBlank
    private String description;  

    @Valid
    @NotNull(message = "please give a title")
    @NotBlank
    private String title; 

    @Valid
    @NotNull(message = "please give an image url")
    @NotBlank
    private String image; 

    private int upvotes; 
    private int downvotes; 

    @Valid
    @NotNull(message = "please give a source url")
    @NotBlank
    private String source; 

    @Valid
    @NotNull(message = "please give an audio url")
    @NotBlank
    private String audio; 

    public AudioUpload(){}

    public AudioUpload(String name, String description, String image, String source, String audio, String title ) {
        this.name = name; 
        this.description = description; 
        this.title = title;
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

    public String getTitle() {
        return title;
    }

    public String getImage() {
        return image;
    } 

    public int getUpvotes(){
        return this.upvotes;
    }

    public int getDownvotes(){
        return this.downvotes;
    }


    public String getSource() {
        return source;
    } 

    public String getAudio() {
        return audio;
    }

    public boolean isValidUpload(){
        if (this.getName() == null || this.getDescription() == null || this.getImage() == null || this.getSource() == null || this.getAudio() == null) {
            return false;
        }
        return true;
    }

    public void upVote(){
        upvotes += 1;
    }

    public void downVote(){
        downvotes += 1;
    }
}

