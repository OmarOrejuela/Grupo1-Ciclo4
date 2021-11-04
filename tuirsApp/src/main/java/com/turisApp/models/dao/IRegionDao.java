package com.turisApp.models.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.turisApp.models.entity.Region;

public interface IRegionDao extends MongoRepository<Region, Long> {

}
