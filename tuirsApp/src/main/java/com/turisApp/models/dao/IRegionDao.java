package com.turisApp.models.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.turisApp.models.entity.Region;

@Repository
public interface IRegionDao extends MongoRepository<Region, Long> {

	@Query( value="{ 'dep.$id' : ?0 }")
	public List<Region> findByDepId(String idDep);
}
