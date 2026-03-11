import {prisma} from '../libs/prisma.ts';
import type { NovoPaciente } from '../types/types.ts';

export async function CadastrarPaciente(data : NovoPaciente) {
    try {
        let usuario = await prisma.usuarios.create({
            data: {
            nome: data.nome,
            email: data.email,
            hash_senha: data.hash_senha,
            data_nascimento: data.data_nascimento,
            telefone: data.telefone
        }
        })

        if (usuario) {
            let paciente = await prisma.pacientes.create({
                data: {
                    id_paciente: usuario.id_usuario,
                    is_ativo: true,
                    primeiro_acesso: true
                }
            })
            return {
               id_paciente: paciente.id_paciente,
                nome: usuario.nome,
                email: usuario.email,
                hash_senha: usuario.hash_senha,
                data_nascimento: usuario.data_nascimento,
                telefone: usuario.telefone,
                primeiro_acesso: paciente.primeiro_acesso,
                is_ativo: paciente.is_ativo
            }
        }
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function ValidarEmail(email:string) {
    try {
        let testEmail = await prisma.usuarios.findUnique({
            where: {
                email: email
            }
        })

        if (testEmail) {
            return false
        } else {
            return true
        }

    } catch (error) {
        console.log(error)
        return error
    }
}