package onramp.assessment.backend.utils;

import java.util.List; 
import java.util.regex.Pattern; 
import java.util.regex.Matcher;

import org.apache.commons.validator.routines.UrlValidator;


public class URLValidate {
    public static boolean isValidURL(String url){
        UrlValidator valid = new UrlValidator();
        return valid.isValid(url);
    } 

    public static boolean urlValidator(List<String> urls){
        for (int i = 0; i < urls.size(); i++){
            if (isValidURL(urls.get(i)) == false){
                return false;
            }
        }
        return true;
    } 

    public static boolean hasMp3(String url){
        String regex = "^https?://\\S+\\.mp.$";
        Pattern p = Pattern.compile(regex); 
        Matcher m = p.matcher(url); 
        if (m.find()) {
            return true;
        }
        return false;
    }

}
