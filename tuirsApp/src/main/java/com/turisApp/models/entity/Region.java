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
@Document(collection = "regiones")
public class Region implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Transient
	public static final String SEQUENCE_NAME = "reg_secuence";

	@Id
	private long id_reg;
	private String nombre_reg;
		
	@DBRef
	public Departamento dep;
	
	public Region() {
		super();
	}

	public Region(String nombre_reg, long id_dep_fk) {
		super();
		this.nombre_reg = nombre_reg;
	}

	public long getId_reg() {
		return id_reg;
	}

	public void setId_reg(long id_reg) {
		this.id_reg = id_reg;
	}

	public String getNombre_reg() {
		return nombre_reg;
	}

	public void setNombre_reg(String nombre_reg) {
		this.nombre_reg = nombre_reg;
	}

	public Departamento getDep() {
		return dep;
	}

	public void setDep(Departamento dep) {
		this.dep = dep;
	}

	@Override
	public String toString() {
		return "Region [id_reg=" + id_reg + ", nombre_reg=" + nombre_reg + ", dep=" + dep + ", getId_reg()="
				+ getId_reg() + ", getNombre_reg()=" + getNombre_reg() + ", getDep()=" + getDep() + ", getClass()="
				+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
	
	
	
	
	
}