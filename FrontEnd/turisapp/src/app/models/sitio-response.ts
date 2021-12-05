
export interface SitioResponse {
  id_sit: string;
  nombre_sit: string;
  descripcion_sit: string;
  imagen_sit: string;
  regiones: Regiones;
}

interface Regiones {
  id_reg: number;
}
