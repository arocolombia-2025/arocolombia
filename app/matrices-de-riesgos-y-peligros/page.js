"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MatricesDeRiesgosYPeligrosPage() {
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
      {/* Capa oscura */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.65)",
          zIndex: 0,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 1000,
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2.6rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
            background: "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Matrices de Riesgos y Peligros
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            padding: "2rem",
            borderRadius: "1rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            lineHeight: 1.7,
            fontSize: "1.1rem",
            textAlign: "justify",
          }}
        >
          <p style={{ marginBottom: "1rem" }}>
            La matriz de riesgos y peligros es una herramienta esencial dentro del Sistema
            de Gestión de Seguridad y Salud en el Trabajo (SG-SST). Permite identificar,
            evaluar y controlar los riesgos presentes en cada proceso laboral, contribuyendo
            a la prevención de accidentes, incidentes y enfermedades laborales.
          </p>

          <p style={{ marginBottom: "1rem" }}>
            Mediante esta herramienta se analizan los peligros físicos, químicos, biológicos,
            ergonómicos, psicosociales y de seguridad, estableciendo el nivel de riesgo
            y las medidas de intervención necesarias para eliminarlos o minimizarlos.
          </p>

          <h2 style={subtitleStyle}>Importancia</h2>
          <p style={{ marginBottom: "1rem" }}>
            La correcta implementación de la matriz de riesgos y peligros permite priorizar
            los controles, reducir los incidentes laborales, fortalecer la cultura de la
            prevención y cumplir con las exigencias legales vigentes en materia de SST.
          </p>

          <h2 style={subtitleStyle}>Objetivos</h2>
          <ul style={{ textAlign: "left", marginLeft: "1rem", marginBottom: "1rem" }}>
            <li>Identificar los peligros inherentes a las actividades de cada proceso.</li>
            <li>Evaluar el nivel de riesgo y establecer controles preventivos.</li>
            <li>Promover la mejora continua en la gestión de riesgos laborales.</li>
            <li>Garantizar el cumplimiento de la normatividad aplicable al SG-SST.</li>
          </ul>

          <h2 style={subtitleStyle}>Normatividad que exige su implementación</h2>
          <ul style={{ textAlign: "left", marginLeft: "1rem" }}>
            <li>
              <strong>Ley 1562 de 2012:</strong> Establece la obligación de gestionar los
              riesgos laborales mediante la implementación del SG-SST.
            </li>
            <li>
              <strong>Decreto 1072 de 2015:</strong> Compila la normatividad del trabajo
              e incluye la obligación de identificar peligros y valorar riesgos dentro
              del SG-SST.
            </li>
            <li>
              <strong>Resolución 0312 de 2019:</strong> Define los estándares mínimos del
              SG-SST, incluyendo la elaboración y actualización permanente de la matriz de
              identificación de peligros y evaluación de riesgos.
            </li>
          </ul>
        </motion.div>

        <div style={{ marginTop: "2rem" }}>
          <Link href="/">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(111,183,231,0.9)",
              }}
              style={{
                background: "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)",
                color: "#fff",
                padding: "0.9rem 1.4rem",
                borderRadius: 10,
                border: "none",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 6px 18px rgba(0,0,0,0.45)",
              }}
            >
              🏠 Regresar al inicio
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}

const subtitleStyle = {
  fontSize: "1.4rem",
  fontWeight: "700",
  color: "#6FB7E7",
  marginTop: "1.5rem",
  marginBottom: "0.5rem",
};
