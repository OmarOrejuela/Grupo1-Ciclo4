package com.turisApp.models.services;

import java.util.List;
import java.util.Optional;

import com.turisApp.models.entity.Pais;

public interface IPaisService {
	
	public List<Pais> findAll();
	
	public Optional<Pais> findById(long id);
	
	public Pais save(Pais pais);
	
	public void  delete(long id);

}
