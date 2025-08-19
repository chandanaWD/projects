package com.sic.SIC.Controller;

import com.sic.SIC.dto.*;
import com.sic.SIC.entity.CauseListEntity;
import com.sic.SIC.entity.CommissionerEntity;
import com.sic.SIC.entity.DecisionEntity;
import com.sic.SIC.repository.CommissionerRepository;
import com.sic.SIC.repository.DecisionRepository;
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
import java.util.*;

@RestController
@RequestMapping("/decisions")
public class DecisionController {

    @Autowired
    private CommissionerRepository repository;
    @Autowired
    private DecisionRepository decisionRepository;

    public DecisionController(CommissionerRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/names")
    public List<CommissionerResponse> getAllDecisions() {

        List<CommissionerResponse> list = new ArrayList<>();

        List<CommissionerEntity> all = repository.findAll();
        for (int i = 0; i <= all.size() - 1; i++) {
            CommissionerResponse obj = new CommissionerResponse();
            obj.setSalutationWithName(all.get(i).getSalutation() + " " + all.get(i).getName());
            obj.setId(all.get(i).getId());
            list.add(obj);
        }
        return list;
    }

    @GetMapping("/all-decision")
    public List<DecisionProjection> getDecisionDetails() {
        return decisionRepository.getAllDecisions();
    }

    @GetMapping("/get-file")
    public ResponseEntity<FileSystemResource> getFile(@RequestParam("id") int id) {
        final DecisionEntity decisionList = decisionRepository.findById(id).orElseThrow(() -> new RuntimeException("Decision not found"));

//        String zipDir = System.getProperty("user.dir") + "/uploads/";
        File zipFile = new File(decisionList.getDecisions_file());

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
            @RequestParam("year") String year,
            @RequestParam("quarter") String quarter,
            @RequestParam("file") MultipartFile file) {


        String uploadDir = "D:\\SIC_files\\";

        String finalFileName = uploadDir + file.getOriginalFilename();

        try {
            File uploadFolder = new File(uploadDir);
            if (!uploadFolder.exists()) {
                uploadFolder.mkdirs();
            }

            if (!Objects.requireNonNull(file.getOriginalFilename()).endsWith(".pdf")) {
                throw new RuntimeException("Invalid file...");
            }

            File zipFile = new File(uploadDir + file.getOriginalFilename());
            file.transferTo(zipFile);

            System.out.println("File uploaded: " + zipFile.getAbsolutePath());

            DecisionEntity list = new DecisionEntity();
            CommissionerEntity c = repository.findById(commissionerId).orElseThrow(() -> new RuntimeException("Commissioner not found"));
            list.setDecisions_file(finalFileName);
            list.setYear(year);
            list.setQuarter(quarter);
            list.setCommissioner_name(commissionerId);
            list.setCreated_at(LocalDateTime.now());


            decisionRepository.save(list);


            return ResponseEntity.ok("File uploaded successfully");

        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("File upload failed.");
        }

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCauseList(@PathVariable int id) {
        return decisionRepository.findById(id)
                .map(c -> {
                    decisionRepository.delete(c);
                    return ResponseEntity.ok("Cause List deleted successfully!");
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/get-all")
    public List<DesResponse> getAllDecisions2() {
        final List<CommissionerEntity> all = repository.findAll();

        List<DesResponse> list = new ArrayList<>();
        for (CommissionerEntity c : all) {
            DesResponse d = new DesResponse();
            d.setId(c.getId());
            d.setName(c.getName());

            List<DesDesResponse> decision = new ArrayList<>();
            final List<String> years = decisionRepository.getAllYearsByCommissioner(c.getId());
            for (String y : years) {
                DesDesResponse dr = new DesDesResponse();
                dr.setYear(y);
                final List<IdValProjection> decision1 = decisionRepository.getDecision(c.getId(), y);
                dr.setDecisionList(decision1);
                decision.add(dr);
            }
            d.setDecision(decision);
            list.add(d);
        }
        return list;
    }

    @GetMapping("/get-search-all")
    public List<DesResponse> getAllDecisions3() {
        final List<CommissionerEntity> all = repository.findAll();

        List<DesResponse> list = new ArrayList<>();
        for (CommissionerEntity c : all) {
            DesResponse d = new DesResponse();
            d.setId(c.getId());
            d.setName(c.getName());

            List<DesDesResponse> decision = new ArrayList<>();
            final List<String> years = decisionRepository.getAllYearsByCommissioner(c.getId());
            for (String y : years) {
                DesDesResponse dr = new DesDesResponse();
                dr.setYear(y);
                final List<IdValProjection> decision1 = decisionRepository.getDecision(c.getId(), y);
                dr.setDecisionList(decision1);
                decision.add(dr);
            }
            d.setDecision(decision);
            list.add(d);
        }
        return list;
    }
}






