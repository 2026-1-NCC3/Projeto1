import { useState } from "react"
import { useNavigate } from "react-router-dom"

function NewPatient() {
  const navigate = useNavigate()
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const handleSalvar = () => {
    alert(`Nome: ${nome}, Email: ${email}`)
    navigate("/patients")
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>

      <button
        onClick={() => navigate("/patients")}
        style={{ background: "none", border: "none", color: "#3EBAD2", fontWeight: "bold", fontSize: "16px", marginBottom: "16px", cursor: "pointer" }}>
        ← Voltar
      </button>

      <h2 style={{ color: "#3EBAD2", fontWeight: "bold", letterSpacing: "2px", marginBottom: "32px" }}>
        NOVO PACIENTE
      </h2>

      <div className="d-flex flex-column gap-3">

        <div>
          <label style={{ fontWeight: "500" }}>Nome</label>
          <input
            type="text"
            className="form-control mt-1"
            style={{ borderRadius: "8px" }}
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
        </div>

        <div>
          <label style={{ fontWeight: "500" }}>Email</label>
          <input
            type="email"
            className="form-control mt-1"
            style={{ borderRadius: "8px" }}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

      </div>

      <div className="mt-4 d-flex gap-3">
        <button
          onClick={handleSalvar}
          style={{ backgroundColor: "#01577A", color: "white", border: "none", borderRadius: "8px", padding: "10px 32px", fontWeight: "500", fontSize: "16px" }}>
          Salvar
        </button>
        <button
          onClick={() => navigate("/patients")}
          style={{ backgroundColor: "#ccc", color: "#333", border: "none", borderRadius: "8px", padding: "10px 32px", fontWeight: "500", fontSize: "16px" }}>
          Cancelar
        </button>
      </div>

    </div>
  )
}

export default NewPatient