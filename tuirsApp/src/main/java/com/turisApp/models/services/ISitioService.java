package com.turisApp.models.services;

import java.util.List;
import java.util.Optional;

import com.turisApp.models.entity.Sitio;

public interface ISitioService {

	public List<Sitio> findAll();
	
	public Optional<Sitio> findById(String id);
	
	public Sitio save(Sitio sitio);
	
	public void  delete(String id);

}
