"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Clientes() {
  return (
    <main
      style={{
        backgroundImage: "url('/fondo-aro.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        color: "#fff",
        textAlign: "center",
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
          maxWidth: "800px",
          padding: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            background: "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "2rem",
          }}
        >
          Nuestros Clientes
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#D1D5DB",
            marginBottom: "3rem",
          }}
        >
          Conoce algunas de las empresas que confían en ARO Colombia para proteger a sus trabajadores y fortalecer su cultura de seguridad.
        </p>

        <Link href="/">
          <button
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(to bottom, #A0CFF5, #6FB7E7, #2F6CA6)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)")
            }
          >
            Regresar al inicio
          </button>
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
