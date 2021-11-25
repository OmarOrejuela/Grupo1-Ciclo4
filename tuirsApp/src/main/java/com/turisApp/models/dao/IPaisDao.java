package com.turisApp.models.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.turisApp.models.entity.Pais;

@Repository
public interface IPaisDao  extends MongoRepository<Pais, Long>{

}
