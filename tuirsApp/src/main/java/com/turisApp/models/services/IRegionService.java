package com.turisApp.models.services;

import java.util.List;
import java.util.Optional;

import com.turisApp.models.entity.Region;

public interface IRegionService {

	public List<Region> findAll();
	
	public Optional<Region> findById(long id);
	
	public Region save (Region region);
	
	public void delete (long id);
}
