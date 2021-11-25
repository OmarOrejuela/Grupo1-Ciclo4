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

import com.turisApp.models.entity.Sitio;
import com.turisApp.models.services.ISitioService;

@CrossOrigin(origins = { "http://localhost:4200", "http://localhost" })
@RestController
@RequestMapping("/api/turismo")

public class SitioRestController {
	@Autowired
	private ISitioService sitioService;
	
	@GetMapping("/sitios")
	public List<Sitio> index() {
		return sitioService.findAll();
	}

	@GetMapping("/sitios/{id}")
	public Optional<Sitio> show(@PathVariable String id) {
		return sitioService.findById(id);
	}

	@PostMapping("/sitios")
	@ResponseStatus(HttpStatus.CREATED)
	public Sitio create(@RequestBody Sitio sitio) {
		return sitioService.save(sitio);
	}

	@PutMapping("/sitios/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Sitio update(@RequestBody Sitio sitio, @PathVariable String id) {
		Optional<Sitio> sitioActual = sitioService.findById(id);
		Sitio sitioValues = sitioActual.get();
		sitioValues.setDescripcion_sit(sitio.getDescripcion_sit());
		sitioValues.setImagen_sit(sitio.getImagen_sit());
		sitioValues.setNombre_sit(sitio.getNombre_sit());
		sitioValues.setRegiones(sitio.getRegiones());
		return sitioService.save(sitioValues);
	}

	@DeleteMapping("/sitios/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable String id) {
		sitioService.delete(id);
	}

}
