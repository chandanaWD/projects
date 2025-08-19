package com.sic.SIC.repository;

import com.sic.SIC.dto.CommissionerProjection;
import com.sic.SIC.entity.CommissionerEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommissionerRepository extends JpaRepository<CommissionerEntity,Integer> {
    @Query("SELECT DISTINCT TRIM(LOWER(c.designation)) FROM CommissionerEntity c")
    List<String> findAllUniqueDesignations();

    @Query("SELECT c.shortname FROM CommissionerEntity c")
    List<String> findAllShortnames();

    @Query(value = "SELECT id, salutation||' '||name as name FROM commissioners order by name",nativeQuery = true)
    List<CommissionerProjection> getComList();
}
