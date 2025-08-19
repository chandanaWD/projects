package com.sic.SIC.Controller;

import com.sic.SIC.dto.CauseListResponseDTO;
import com.sic.SIC.entity.CauseListEntity;
import com.sic.SIC.entity.CommissionerEntity;
import com.sic.SIC.repository.CauseListRepository;
import com.sic.SIC.repository.CommissionerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/causelist")
public class CauseListController {

    @Autowired
    private CauseListRepository causeListRepository;

    @Autowired
    private CommissionerRepository commissionerRepository;


    @GetMapping("/all")
    public List<CauseListResponseDTO> getAllCauseLists() {
        List<CauseListEntity> causeLists = causeListRepository.findAll();

        // Map Entity to DTO
        return causeLists.stream().map(c ->
                new CauseListResponseDTO(
                        (long) c.getId(),
                        c.getCommissioner().getName(),
                        c.getDate_of_hearing(),
                        c.getCauselist_name(),
                        c.getCreated_at(),
                        c.getUpdated_at()
                )
        ).collect(Collectors.toList());
    }

    //  Get cause list by ID
    @GetMapping("/{id}")
    public ResponseEntity<CauseListResponseDTO> getCauseListById(@PathVariable int id) {
        return causeListRepository.findById(id)
                .map(c -> new CauseListResponseDTO(
                        (long) c.getId(),
                        c.getCommissioner().getName(),
                        c.getDate_of_hearing(),
                        c.getCauselist_name(),
                        c.getCreated_at(),
                        c.getUpdated_at()))
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    // Update existing cause list
    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateCauseList(
            @PathVariable int id,
            @RequestBody CauseListEntity updatedCauseList) {

        return causeListRepository.findById(id)
                .map(existing -> {
                    existing.setCauselist_name(updatedCauseList.getCauselist_name());
                    existing.setDate_of_hearing(updatedCauseList.getDate_of_hearing());
                    causeListRepository.save(existing);
                    return ResponseEntity.ok("Cause List updated successfully!");
                })
                .orElse(ResponseEntity.notFound().build());
    }

    //  Delete cause list by ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCauseList(@PathVariable int id) {
        return causeListRepository.findById(id)
                .map(c -> {
                    causeListRepository.delete(c);
                    return ResponseEntity.ok("Cause List deleted successfully!");
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/get-file")
    public ResponseEntity<FileSystemResource> getFile(@RequestParam("id") int id) {
        System.out.println("id:: "+id);
        final CauseListEntity causelist = causeListRepository.findById(id).orElseThrow(() -> new RuntimeException("causelist not found"));

//        String zipDir = System.getProperty("user.dir") + "/uploads/";
        File zipFile = new File(causelist.getCauselist_name());

        if (!zipFile.exists()) {
            return ResponseEntity.notFound().build();
        }

        // Create FileSystemResource to send the file
        FileSystemResource resource = new FileSystemResource(zipFile);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + zipFile.getName() + "\"")
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .contentLength(zipFile.length())
                .body(resource);


    }

    @PostMapping("/create")
    public ResponseEntity<String> uploadZip(
            @RequestParam("commissionerId") int commissionerId,
            @RequestParam("dateOfHearing") String dateOfHearing,
            @RequestParam("causelistName") String causelistName,
            @RequestParam("file") MultipartFile file) {

        System.out.println(commissionerId);
        System.out.println(dateOfHearing);
        System.out.println(causelistName);

        String uploadDir = "D:\\SIC_files\\";

        String finalFileName = uploadDir + causelistName + ".pdf";

        try {
            File uploadFolder = new File(uploadDir);
            if (!uploadFolder.exists()) {
                uploadFolder.mkdirs();
            }

            if (!Objects.requireNonNull(file.getOriginalFilename()).endsWith(".pdf")) {
                throw new RuntimeException("Invalid file...");
            }

            File zipFile = new File(uploadDir + causelistName + ".pdf");
            file.transferTo(zipFile);

            System.out.println("File uploaded: " + zipFile.getAbsolutePath());

            CauseListEntity list = new CauseListEntity();
            CommissionerEntity c = commissionerRepository.findById(commissionerId).orElseThrow(() -> new RuntimeException("Commissioner not found"));
            list.setCauselist_name(finalFileName);
            list.setCommissioner(c);
            list.setCreated_at(LocalDateTime.now());
            try {
                Date format = new SimpleDateFormat("yyyy-MM-dd").parse(dateOfHearing);
                list.setDate_of_hearing(format);
            } catch (ParseException e) {
                throw new RuntimeException("Date format invalid");
            }


            causeListRepository.save(list);


            return ResponseEntity.ok("File uploaded successfully");

        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("File upload failed.");
        }
    }
}

