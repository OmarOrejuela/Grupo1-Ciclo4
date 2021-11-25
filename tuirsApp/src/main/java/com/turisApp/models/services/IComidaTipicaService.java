package com.turisApp.models.services;

import java.util.List;
import java.util.Optional;


import com.turisApp.models.entity.Comida_Tipica;

public interface IComidaTipicaService {

	public List<Comida_Tipica> findAll();
	
	public Optional<Comida_Tipica> findById(long id);
	
	public Comida_Tipica save(Comida_Tipica comida_tipica);
	
	public void  delete(long id);
}
