package com.sic.SIC.Controller;

import com.sic.SIC.dto.*;
import com.sic.SIC.entity.CommissionerEntity;
import com.sic.SIC.repository.CauseListRepository;
import com.sic.SIC.repository.CommissionerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/commissioners2")
public class CommissionerController {

    @Autowired
    private CommissionerRepository repository;

    @Autowired
    private CauseListRepository causeListRepository;

    @PostMapping("/cause-list")
    public List<CauseListComResponse> getCommissionersAll(@RequestBody CausListRequest request){
        final List<CommissionerProjection> comList = repository.getComList();
        List<CauseListComResponse> resp = new ArrayList<>();
        for (CommissionerProjection p:comList){
            CauseListComResponse c = new CauseListComResponse();
            c.setId(p.getId());
            c.setName(p.getName());
            final List<CauseListProjection> causeListCopy = causeListRepository.getCauseList(p.getId(), request.getStartDate(), request.getEndDate());
            c.setCauseList(causeListCopy);
            resp.add(c);
        }
        return resp;
    }


    @GetMapping("/shortnames")
    public ResponseEntity<List<String>> getShortnames() {
        List<String> shortnames = repository.findAllShortnames();
        return ResponseEntity.ok(shortnames);
    }


    @GetMapping("/unique-designations")
    public ResponseEntity<List<String>> getUniqueDesignations() {
        List<String> designations = repository.findAllUniqueDesignations();
        return ResponseEntity.ok(designations);
    }


    @GetMapping("/allWithSalutation")
    public ResponseEntity<List<CommissionerResponse>> getAllWithSalutation() {
        List<CommissionerEntity> entities = repository.findAll();

        List<CommissionerResponse> response = entities.stream().map(entity -> {
            CommissionerResponse dto = new CommissionerResponse();
            dto.setId(entity.getId());


            String salutationWithName = (entity.getShortname() != null && !entity.getShortname().isEmpty())
                    ? entity.getShortname() + " " + entity.getName()
                    : entity.getName();

            dto.setSalutationWithName(salutationWithName);
            return dto;
        }).collect(Collectors.toList());

        return ResponseEntity.ok(response);
    }


    @GetMapping("/allData")
    public ResponseEntity<List<CommisssionerSecondResponse>> getAllCommissioners() {
        List<CommissionerEntity> list = repository.findAll();
        List<CommisssionerSecondResponse> resp = list.stream().map(entity -> {
            CommisssionerSecondResponse dto = new CommisssionerSecondResponse();
            dto.setId(entity.getId());
            dto.setName(entity.getName());
            dto.setShortname(entity.getShortname());
            dto.setDesignation(entity.getDesignation());
            dto.setSeniority(entity.getSeniority());
            dto.setStatus(entity.getStatus());
            return dto;
        }).collect(Collectors.toList());

        return ResponseEntity.ok(resp);
    }


    @PostMapping("/save")
    public ResponseEntity<CommissionerEntity> saveCommissioner(@RequestBody CommissionerEntity commissioner) {

        commissioner.setCreatedAt(LocalDateTime.now());
        commissioner.setSalutation("Shri.");
        commissioner.setStatus(1L);

        CommissionerEntity savedEntity = repository.save(commissioner);


        return ResponseEntity.ok(savedEntity);
    }



    @PutMapping("/update-seniority/{id}")
    public ResponseEntity<String> updateSeniority(
            @PathVariable int id,
            @RequestParam Long seniority
    ) {
        return repository.findById(id)
                .map(entity -> {
                    entity.setSeniority(seniority);
                    entity.setUpdatedAt(LocalDateTime.now());
                    repository.save(entity);
                    return ResponseEntity.ok("Seniority updated successfully.");
                })
                .orElse(ResponseEntity.notFound().build());
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCommissioner(@PathVariable int id) {
        return repository.findById(id)
                .map(entity -> {
                    repository.deleteById(id);
                    return ResponseEntity.ok("Commissioner deleted successfully.");
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
