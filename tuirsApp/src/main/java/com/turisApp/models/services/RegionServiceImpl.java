package com.turisApp.models.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turisApp.models.dao.IRegionDao;
import com.turisApp.models.entity.Region;

@Service
public class RegionServiceImpl implements IRegionService {

	@Autowired
	private IRegionDao regionDao;
	
	@Override
	public List<Region> findAll() {
		return (List<Region>)regionDao.findAll();
	}

	@Override
	public Optional<Region> findById(long id) {
		return regionDao.findById(id);
	}

	@Override
	public Region save(Region region) {
		return regionDao.save(region);
	}

	@Override
	public void delete(long id) {
		regionDao.deleteById(id);
	}

	@Override
	public List<Region> findByDepId(String idDep) {
		return regionDao.findByDepId(idDep);
	}

}
