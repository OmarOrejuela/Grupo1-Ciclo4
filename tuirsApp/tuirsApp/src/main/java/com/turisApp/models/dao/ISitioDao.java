/**
 * 
 */
package com.turisApp.models.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.turisApp.models.entity.Sitio;

/**
 * @author MAPS
 *
 */
public interface ISitioDao extends MongoRepository<Sitio, String> {

}
