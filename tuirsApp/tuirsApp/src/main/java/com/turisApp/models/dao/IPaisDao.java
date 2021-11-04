package com.turisApp.models.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.turisApp.models.entity.Pais;

public interface IPaisDao  extends MongoRepository<Pais, Long>{

}
