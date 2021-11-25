package com.turisApp.models.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turisApp.models.dao.IComidaTipicaDao;
import com.turisApp.models.entity.Comida_Tipica;
@Service
public class ComidaTipicaServiceImpl implements IComidaTipicaService {

	@Autowired
	private IComidaTipicaDao comidatipicaDao;
	
	@Override
	public List<Comida_Tipica> findAll() {
		// TODO Auto-generated method stub
		return (List<Comida_Tipica>)comidatipicaDao.findAll();
	}

	@Override
	public Optional<Comida_Tipica> findById(long id) {
		// TODO Auto-generated method stub
		return comidatipicaDao.findById(id);
	}

	@Override
	public Comida_Tipica save(Comida_Tipica comida_tipica) {
		// TODO Auto-generated method stub
		return comidatipicaDao.save(comida_tipica);
	}

	@Override
	public void delete(long id) {
		comidatipicaDao.deleteById(id);

	}

}
