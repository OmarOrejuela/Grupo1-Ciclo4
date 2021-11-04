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
	private long id_dep_fk ;
	
	public Region() {
		super();
	}

	public Region(String nombre_reg, long id_dep_fk) {
		super();
		this.nombre_reg = nombre_reg;
		this.id_dep_fk = id_dep_fk;
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

	public long getId_dep_fk() {
		return id_dep_fk;
	}

	public void setId_dep_fk(long id_dep_fk) {
		this.id_dep_fk = id_dep_fk;
	}

	@Override
	public String toString() {
		return "Region [id_reg=" + id_reg + ", nombre_reg=" + nombre_reg + ", id_dep_fk=" + id_dep_fk + ", getId_reg()="
				+ getId_reg() + ", getNombre_reg()=" + getNombre_reg() + ", getId_dep_fk()=" + getId_dep_fk()
				+ ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString()
				+ "]";
	}

	
	
	
}
