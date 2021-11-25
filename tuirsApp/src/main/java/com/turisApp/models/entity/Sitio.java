package com.turisApp.models.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "sitios")
public class Sitio {

	@Id
	private String id_sit;
	private String nombre_sit;
	private String descripcion_sit;
	private String imagen_sit;
	
	@DBRef
	public Region regiones;
	

	public Sitio() {
		super();
	}

	public Sitio(String id_sit, String nombre_sit, String descripcion_sit, String imagen_sit, Region regiones) {
		super();
		this.id_sit = id_sit;
		this.nombre_sit = nombre_sit;
		this.descripcion_sit = descripcion_sit;
		this.imagen_sit = imagen_sit;
		this.regiones = regiones;
	}

	public String getId_sit() {
		return id_sit;
	}

	public void setId_sit(String id_sit) {
		this.id_sit = id_sit;
	}

	public String getNombre_sit() {
		return nombre_sit;
	}

	public void setNombre_sit(String nombre_sit) {
		this.nombre_sit = nombre_sit;
	}

	public String getDescripcion_sit() {
		return descripcion_sit;
	}

	public void setDescripcion_sit(String descripcion_sit) {
		this.descripcion_sit = descripcion_sit;
	}

	public String getImagen_sit() {
		return imagen_sit;
	}

	public void setImagen_sit(String imagen_sit) {
		this.imagen_sit = imagen_sit;
	}

	public Region getRegiones() {
		return regiones;
	}

	public void setRegiones(Region regiones) {
		this.regiones = regiones;
	}

	@Override
	public String toString() {
		return "Sitio [id_sit=" + id_sit + ", nombre_sit=" + nombre_sit + ", descripcion_sit=" + descripcion_sit
				+ ", imagen_sit=" + imagen_sit + ", regiones=" + regiones + ", getId_sit()=" + getId_sit()
				+ ", getNombre_sit()=" + getNombre_sit() + ", getDescripcion_sit()=" + getDescripcion_sit()
				+ ", getImagen_sit()=" + getImagen_sit() + ", getRegiones()=" + getRegiones() + ", getClass()="
				+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}



	

}
