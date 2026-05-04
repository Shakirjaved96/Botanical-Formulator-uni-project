package com.botanical.controller;

import com.botanical.dto.DiagnosisResponseDTO;
import com.botanical.service.DiagnosisService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class DiagnosisController {

    private final DiagnosisService diagnosisService;

    @PostMapping("/diagnose")
    public ResponseEntity<DiagnosisResponseDTO> diagnose(@RequestParam("image") MultipartFile image) {
        try {
            if (image.isEmpty()) {
                return ResponseEntity.badRequest().build();
            }
            
            byte[] imageBytes = image.getBytes();
            DiagnosisResponseDTO response = diagnosisService.diagnose(imageBytes);
            
            return ResponseEntity.ok(response);
        } catch (IOException e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
