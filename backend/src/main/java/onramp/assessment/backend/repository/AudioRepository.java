package onramp.assessment.backend.repository;

import onramp.assessment.backend.model.AudioUpload;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface AudioRepository extends MongoRepository<AudioUpload, String> {
    
}
