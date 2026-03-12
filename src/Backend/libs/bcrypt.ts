import {hash} from "bcrypt"

export async function CriptografarSenha(senha:string){
    const salt = 10
    const hashSenha = await hash(senha, salt)

    return hashSenha
}