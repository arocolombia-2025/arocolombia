"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PlanesDeEmergencia() {
  return (
    <main style={{
      backgroundImage: "url('/fondo-aro.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
      color: "#fff",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem",
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.65)",
        zIndex: 0,
      }} />

      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{
        position: "relative",
        zIndex: 1,
        maxWidth: "900px",
        textAlign: "center",
      }}>
        <h1 style={{
          fontSize: "2.8rem",
          fontWeight: "bold",
          background: "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "1.5rem",
        }}>Planes de Emergencia</h1>

        <p style={{
          fontSize: "1.2rem",
          color: "#D1D5DB",
          lineHeight: "1.8",
          marginBottom: "2rem",
        }}>
          Los <strong>planes de emergencia</strong> son una herramienta esencial...
        </p>

        <h2 style={{ color: "#6FB7E7", fontSize: "1.8rem", marginBottom: "1rem" }}>Importancia de Implementarlos</h2>
        <p style={{ color: "#ccc", fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Contar con un plan de emergencia garantiza una respuesta adecuada...
        </p>

        <h2 style={{ color: "#6FB7E7", fontSize: "1.8rem", marginBottom: "1rem" }}>Leyes y Normativas Aplicables</h2>
        <ul style={{ listStyle: "none", padding: 0, color: "#D1D5DB", fontSize: "1.1rem", textAlign: "left", margin: "0 auto 2rem", maxWidth: "700px" }}>
          <li>⚖️ Decreto 1072 de 2015 – Establece el SG-SST.</li>
          <li>📘 Resolución 0312 de 2019 – Define los estándares mínimos.</li>
          <li>🏢 Decreto 1443 de 2014 – Reglamenta implementación.</li>
          <li>🚨 NTC 1700 – Guía de planes de emergencia.</li>
        </ul>

        <Link href="/"><button style={buttonStyle}>🏠 Regresar al inicio</button></Link>
      </motion.div>
    </main>
  );
}

const buttonStyle = {
  background: "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)",
  color: "#fff",
  padding: "0.8rem 1.5rem",
  borderRadius: "10px",
  border: "none",
  fontWeight: "bold",
  fontSize: "1rem",
  cursor: "pointer",
  boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
  transition: "all 0.3s ease",
};
