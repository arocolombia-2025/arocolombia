"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Wrench, Phone } from "lucide-react"; // 👈 Íconos personalizados

export default function Inicio() {
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
      {/* Capa oscura sobre el fondo */}
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

      {/* Contenido principal */}
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
        {/* Logo */}
        <motion.img
          src="/logo-aro.png"
          alt="Logo ARO Colombia"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            width: "180px",
            marginBottom: "2rem",
            borderRadius: "12px",
            backgroundColor: "rgba(255,255,255,0.1)",
            padding: "0.5rem",
          }}
        />

        {/* Eslogan */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            fontSize: "2.8rem",
            fontWeight: "bold",
            background: "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "1rem",
          }}
        >
          Cuidamos tu trabajo, protegemos tu familia.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          style={{
            fontSize: "1.2rem",
            color: "#D1D5DB",
            marginBottom: "3rem",
          }}
        >
          En ARO Colombia creemos que la seguridad va más allá del trabajo:
          cuidamos tu vida y la tranquilidad de tu familia.
        </motion.p>

        {/* Botones animados con íconos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Botón Nosotros */}
          <Link href="/nosotros" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 15px 3px rgba(111,183,231,0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              style={buttonStyle}
            >
              <Users size={18} style={{ marginRight: "8px" }} />
              Nosotros
            </motion.button>
          </Link>

          {/* Botón Soluciones */}
          <Link href="/soluciones" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 15px 3px rgba(111,183,231,0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              style={buttonStyle}
            >
              <Wrench size={18} style={{ marginRight: "8px" }} />
              Soluciones
            </motion.button>
          </Link>

          {/* Botón Contacto */}
          <Link href="/contacto" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 15px 3px rgba(111,183,231,0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              style={buttonStyle}
            >
              <Phone size={18} style={{ marginRight: "8px" }} />
              Contacto
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}

// 🎨 Estilo base de los botones
const buttonStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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


