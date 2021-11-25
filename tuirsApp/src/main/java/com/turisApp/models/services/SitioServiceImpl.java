package com.turisApp.models.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turisApp.models.dao.ISitioDao;
import com.turisApp.models.entity.Sitio;

@Service
public class SitioServiceImpl implements ISitioService {
	
	@Autowired
	private ISitioDao sitioDao;
	
	@Override
	public List<Sitio> findAll() {
		// TODO Auto-generated method stub
		return (List<Sitio>)sitioDao.findAll();
	}

	@Override
	public Optional<Sitio> findById(String id) {
		// TODO Auto-generated method stub
		return sitioDao.findById(id);
	}

	@Override
	public Sitio save(Sitio sitio) {
		// TODO Auto-generated method stub
		return sitioDao.save(sitio);
	}

	@Override
	public void delete(String id) {
		// TODO Auto-generated method stub
		sitioDao.deleteById(id);
	}

	@Override
	public List<Sitio> findByDepId(Long id_reg) {
		// TODO Auto-generated method stub
		return sitioDao.findByRegionesId(id_reg);
	}

}
