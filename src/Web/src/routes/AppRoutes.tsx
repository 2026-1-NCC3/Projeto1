import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Layout from "../components/Layout"
import Login from "../pages/Login/Login"
import Patients from "../pages/Patients/Patients"
import PatientProfile from "../pages/Patients/PatientProfile"
import NewPatient from "../pages/Patients/NewPatient"
import Trails from "../pages/Trails/Trails"
import TrailForm from "../pages/Trails/TrailForm"
import Videos from "../pages/Videos/Videos"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/patients" element={<Layout><Patients /></Layout>} />
        <Route path="/patients/:id" element={<Layout><PatientProfile /></Layout>} />
        <Route path="/patients/new" element={<Layout><NewPatient /></Layout>} />
        <Route path="/trails" element={<Layout><Trails /></Layout>} />
        <Route path="/trails/new" element={<Layout><TrailForm /></Layout>} />
        <Route path="/trails/:id" element={<Layout><TrailForm /></Layout>} />
        <Route path="/videos" element={<Layout><Videos /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes