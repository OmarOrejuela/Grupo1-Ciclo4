package com.turisApp.models.entity;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "paises")
public class Pais implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Transient
	public static final String SEQUENCE_NAME = "pais_sequence";

	@Id
	private long id_pais;
	private String nombre_pais;

	public Pais() {
	}

	public Pais(String nombre_pais) {
		super();
		this.nombre_pais = nombre_pais;
	}

	public long getId_pais() {
		return id_pais;
	}

	public void setId_pais(long id_pais) {
		this.id_pais = id_pais;
	}

	public String getNombre_pais() {
		return nombre_pais;
	}

	public void setNombre_pais(String nombre_pais) {
		this.nombre_pais = nombre_pais;
	}

	@Override
	public String toString() {
		return "Pais [id_pais=" + id_pais + ", nombre_pais=" + nombre_pais + ", getId_pais()=" + getId_pais()
				+ ", getNombre_pais()=" + getNombre_pais() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
				+ ", toString()=" + super.toString() + "]";
	}

}
