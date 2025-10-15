"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MatricesRiesgosYPeligros() {
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
        overflow: "hidden",
      }}
    >
      {/* Capa oscura de fondo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.65)",
          zIndex: 0,
        }}
      />

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 900,
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
            background: "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Matrices de Riesgos y Peligros
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.6",
            marginBottom: "2rem",
          }}
        >
          En ARO Colombia ayudamos a tu empresa a identificar, evaluar y
          controlar los riesgos que pueden afectar la seguridad y salud de tus
          trabajadores. Nuestras matrices permiten tomar decisiones acertadas
          para minimizar los peligros en cada área de trabajo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "1.5rem",
            borderRadius: "12px",
            marginBottom: "2rem",
            textAlign: "left",
            fontSize: "1rem",
            lineHeight: "1.6",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "0.5rem",
              color: "#6FB7E7",
            }}
          >
            Importancia de la matriz
          </h2>
          <p>
            La matriz de identificación de peligros y valoración de riesgos es
            fundamental para el Sistema de Gestión de Seguridad y Salud en el
            Trabajo (SG-SST). Permite establecer controles eficaces y garantizar
            ambientes laborales seguros.
          </p>

          <h2
            style={{
              fontSize: "1.5rem",
              marginTop: "1.5rem",
              marginBottom: "0.5rem",
              color: "#6FB7E7",
            }}
          >
            Marco legal aplicable
          </h2>
          <p>
            Las matrices deben elaborarse conforme a los lineamientos del
            Decreto 1072 de 2015, Resolución 0312 de 2019 y demás normas
            vigentes sobre prevención de riesgos laborales.
          </p>
        </motion.div>

        {/* Botón de regreso */}
        <Link href="/">
          <motion.button
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 20px rgba(111,183,231,0.9)",
              filter: "brightness(1.2)",
            }}
            style={{
              background:
                "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)",
              color: "#fff",
              padding: "0.9rem 1.8rem",
              borderRadius: 10,
              border: "none",
              fontWeight: "700",
              fontSize: "1rem",
              cursor: "pointer",
              boxShadow: "0 6px 18px rgba(0,0,0,0.45)",
            }}
          >
            🏠 Regresar al inicio
          </motion.button>
        </Link>
      </motion.div>
    </main>
  );
}
