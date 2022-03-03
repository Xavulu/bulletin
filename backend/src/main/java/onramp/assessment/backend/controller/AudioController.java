package onramp.assessment.backend.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import onramp.assessment.backend.repository.AudioRepository;
import onramp.assessment.backend.utils.URLValidate;
import onramp.assessment.backend.model.AudioUpload;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class AudioController {
    @Autowired
    private AudioRepository repo; 

    @GetMapping("/listall")
    public ResponseEntity<List<AudioUpload>> listAll(){
        try { 
            List<AudioUpload> audios = new ArrayList<AudioUpload>();
            repo.findAll().forEach(audios::add); 
            if (audios.isEmpty()) {
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(audios, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/submit")
    public ResponseEntity<AudioUpload> uploadAudio(@Valid @RequestBody AudioUpload input) {
        try {
            AudioUpload upload = new AudioUpload(input.getName(), input.getDescription(), input.getImage(), input.getSource(), input.getAudio());
            if (upload.isValidUpload() == false){
                return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
            }
            List<String> urls = Arrays.asList(input.getSource(), input.getAudio()); 
            if (URLValidate.urlValidator(urls) == false){
                return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
            }
            if (URLValidate.hasMp3(input.getAudio()) == false){
                return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
            }
            repo.save(upload);
            return new ResponseEntity<>(upload, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PatchMapping("/upvote/{id}") 
    public ResponseEntity<HttpStatus> upVote(@PathVariable("id") String id){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/downvote/{id}") 
    public ResponseEntity<HttpStatus> downVote(@PathVariable("id") String id){
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
