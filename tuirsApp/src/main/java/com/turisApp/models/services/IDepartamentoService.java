package com.turisApp.models.services;

import java.util.List;
import java.util.Optional;

import com.turisApp.models.entity.Departamento;

public interface IDepartamentoService {
	
	public List<Departamento> findAll();
	
	public Optional<Departamento> findById(long id);
	
	public Departamento save(Departamento departamento);
	
	public void delete (long ig);

}
