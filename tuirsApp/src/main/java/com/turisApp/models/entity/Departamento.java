package com.turisApp.models.entity;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "departamentos")
public class Departamento implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Transient
	public static final String SEQUENCE_NAME = "dep_secuence";

	@Id
	private long id_dep;
	private String nombre_dep;

	@DBRef
	private Pais paises;

	public Departamento() {
		super();
	}

	public Departamento(String nombre_dep, Pais paises) {
		super();
		this.nombre_dep = nombre_dep;
		this.paises = paises;
	}

	public long getId_dep() {
		return id_dep;
	}

	public void setId_dep(long id_dep) {
		this.id_dep = id_dep;
	}

	public String getNombre_dep() {
		return nombre_dep;
	}

	public void setNombre_dep(String nombre_dep) {
		this.nombre_dep = nombre_dep;
	}

	public Pais getPaises() {
		return paises;
	}

	public void setPaises(Pais paises) {
		this.paises = paises;
	}

	@Override
	public String toString() {
		return "Departamento [id_dep=" + id_dep + ", nombre_dep=" + nombre_dep + ", paises=" + paises + ", getId_dep()="
				+ getId_dep() + ", getNombre_dep()=" + getNombre_dep() + ", getPaises()=" + getPaises()
				+ ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString()
				+ "]";
	}

}
