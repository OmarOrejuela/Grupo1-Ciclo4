export interface RegionResponse {
  id_reg: number
  nombre_reg: string
  dep: Dep
}

interface Dep {
  id_dep: number
  nombre_dep: string
  paises: Paises
}

interface Paises {
  id_pais: number
  nombre_pais: string
}
