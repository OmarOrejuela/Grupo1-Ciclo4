package com.turisApp.models.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.turisApp.models.entity.Comida_Tipica;

@Repository
public interface IComidaTipicaDao extends MongoRepository<Comida_Tipica, Long> {

}
