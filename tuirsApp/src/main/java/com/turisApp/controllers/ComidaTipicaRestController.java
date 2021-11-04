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

import com.turisApp.models.entity.Comida_Tipica;
import com.turisApp.models.services.IComidaTipicaService;
import com.turisApp.models.services.SequenceGeneratorService;

@CrossOrigin(origins = { "http://localhost:4200", "http://localhost" })
@RestController
@RequestMapping("/api")
public class ComidaTipicaRestController {
	@Autowired
	private IComidaTipicaService comidaTipicaService;
	@Autowired
	private SequenceGeneratorService service;
	
	@GetMapping("/comida")
	public List<Comida_Tipica> index(){
		return comidaTipicaService.findAll();
	}
	
	@GetMapping("/comida/{id}")
	public Optional<Comida_Tipica> show(@PathVariable long id){
		return comidaTipicaService.findById(id);
	}
	
	@PostMapping("/comida")
	@ResponseStatus(HttpStatus.CREATED)
	public Comida_Tipica create(@RequestBody Comida_Tipica comida_Tipica) {
		comida_Tipica.setId_pla(service.getSequenceNumber(Comida_Tipica.SEQUENCE_NAME));
		return comidaTipicaService.save(comida_Tipica);
	}
	
	@PutMapping("/comida/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Comida_Tipica update(@RequestBody Comida_Tipica comida_Tipica, @PathVariable long id) {
		Optional<Comida_Tipica> comidaActual = comidaTipicaService.findById(id);
		Comida_Tipica comidaValues = comidaActual.get();
		comidaValues.setDescripcion_plat(comida_Tipica.getDescripcion_plat());
		comidaValues.setImagen_plat(comida_Tipica.getImagen_plat());
		comidaValues.setNombre_plat(comida_Tipica.getNombre_plat());
		comidaValues.setId_sit_fk(comida_Tipica.getId_sit_fk());
		return comidaTipicaService.save(comidaValues);
	}
	
	@DeleteMapping("comida/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable long id) {
		comidaTipicaService.delete(id);
	}
}
