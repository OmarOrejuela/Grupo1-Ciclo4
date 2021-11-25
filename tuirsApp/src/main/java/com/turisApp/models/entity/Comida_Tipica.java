package com.turisApp.models.entity;

import java.io.Serializable;
import java.util.List;

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
@Document(collection ="comida_tipicas")
public class Comida_Tipica implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Transient
	public static final String SEQUENCE_NAME = "ct_sequence";
	
	@Id
	private long id_pla;
	private String descripcion_plat;
	private String imagen_plat;
	private String nombre_plat;
	
	@DBRef
	public List<Sitio> sitios;
	
	

	public Comida_Tipica() {
		super();
	}

	public Comida_Tipica(String descripcion_plat, String imagen_plat, String nombre_plat, List<Sitio> sitios) {
		super();
		this.descripcion_plat = descripcion_plat;
		this.imagen_plat = imagen_plat;
		this.nombre_plat = nombre_plat;
		this.sitios = sitios;
	}

	public long getId_pla() {
		return id_pla;
	}

	public void setId_pla(long id_pla) {
		this.id_pla = id_pla;
	}

	public String getDescripcion_plat() {
		return descripcion_plat;
	}

	public void setDescripcion_plat(String descripcion_plat) {
		this.descripcion_plat = descripcion_plat;
	}

	public String getImagen_plat() {
		return imagen_plat;
	}

	public void setImagen_plat(String imagen_plat) {
		this.imagen_plat = imagen_plat;
	}

	public String getNombre_plat() {
		return nombre_plat;
	}

	public void setNombre_plat(String nombre_plat) {
		this.nombre_plat = nombre_plat;
	}

	public List<Sitio> getSitios() {
		return sitios;
	}

	public void setSitios(List<Sitio> sitios) {
		this.sitios = sitios;
	}

	@Override
	public String toString() {
		return "Comida_Tipica [id_pla=" + id_pla + ", descripcion_plat=" + descripcion_plat + ", imagen_plat="
				+ imagen_plat + ", nombre_plat=" + nombre_plat + ", sitios=" + sitios + ", getId_pla()=" + getId_pla()
				+ ", getDescripcion_plat()=" + getDescripcion_plat() + ", getImagen_plat()=" + getImagen_plat()
				+ ", getNombre_plat()=" + getNombre_plat() + ", getSitios()=" + getSitios() + ", getClass()="
				+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
	
	
}
	