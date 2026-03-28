package com.vitaltech.mayayamamoto;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class ExercicioAdapter extends RecyclerView.Adapter<ExercicioAdapter.ViewHolder> {

    ArrayList<Exercicios> lista;
    Context context;

    public ExercicioAdapter(Context context, ArrayList<Exercicios> lista) {
        this.context = context;
        this.lista = lista;
    }

    public static class ViewHolder extends RecyclerView.ViewHolder {
        TextView txtNome, txtFrequencia;
        ImageView imgExercicio;

        public ViewHolder(View itemView) {
            super(itemView);
            txtNome = itemView.findViewById(R.id.txtNome);
            txtFrequencia = itemView.findViewById(R.id.txtFrequencia);
            imgExercicio = itemView.findViewById(R.id.imgExercicio);
        }
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.item_exercicios, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(ViewHolder holder, int position) {
        Exercicios ex = lista.get(position);

        holder.txtNome.setText(ex.getNomeExercicio());
        holder.txtFrequencia.setText(ex.getFrequencia());
        holder.imgExercicio.setImageResource(ex.getImgExercicio());
    }

    @Override
    public int getItemCount() {
        return lista.size();
    }
}
