package com.sic.SIC.repository;

import com.sic.SIC.dto.CauseListProjection;
import com.sic.SIC.entity.CauseListEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CauseListRepository extends JpaRepository<CauseListEntity, Integer> {
    @Query(value = "SELECT id,commissioner_name, date_of_hearing FROM public.causelist " +
            "WHERE commissioner_name = :commissioner_name and date_of_hearing BETWEEN CAST(:startDate AS DATE) AND CAST(:endDate AS DATE)", nativeQuery = true)
    List<CauseListProjection> getCauseList(@Param("commissioner_name") int commissioner_name,
                                           @Param("startDate") String startDate,
                                           @Param("endDate") String endDate);



}
