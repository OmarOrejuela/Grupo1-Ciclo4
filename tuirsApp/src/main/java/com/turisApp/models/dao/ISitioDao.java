/**
 * 
 */
package com.turisApp.models.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.turisApp.models.entity.Sitio;

/**
 * @author MAPS
 *
 */
@Repository
public interface ISitioDao extends MongoRepository<Sitio, String> {
	@Query( value="{ 'regiones.$id_reg' : ?0 }")
	public List<Sitio> findByRegionesId(Long id_reg);

}
