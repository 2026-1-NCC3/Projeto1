package com.vitaltech.mayayamamoto;

public class Exercicios {
    private String nomeExercicio;
    private String descricao;
    private String videoUrl;
    private String frequencia;
    private int imgExercicio;

    public String getNomeExercicio(){
        return nomeExercicio;
    }

    public String getDescricao() {
        return descricao;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public String getFrequencia(){
        return frequencia;
    }

    public int getImgExercicio(){
        return imgExercicio;
    }

    public Exercicios(String nomeExercicio, String descricao, String frequencia, int imgExercicio){
        this.nomeExercicio = nomeExercicio;
        this.descricao = descricao;
        this.frequencia = frequencia;
        this.imgExercicio = imgExercicio;
    }
}
