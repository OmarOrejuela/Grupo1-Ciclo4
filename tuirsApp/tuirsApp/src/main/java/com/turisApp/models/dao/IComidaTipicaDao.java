package com.turisApp.models.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.turisApp.models.entity.Comida_Tipica;

public interface IComidaTipicaDao extends MongoRepository<Comida_Tipica, Long> {

}
