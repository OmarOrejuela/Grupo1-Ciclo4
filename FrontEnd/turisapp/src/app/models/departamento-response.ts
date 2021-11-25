export interface DepartamentoResponse{
    id_dep: number;
    nombre_dep: string;
    paises: Paises;
}

interface Paises{
    id_pais: number;
    nombre_pais: string;
}