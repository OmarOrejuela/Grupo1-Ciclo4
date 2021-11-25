package com.turisApp.controllers;

import java.util.List;
import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.turisApp.models.entity.Region;
import com.turisApp.models.services.IRegionService;
import com.turisApp.models.services.SequenceGeneratorService;

@CrossOrigin(origins = {"http://localhost:4200", "http://localhost" })
@RestController
@RequestMapping("/api/turismo")
public class RegionRestController {

	@Autowired
	private IRegionService regService;
	@Autowired
	private SequenceGeneratorService regsecuence;
	
	@GetMapping("/regiones")
	public List<Region> index() {
		return regService.findAll();
	}
	
	@GetMapping("/regiones/{id}")
	public Optional<Region> show(@PathVariable long id) {
		return regService.findById(id);
	}
	
	@PostMapping("/regiones")
	@ResponseStatus(HttpStatus.CREATED)
	public Region create(@RequestBody Region region) {
		region.setId_reg(regsecuence.getSequenceNumber(Region.SEQUENCE_NAME));
		return regService.save(region);
	}
	
	@PutMapping("/regiones/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Region update(@RequestBody Region region, @PathVariable long id) {
		Optional<Region> sitioActual = regService.findById(id);
		Region sitioValues = sitioActual.get();
		sitioValues.setNombre_reg(region.getNombre_reg());
		sitioValues.setDep(region.getDep());
		return regService.save(sitioValues);
	}
	
	@DeleteMapping("/regiones/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		regService.delete(id);
	}
	
	@GetMapping("/regiones/dep/{idDep}")
	public List<Region> deps(@PathVariable String idDep){
		return regService.findByDepId(idDep);
	}
}
