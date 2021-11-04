package com.turisApp.models.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turisApp.models.dao.IDepartamentoDao;
import com.turisApp.models.entity.Departamento;
@Service
public class DepartamentoServiceImpl implements IDepartamentoService {

	@Autowired
	private IDepartamentoDao departamentoDao;

	@Override
	public List<Departamento> findAll() {
		// TODO Auto-generated method stub
		return (List<Departamento>)departamentoDao.findAll();
	}

	@Override
	public Optional<Departamento> findById(long id) {
		// TODO Auto-generated method stub
		return departamentoDao.findById(id);
	}

	@Override
	public Departamento save(Departamento departamento) {
		// TODO Auto-generated method stub
		return departamentoDao.save(departamento);
	}

	@Override
	public void delete(long id) {
		departamentoDao.deleteById(id);

	}

}
