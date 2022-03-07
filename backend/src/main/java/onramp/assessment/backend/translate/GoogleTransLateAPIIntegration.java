package onramp.assessment.backend.translate;

import java.io.IOException;

import com.google.cloud.translate.v3.LocationName;
import com.google.cloud.translate.v3.TranslateTextRequest; 
import com.google.cloud.translate.v3.TranslateTextResponse;
import com.google.cloud.translate.v3.Translation;
import com.google.cloud.translate.v3.TranslationServiceClient;

public class GoogleTransLateAPIIntegration {
    
    public static String translateDescription(String text, String target) throws IOException {
        
        String fin = "";
        String projectId = "onramp-takehome";

        try (TranslationServiceClient client = TranslationServiceClient.create()) {
            LocationName parent = LocationName.of(projectId, "global"); 

            TranslateTextRequest req = TranslateTextRequest.newBuilder()
                .setParent(parent.toString())
                .setMimeType("text/plain")
                .setTargetLanguageCode("es")
                .addContents(text)
                .build(); 

            TranslateTextResponse res = client.translateText(req); 

            for (Translation translation : res.getTranslationsList()) {
                fin = translation.getTranslatedText();
            }
        }
        return fin;
    }
}
