package com.vitaltech.mayayamamoto;

import android.app.DatePickerDialog;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import java.util.Calendar;

public class CadastroActivity extends AppCompatActivity {
    EditText editTextDataNasc;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.cadastro);

        editTextDataNasc = findViewById(R.id.editTxtDataNasc);

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
