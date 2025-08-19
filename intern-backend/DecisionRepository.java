package com.sic.SIC.repository;

import com.sic.SIC.dto.DecisionProjection;
import com.sic.SIC.dto.IdValProjection;
import com.sic.SIC.entity.DecisionEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository


public interface DecisionRepository extends JpaRepository<DecisionEntity, Integer> {


//    List<DecisionProjection>  findDecisionDetailsByCName(@Param("commissioner_name")int commissioner_name);

         @Query(value = "SELECT id,(select salutation||' '||name from commissioners where id=commissioner_name) \n" +

                "commissioner_name, year, quarter, decisions_file, created_at FROM public.decisions",nativeQuery = true)

    List<DecisionProjection> getAllDecisions();

    @Query(value = "SELECT DISTINCT year FROM decisions WHERE commissioner_name=:commissioner_name ORDER BY YEAR", nativeQuery = true)
    List<String> getAllYearsByCommissioner(@Param("commissioner_name")int commissioner_name);
@Query(value = "SELECT id, quarter value FROM decisions WHERE commissioner_name=:commissioner_name AND YEAR =:year ORDER BY quarter",nativeQuery = true)
    List<IdValProjection> getDecision(@Param("commissioner_name")int commissioner_name,
                                      @Param("year")String year);

}
