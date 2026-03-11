import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/logo_maya.png"

function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const navigate = useNavigate()
  const handleLogin = () => { navigate("/patients") }


  return (
    <div style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#fff" }}>
      <div style={{ width: "400px" }}>
        
        <div className="text-center mb-5">
          <img src={logo} alt="Maya Yamamoto RPG" style={{ height: "150px" }} />
        </div>

        <div className="mb-3">
          <label style={{ fontWeight: "500" }}>Email</label>
          <input
            type="email"
            className="form-control mt-1"
            style={{ backgroundColor: "#e9e9e9", border: "none", borderRadius: "20px", padding: "10px 16px" }}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label style={{ fontWeight: "500" }}>Senha</label>
          <input
            type="password"
            className="form-control mt-1"
            style={{ backgroundColor: "#e9e9e9", border: "none", borderRadius: "20px", padding: "10px 16px" }}
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
        </div>

        <div className="text-center">
          <button
            onClick={handleLogin}
            style={{ backgroundColor: "#01577A", color: "white", border: "none", borderRadius: "8px", padding: "10px 40px", fontWeight: "500", fontSize: "16px" }}
          >
            Entrar
          </button>
        </div>

      </div>
    </div>
  )
}

export default Login