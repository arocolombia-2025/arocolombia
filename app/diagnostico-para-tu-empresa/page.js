"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function DiagnosticoParaTuEmpresa() {
  const secciones = [
    {
      titulo: "Diagnóstico del Sistema de Gestión SST",
      contenido:
        "El diagnóstico permite conocer el estado real del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST). Este proceso identifica fortalezas, debilidades y oportunidades de mejora para cumplir con la normatividad vigente.",
    },
    {
      titulo: "Importancia del Diagnóstico",
      contenido:
        "Un diagnóstico actualizado garantiza la prevención de riesgos laborales, mejora la productividad y asegura el cumplimiento legal. Además, facilita la toma de decisiones para optimizar los recursos de la empresa.",
    },
    {
      titulo: "Componentes Evaluados",
      contenido:
        "Se revisan aspectos como la política de seguridad y salud en el trabajo, el plan anual, la identificación de peligros, la evaluación de riesgos, la capacitación del personal, los comités paritarios y la gestión documental.",
    },
    {
      titulo: "Actualización del Sistema",
      contenido:
        "El diagnóstico debe realizarse periódicamente para mantener actualizados los procesos, procedimientos y controles del SG-SST, asegurando la mejora continua de la empresa.",
    },
    {
      titulo: "Normatividad Aplicable",
      contenido:
        "Resolución 0312 de 2019, Decreto 1072 de 2015, Ley 1562 de 2012 y demás normas relacionadas obligan a las empresas a implementar y mantener actualizado su Sistema de Gestión de Seguridad y Salud en el Trabajo.",
    },
  ];

  const [indice, setIndice] = useState(0);

  // Ciclo infinito del contenido
  useEffect(() => {
    const timer = setInterval(() => {
      setIndice((prev) => (prev + 1) % secciones.length);
    }, 22000); // ⏱️ cada ciclo total dura 22s por sección (título + contenido)
    return () => clearInterval(timer);
  }, [secciones.length]);

  const seccion = secciones[indice];

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
      {/* Capa oscura */}
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
      />

      <motion.div
        key={indice}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        style={{
          position: "relative",
          zIndex: 1,
          padding: "3rem 2rem",
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }} // Título visible por 5s
          style={{
            fontSize: "2.8rem",
            fontWeight: "bold",
            background:
              "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "2rem",
          }}
        >
          {seccion.titulo}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 10, delay: 5 }} // Contenido visible 2x más tiempo
          style={{
            fontSize: "1.2rem",
            color: "#D1D5DB",
            lineHeight: "1.8",
            marginBottom: "2rem",
          }}
        >
          {seccion.contenido}
        </motion.p>

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
  marginTop: "2rem",
};
