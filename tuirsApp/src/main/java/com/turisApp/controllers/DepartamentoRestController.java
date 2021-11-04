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

	import com.turisApp.models.entity.Departamento;
	import com.turisApp.models.services.IDepartamentoService;
	import com.turisApp.models.services.SequenceGeneratorService;

	@CrossOrigin(origins = { "http://localhost:4200", "http://localhost" })
	@RestController
	@RequestMapping("/api")
	public class DepartamentoRestController {		
		@Autowired
		private IDepartamentoService departamentoService;
		@Autowired
		private SequenceGeneratorService service;

		@GetMapping("/departamentos")
		public List<Departamento> index() {
			return departamentoService.findAll();
		}

		@GetMapping("/departamentos/{id}")
		public Optional<Departamento> show(@PathVariable long id) {
			return departamentoService.findById(id);
		}

		@PostMapping("/departamentos")
		@ResponseStatus(HttpStatus.CREATED)
		public Departamento create(@RequestBody Departamento departamento) {
			departamento.setId_dep(service.getSequenceNumber(Departamento.SEQUENCE_NAME));
			return departamentoService.save(departamento);
		}

		@PutMapping("/departamentos/{id}")
		@ResponseStatus(HttpStatus.CREATED)
		public Departamento update(@RequestBody Departamento departamento, @PathVariable long id) {
			Optional<Departamento> sitioActual = departamentoService.findById(id);
			Departamento sitioValues = sitioActual.get();
			sitioValues.setNombre_dep(departamento.getNombre_dep());
			sitioValues.setId_pais_fk(departamento.getId_pais_fk());
			return departamentoService.save(sitioValues);
		}

		@DeleteMapping("/departamentos/{id}")
		@ResponseStatus(HttpStatus.NO_CONTENT)
		public void delete(@PathVariable Long id) {
			departamentoService.delete(id);
		}
	
}
