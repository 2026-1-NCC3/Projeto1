
export type NovoPaciente = {
    nome: string,
    email: string,
    hash_senha: string,
    data_nascimento: Date,
    telefone: string,
    id_paciente: number,
    is_ativo: boolean,
    primeiro_acesso: boolean
}