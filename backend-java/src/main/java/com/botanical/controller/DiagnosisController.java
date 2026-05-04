package com.botanical.controller;

import com.botanical.dto.DiagnosisResponseDTO;
import com.botanical.service.DiagnosisService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
@CrossOrigin(origins = "*") // Ensuring frontend can reach the API
public class DiagnosisController {

    private final DiagnosisService diagnosisService;

    /**
     * // POST /api/v1/diagnose-and-formulate
     * // Receives multi-part data containing both user details and the diagnostic image.
     */
    @PostMapping("/diagnose-and-formulate")
    public ResponseEntity<DiagnosisResponseDTO> diagnoseAndFormulate(
            @RequestParam("name") String name,
            @RequestParam("email") String email,
            @RequestParam("age") int age,
            @RequestParam("skinType") String skinType,
            @RequestParam("image") MultipartFile image) {
        
        try {
            if (image.isEmpty()) {
                return ResponseEntity.badRequest().build();
            }

            // Delegating core logic to the service layer
            DiagnosisResponseDTO response = diagnosisService.diagnoseAndFormulate(
                    name, email, age, skinType, image.getBytes()
            );

            return ResponseEntity.ok(response);
        } catch (IOException e) {
            return ResponseEntity.internalServerError().build();
        } catch (Exception e) {
            // Log error and return appropriate message
            return ResponseEntity.status(500).body(null);
        }
    }
}
