export interface DepartamentoResponse{
    id_dep: string;
    nombre_dep: string;
    paises: Paises;
}

interface Paises{
    id_pais: string;
    nombre_pais: string;
}