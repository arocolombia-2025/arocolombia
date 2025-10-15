"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MatricesDeRiesgosYPeligros() {
  return (
    <main
      style={{
        backgroundImage: "url('/fondo-aro.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        position: "relative",
        color: "#fff",
      }}
    >
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.65)", zIndex: 0 }} />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 1000, textAlign: "center" }}
      >
        <h1 style={{
          fontSize: "2.6rem",
          fontWeight: 700,
          marginBottom: "1.5rem",
          background: "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Matrices de Riesgos y Peligros
        </h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{
          background: "rgba(255,255,255,0.08)",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          lineHeight: 1.7,
          fontSize: "1.1rem",
          textAlign: "justify",
        }}>
          <p>La matriz de riesgos y peligros permite identificar, evaluar y controlar los riesgos presentes en cada proceso laboral.</p>
          <p>Se analizan peligros físicos, químicos, biológicos, ergonómicos, psicosociales y de seguridad, estableciendo controles para minimizarlos.</p>

          <h2 style={subtitleStyle}>Importancia</h2>
          <p>Permite priorizar controles, reducir incidentes laborales y cumplir con la normatividad vigente.</p>

          <h2 style={subtitleStyle}>Objetivos</h2>
          <ul style={{ textAlign: "left", marginLeft: "1rem" }}>
            <li>Identificar peligros inherentes.</li>
            <li>Evaluar riesgos y establecer controles.</li>
            <li>Promover mejora continua.</li>
            <li>Cumplir la normatividad del SG-SST.</li>
          </ul>

          <h2 style={subtitleStyle}>Normatividad</h2>
          <ul style={{ textAlign: "left", marginLeft: "1rem" }}>
            <li>Ley 1562 de 2012</li>
            <li>Decreto 1072 de 2015</li>
            <li>Resolución 0312 de 2019</li>
          </ul>
        </motion.div>

        <Link href="/">
          <button style={buttonStyle}>🏠 Regresar al inicio</button>
        </Link>
      </motion.div>
    </main>
  );
}

const subtitleStyle = { fontSize: "1.4rem", fontWeight: 700, color: "#6FB7E7", marginTop: "1.5rem", marginBottom: "0.5rem" };
const buttonStyle = { background: "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)", color: "#fff", padding: "0.8rem 1.5rem", borderRadius: 10, border: "none", fontWeight: "bold", fontSize: "1rem", cursor: "pointer", boxShadow: "0 4px 10px rgba(0,0,0,0.4)", transition: "all 0.3s ease" };
