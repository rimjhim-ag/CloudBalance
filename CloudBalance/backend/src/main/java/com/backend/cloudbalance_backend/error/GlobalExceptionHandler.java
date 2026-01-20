package com.backend.cloudbalance_backend.error;


import com.google.protobuf.Api;
import io.jsonwebtoken.JwtException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.server.ResponseStatusException;

@RestControllerAdvice
public class GlobalExceptionHandler {




    @ExceptionHandler(JwtException.class)
    public ResponseEntity<ApiError> handleJwtException(JwtException ex) {
        ApiError apiError = new ApiError("Invalid JWT token: " + ex.getMessage(), HttpStatus.UNAUTHORIZED);
        return new ResponseEntity<>(apiError, HttpStatus.UNAUTHORIZED);
    }
    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<ApiError> handleAuthenticationException(AuthenticationException ex) {
        ApiError apiError = new ApiError("Authentication failed: Invalid username or password", HttpStatus.UNAUTHORIZED);
        return new ResponseEntity<>(apiError, HttpStatus.UNAUTHORIZED);
    }





    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ApiError> handleAccessDenied(AccessDeniedException ex) {
        ApiError apiError = new ApiError("You are not authorized to perform this action: " + ex.getMessage(), HttpStatus.FORBIDDEN);
        return new ResponseEntity<>(apiError, HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler({
            MethodArgumentNotValidException.class,
            HttpMessageNotReadableException.class
    })
    public ResponseEntity<ApiError> handleValidationError(Exception ex) {

        if (ex instanceof MethodArgumentNotValidException manv) {

            StringBuilder errorMessage = new StringBuilder("Validation failed: ");

            manv.getBindingResult().getFieldErrors().forEach(error ->
                    errorMessage
                            .append(error.getField())
                            .append(" - ")
                            .append(error.getDefaultMessage())
                            .append("; ")
            );

            return ResponseEntity.badRequest()
                    .body(new ApiError(errorMessage.toString(), HttpStatus.BAD_REQUEST));
        }


        return ResponseEntity.badRequest()
                .body(new ApiError(
                        "Invalid request body or malformed JSON",
                        HttpStatus.BAD_REQUEST
                ));
    }



    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<ApiError> handleResponseStatusException(ResponseStatusException ex) {

        HttpStatus status = HttpStatus.valueOf(ex.getStatusCode().value());
        ApiError apiError = new ApiError(
                ex.getReason(),
                status
        );
        return new ResponseEntity<>(apiError, apiError.getStatusCode());
    }



    @ExceptionHandler(org.springframework.web.servlet.NoHandlerFoundException.class)
    public ResponseEntity<ApiError> handleNotFound(org.springframework.web.servlet.NoHandlerFoundException ex) {
        ApiError apiError = new ApiError(
                "Resource not found: " + ex.getRequestURL(),
                HttpStatus.NOT_FOUND
        );
        return new ResponseEntity<>(apiError, HttpStatus.NOT_FOUND);
    }


//    @ExceptionHandler(HttpMessageNotReadableException.class)
//    public ResponseEntity<ApiError> handleInvalidEnumInBody(
//            HttpMessageNotReadableException ex) {
//
//        ApiError apiError = new ApiError(
//                "Invalid value in request body",
//                HttpStatus.BAD_REQUEST
//        );
//        return new ResponseEntity<>(apiError, HttpStatus.BAD_REQUEST);
//    }


    @ExceptionHandler(org.springframework.web.HttpRequestMethodNotSupportedException.class)
    public ResponseEntity<ApiError> handleMethodNotAllowed(org.springframework.web.HttpRequestMethodNotSupportedException ex) {
        StringBuilder message = new StringBuilder();
        message.append(ex.getMethod()).append(" method is not supported for this endpoint");


        ApiError apiError = new ApiError(message.toString(), HttpStatus.METHOD_NOT_ALLOWED);
        return new ResponseEntity<>(apiError, HttpStatus.METHOD_NOT_ALLOWED);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiError> handleGenericException(Exception ex) {
        ApiError apiError = new ApiError("An unexpected error occurred" , HttpStatus.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>(apiError, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
