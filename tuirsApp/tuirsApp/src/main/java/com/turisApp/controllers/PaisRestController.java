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

import com.turisApp.models.entity.Pais;
import com.turisApp.models.services.IPaisService;
import com.turisApp.models.services.SequenceGeneratorService;

@CrossOrigin(origins = { "http://localhost:4200", "http://localhost" })
@RestController
@RequestMapping("/api")
public class PaisRestController {
	
	@Autowired
	private IPaisService paisService;
	@Autowired
	private SequenceGeneratorService service;

	@GetMapping("/paises")
	public List<Pais> index() {
		return paisService.findAll();
	}

	@GetMapping("/paises/{id}")
	public Optional<Pais> show(@PathVariable long id) {
		return paisService.findById(id);
	}

	@PostMapping("/paises")
	@ResponseStatus(HttpStatus.CREATED)
	public Pais create(@RequestBody Pais pais) {
		pais.setId_pais(service.getSequenceNumber(Pais.SEQUENCE_NAME));
		return paisService.save(pais);
	}

	@PutMapping("/paises/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Pais update(@RequestBody Pais pais, @PathVariable long id) {
		Optional<Pais> sitioActual = paisService.findById(id);
		Pais sitioValues = sitioActual.get();
		sitioValues.setNombre_pais(pais.getNombre_pais());
		return paisService.save(sitioValues);
	}

	@DeleteMapping("/paises/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		paisService.delete(id);
	}
}
