package onramp.assessment.backend.exception;

import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List; 
import java.util.Map; 
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.context.request.WebRequest;


@ControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpStatus status, WebRequest req){
        Map<String, Object> body = new LinkedHashMap<>(); 
        body.put("time", new Date());
        body.put("status", status.value()); 

        List<String> err = ex.getBindingResult()
            .getFieldErrors() 
            .stream() 
            .map(x -> x.getDefaultMessage())
            .collect(Collectors.toList()); 

        body.put("err", err); 

        return new ResponseEntity<>(body, status);
        
    }
}
