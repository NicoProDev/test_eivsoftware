import { Localidades } from "./localidades.model"
export interface VendedorMod {
    id?: number,
    usuarioLogin: string,
    nombre: string, 
    habilitado: boolean,
    fechaNacimiento: string,
    observaciones: string,
    localidad: Localidades

}