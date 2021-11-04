package com.turisApp.models.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "sitios")
public class Sitio {

	@Id
	private String id_sit;
	private String descripcion_sit;
	private String imagen_sit;
	private String nombre_sit;
	private long id_trg_fk;

	public Sitio() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Sitio(String id_sit, String descripcion_sit, String imagen_sit, String nombre_sit, Integer id_trg_fk) {
		super();
		this.id_sit = id_sit;
		this.descripcion_sit = descripcion_sit;
		this.imagen_sit = imagen_sit;
		this.nombre_sit = nombre_sit;
		this.id_trg_fk = id_trg_fk;
	}



	public String getId_sit() {
		return id_sit;
	}

	public void setId_sit(String id_sit) {
		this.id_sit = id_sit;
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

	public String getNombre_sit() {
		return nombre_sit;
	}

	public void setNombre_sit(String nombre_sit) {
		this.nombre_sit = nombre_sit;
	}

	public long getId_trg_fk() {
		return id_trg_fk;
	}

	public void setId_trg_fk(long id_trg_fk) {
		this.id_trg_fk = id_trg_fk;
	}

	@Override
	public String toString() {
		return "Sitio [id_sit=" + id_sit + ", descripcion_sit=" + descripcion_sit + ", imagen_sit=" + imagen_sit
				+ ", nombre_sit=" + nombre_sit + ", id_trg_fk=" + id_trg_fk + ", getId_sit()=" + getId_sit()
				+ ", getDescripcion_sit()=" + getDescripcion_sit() + ", getImagen_sit()=" + getImagen_sit()
				+ ", getNombre_sit()=" + getNombre_sit() + ", getId_trg_fk()=" + getId_trg_fk() + ", getClass()="
				+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}

	

}
