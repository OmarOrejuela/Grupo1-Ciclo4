package com.turisApp.models.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.turisApp.models.entity.Departamento;

public interface IDepartamentoDao extends MongoRepository<Departamento, Long> {

}
