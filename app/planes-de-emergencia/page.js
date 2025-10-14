"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PlanesDeEmergencia() {
  return (
    <main
      style={{
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
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "900px",
          textAlign: "center",
        }}
      >
        {/* Título principal */}
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "bold",
            background: "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "1.5rem",
          }}
        >
          Planes de Emergencia
        </h1>

        {/* Introducción */}
        <p
          style={{
            fontSize: "1.2rem",
            color: "#D1D5DB",
            lineHeight: "1.8",
            marginBottom: "2rem",
          }}
        >
          Los <strong>planes de emergencia</strong> son una herramienta esencial
          en toda organización. Permiten actuar de forma rápida, organizada y
          eficaz ante situaciones imprevistas que puedan afectar la integridad
          de las personas, las instalaciones o el entorno.
        </p>

        {/* Importancia */}
        <h2
          style={{
            color: "#6FB7E7",
            fontSize: "1.8rem",
            marginBottom: "1rem",
          }}
        >
          Importancia de Implementarlos
        </h2>
        <p
          style={{
            color: "#ccc",
            fontSize: "1.1rem",
            marginBottom: "1.5rem",
          }}
        >
          Contar con un plan de emergencia garantiza una respuesta adecuada ante
          incendios, terremotos, fugas químicas, inundaciones o cualquier evento
          que ponga en riesgo la vida o el patrimonio. Estos planes reducen los
          daños, optimizan los recursos y fortalecen la cultura de la
          prevención.
        </p>

        {/* Leyes y normativas */}
        <h2
          style={{
            color: "#6FB7E7",
            fontSize: "1.8rem",
            marginBottom: "1rem",
          }}
        >
          Leyes y Normativas Aplicables
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            color: "#D1D5DB",
            fontSize: "1.1rem",
            textAlign: "left",
            margin: "0 auto 2rem",
            maxWidth: "700px",
          }}
        >
          <li>⚖️ <strong>Decreto 1072 de 2015</strong> – Establece el Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST).</li>
          <li>📘 <strong>Resolución 0312 de 2019</strong> – Define los estándares mínimos del SG-SST, incluyendo los planes de emergencia.</li>
          <li>🏢 <strong>Decreto 1443 de 2014</strong> – Reglamenta la implementación del SG-SST en las empresas.</li>
          <li>🚨 <strong>Norma Técnica Colombiana NTC 1700</strong> – Guía para elaborar e implementar planes de emergencia en instituciones.</li>
        </ul>

        {/* Botón de regreso */}
        <Link href="/">
          <button style={buttonStyle}>🏠 Regresar al inicio</button>
        </Link>
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
