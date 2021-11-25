package com.turisApp.models.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.turisApp.models.entity.Departamento;

@Repository
public interface IDepartamentoDao extends MongoRepository<Departamento, Long> {

}
