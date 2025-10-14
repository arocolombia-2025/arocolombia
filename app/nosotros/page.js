"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Nosotros() {
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
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
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
          padding: "3rem 2rem",
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "bold",
            background: "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "2rem",
          }}
        >
          Sobre Nosotros
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#D1D5DB",
            lineHeight: "1.8",
            marginBottom: "2rem",
          }}
        >
          En <strong>ARO COLOMBIA</strong>, somos una empresa dedicada a la
          gestión y administración de riesgos laborales, ofreciendo soluciones
          integrales en seguridad, salud y bienestar en el trabajo.
        </p>

        <h2 style={{ color: "#6FB7E7", marginBottom: "1rem" }}>Nuestra Misión</h2>
        <p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
          Brindar servicios de administración de riesgos que protejan la vida y
          el bienestar de los trabajadores, garantizando ambientes laborales
          seguros, saludables y productivos.
        </p>

        <h2 style={{ color: "#6FB7E7", marginBottom: "1rem" }}>Nuestra Visión</h2>
        <p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
          Ser la empresa líder en outsourcing de administración de riesgos en
          Colombia, reconocida por su compromiso, innovación y calidad humana.
        </p>

        <h2 style={{ color: "#6FB7E7", marginBottom: "1rem" }}>Nuestros Valores</h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "1rem auto",
            color: "#D1D5DB",
            fontSize: "1.1rem",
          }}
        >
          <li>✔ Compromiso con la vida</li>
          <li>✔ Responsabilidad social</li>
          <li>✔ Transparencia</li>
          <li>✔ Trabajo en equipo</li>
          <li>✔ Innovación constante</li>
        </ul>

        <Link href="/">
          <button style={buttonStyle}>⬅ Regresar al inicio</button>
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
  marginTop: "2rem",
};
