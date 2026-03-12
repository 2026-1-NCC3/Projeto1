import { CriptografarSenha } from "../libs/bcrypt.ts";
import { CadastrarPaciente, ValidarEmail } from "../model/usuarios.ts";
import type { NovoPaciente } from "../types/types.ts";
import { ERROR_REQUIRED_FIELDS, ERROR_USED_EMAIL } from "../util/errors.ts";

export async function ValidarCadastroPaciente(data : NovoPaciente) {
    if (
        !data.nome || data.nome == undefined || data.nome.length > 100 ||
        !data.email || data.email == undefined || data.email.length > 256 ||
        !data.hash_senha || data.hash_senha == undefined || data.hash_senha.length > 200 ||
        !data.data_nascimento || data.data_nascimento == undefined || !(new Date(data.data_nascimento))  ||
        !data.telefone || data.telefone == undefined || data.telefone.length > 15
    ) {
        return {
            data: ERROR_REQUIRED_FIELDS,
            status: ERROR_REQUIRED_FIELDS.status_code
        }
    }

    let verificarEmail = await ValidarEmail(data.email)
    if (!verificarEmail) {
        return {
            data: ERROR_USED_EMAIL,
            status: ERROR_USED_EMAIL.status_code
        }
    }

    data.data_nascimento = new Date(data.data_nascimento)
    data.hash_senha = await CriptografarSenha(data.hash_senha)

    let cadastrarPaciente = await CadastrarPaciente(data)
    return {
        data: cadastrarPaciente,
        status: cadastrarPaciente ? 200 : 400
    }
}