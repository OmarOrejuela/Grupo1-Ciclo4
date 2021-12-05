export interface SitioResponse {
  id_sit: string;
  nombre_sit: string;
  descripcion_sit: string;
  imagen_sit: string;
  regiones: Regiones;
}

interface Regiones {
  id_reg: number;
  nombre_reg: string;
  dep: Dep;
}

interface Dep {
  id_dep: number;
  nombre_dep: string;
  paises: Paises;
}

interface Paises {
  id_pais: number;
  nombre_pais: string;
}