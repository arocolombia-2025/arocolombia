"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DiagnosticoParaTuEmpresa() {
  const secciones = [
    {
      titulo: "¿Por qué es importante un diagnóstico del SG-SST?",
      contenido:
        "Permite conocer el nivel real de cumplimiento normativo y las condiciones de seguridad y salud en el trabajo de tu empresa.",
    },
    {
      titulo: "Componentes principales",
      contenido:
        "Incluye la evaluación de políticas, identificación de peligros, gestión del riesgo, capacitación y seguimiento a los indicadores de salud y seguridad.",
    },
    {
      titulo: "Obligatoriedad",
      contenido:
        "El diagnóstico del SG-SST es exigido por la legislación colombiana (Decreto 1072 de 2015, Resolución 0312 de 2019, entre otras).",
    },
    {
      titulo: "Actualización constante",
      contenido:
        "Debe mantenerse actualizado para asegurar la mejora continua y la prevención efectiva de accidentes laborales.",
    },
  ];

  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % secciones.length);
    }, 10000);

    return () => clearInterval(intervalo);
  }, [secciones.length]);

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
        position: "relative",
        color: "#fff",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 0,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ zIndex: 1, maxWidth: 900 }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
            background: "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          Diagnóstico para tu Empresa
        </h1>

        <motion.div
          key={indice}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            backgroundColor: "rgba(0,0,0,0.45)",
            padding: "1.5rem",
            borderRadius: "12px",
            boxShadow: "0 0 25px rgba(111,183,231,0.8)",
          }}
        >
          <h2 style={{ color: "#A0CFF5", marginBottom: "0.8rem" }}>
            {secciones[indice].titulo}
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            {secciones[indice].contenido}
          </p>
        </motion.div>

        <div style={{ marginTop: "2rem" }}>
          <Link href="/">
            <motion.button
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 20px rgba(111,183,231,0.9)",
              }}
              style={{
                background: "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)",
                border: "none",
                borderRadius: "10px",
                padding: "1rem 2rem",
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
                fontSize: "1rem",
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
