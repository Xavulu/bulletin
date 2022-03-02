package onramp.assessment.backend.controller;

import java.util.List;

import onramp.assessment.backend.repository.AudioRepository;
import onramp.assessment.backend.model.AudioUpload;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class AudioController {
    @Autowired
    private AudioRepository repo; 

    @GetMapping("/listall")
    public List<AudioUpload> listAll(){
        return repo.findAll();
    }

    @PostMapping("/submit")
    public ResponseEntity<AudioUpload> uploadAudio(@RequestBody AudioUpload input) {
        try {
            AudioUpload upload = repo.save(new AudioUpload(input.getName(), input.getDescription(), input.getImage(), input.getSource(), input.getAudio()));
            return new ResponseEntity<>(upload, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
