package com.vitaltech.mayayamamoto.activity;

import android.app.DatePickerDialog;
import android.content.Intent;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.Patterns;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.vitaltech.mayayamamoto.network.ApiService;
import com.vitaltech.mayayamamoto.R;
import com.vitaltech.mayayamamoto.network.RetrofitClient;
import com.vitaltech.mayayamamoto.model.Usuarios;

import java.util.Calendar;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class CadastroActivity extends AppCompatActivity {

    // Conexao com a api
    ApiService api = RetrofitClient.getRetrofit().create(ApiService.class);

    EditText editTxtNome, editTxtEmail, editTxtSenha, editTextDataNasc, editTxtTelefone;
    Button btCadastro;

    Intent intent;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.cadastro);

        editTxtNome = findViewById(R.id.editTxtNome);
        editTxtEmail = findViewById(R.id.editTxtEmail);
        editTxtSenha = findViewById(R.id.editTxtSenha);
        editTextDataNasc = findViewById(R.id.editTxtDataNasc);

        editTxtTelefone = findViewById(R.id.editTxtTelefone);
        // fazendo com que o +55 ja apareca quando a tela iniciar
        editTxtTelefone.setText("+55 ");
        editTxtTelefone.setSelection(editTxtTelefone.getText().length());

        btCadastro = findViewById(R.id.btCadastro);

        // Formatacao do telefone
        editTxtTelefone.addTextChangedListener(new TextWatcher() {

            boolean isUpdating;
            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                String str = s.toString().replaceAll("[^\\d]", "");

                // removendo o 55 duplicado
                if (str.startsWith("55")) {
                    str = str.substring(2);
                }

                if (isUpdating){
                    isUpdating = false;
                    return;
                }

                StringBuilder newStr = new StringBuilder("+55 ");

                int i = 0;

                for (char c : str.toCharArray()){
                    if (i == 0) newStr.append("(");
                    if (i == 2) newStr.append(") ");
                    if (i == 7) newStr.append("-");

                    newStr.append(c);
                    i++;
                }

                isUpdating = true;
                editTxtTelefone.setText(newStr.toString());
                editTxtTelefone.setSelection(newStr.length());
            }

            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void afterTextChanged(Editable s) {

            }
        });

        btCadastro.setOnClickListener(v -> {
            // Pegando dados do usuario
            String nomeStr = editTxtNome.getText().toString();
            String emailStr = editTxtEmail.getText().toString();
            String senhaStr = editTxtSenha.getText().toString();
            String data_nasc = editTextDataNasc.getText().toString();
            String telefone = editTxtTelefone.getText().toString();

            boolean erro = false;

            // Verificacando se os campos estao vazios
            if(nomeStr.isEmpty()){
                editTxtNome.setError("Nome obrigatório");
                erro = true;
            }

            if(emailStr.isEmpty()){
                editTxtEmail.setError("Email obrigatório");
                erro = true;
            }

            if(senhaStr.isEmpty()){
                editTxtSenha.setError("Senha obrigatória");
                erro = true;
            }

            if(data_nasc.isEmpty()){
                editTextDataNasc.setError("Data de nascimento obrigatória");
                erro = true;
            }

            if(telefone.length() < 11){
                editTxtTelefone.setError("Telefone incompleto");
                erro = true;
            }

            if(erro){
                return;
            }

            // Validacao de email
            // Patterns.EMAIL_ADDRESS - padrão do android
            // matcher(email) - pega o email digitado
            if(!Patterns.EMAIL_ADDRESS.matcher(emailStr).matches()) {
                editTxtEmail.setError("Email inválido");
                return;
            }

            // Criando o objeto que vai virar JSON (Onde o GSON vai converter automaticamente)
            Usuarios usuario = new Usuarios(nomeStr, emailStr, senhaStr, data_nasc, telefone);

            // Chamando a funcao da api (enqueue - roda em segundo plano sem travar a aplicacao)
            api.cadastrar(usuario).enqueue(new Callback<Usuarios>() {
                @Override
                public void onResponse(Call<Usuarios> call, Response<Usuarios> response) {
                    // Se a API tiver sucesso
                    if (response.isSuccessful()) {
                        Toast.makeText(getApplicationContext(), "Cadastro feito!", Toast.LENGTH_SHORT).show();
                        Intent intent = new Intent(CadastroActivity.this, TrilhaExerciciosActivity.class);
                        startActivity(intent);
                        // Se a API nao tiver sucesso
                    } else {
                        Toast.makeText(getApplicationContext(), "Erro: " + response.code(), Toast.LENGTH_SHORT).show();
                    }
                }

                // Se der Falha de conexao
                @Override
                public void onFailure(Call<Usuarios> call, Throwable t) {
                    Toast.makeText(getApplicationContext(), "Falha: " + t.getMessage(), Toast.LENGTH_SHORT).show();
                }
            });
        });


        // Criar calendario no edit text da data de nascimento
        editTextDataNasc.setOnClickListener(v -> {
            Calendar calendar = Calendar.getInstance();

            int year = calendar.get(Calendar.YEAR);
            int month = calendar.get(Calendar.MONTH);
            int day = calendar.get(Calendar.DAY_OF_MONTH);

            DatePickerDialog datePicker = new DatePickerDialog(
                    CadastroActivity.this,
                    (view, selectedYear, selectedMonth, selectedDay) -> {
                        String data = String.format("%02d/%02d/%d",
                                selectedDay, selectedMonth + 1, selectedYear);
                        editTextDataNasc.setText(data);
                    },
                    year, month, day
            );

            datePicker.show();
        });

        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.cadastro), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
    }
}
