package com.turisApp.models.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turisApp.models.dao.IPaisDao;
import com.turisApp.models.entity.Pais;

@Service
public class PaisServiceImpl implements IPaisService {

	@Autowired
	private IPaisDao paisDao;

	@Override
	public List<Pais> findAll() {
		
		return (List<Pais>)paisDao.findAll();
	}

	@Override
	public Optional<Pais> findById(long id) {
		
		return paisDao.findById(id);
	}

	@Override
	public Pais save(Pais pais) {
		
		return paisDao.save(pais);
	}

	@Override
	public void delete(long id) {
		
		paisDao.deleteById(id);
	}

}
