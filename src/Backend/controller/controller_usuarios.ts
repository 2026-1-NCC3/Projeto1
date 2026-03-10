import type { NovoPaciente } from "../types/types.ts";

export async function ValidarCadastroPaciente(data : NovoPaciente) {
    if (
        !data.nome || data.nome == undefined 
    ) {
        
    }
}