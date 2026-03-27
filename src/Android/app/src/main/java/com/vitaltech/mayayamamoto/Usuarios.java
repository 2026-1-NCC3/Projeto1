package com.vitaltech.mayayamamoto;

public class Usuarios {
    private int id;
    private String nome;
    private String email;
    private String hash_senha;
    private String data_nascimento;
    private String telefone;

    public String getNome(){
        return nome;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public String getEmail(){
        return nome;
    }

    public void setEmail(String email){
        this.email = email;
    }
}
