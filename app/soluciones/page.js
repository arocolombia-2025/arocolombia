"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Soluciones() {
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
        padding: "3rem 2rem",
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
      ></div>

      {/* Contenido principal */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Título principal */}
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            background: "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Soluciones integrales y personalizadas
        </h1>

        {/* Subtítulo */}
        <p
          style={{
            fontSize: "1.2rem",
            color: "#D1D5DB",
            lineHeight: "1.8",
            marginBottom: "3rem",
          }}
        >
          En <strong>ARO Colombia</strong> ofrecemos estrategias efectivas para fortalecer la{" "}
          <strong>Seguridad y Salud en el Trabajo</strong>, adaptadas a las necesidades de cada empresa.
        </p>

        {/* Lista de servicios con fondo azul y sin animaciones */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
            justifyContent: "center",
          }}
        >
          {[
            { icon: "🧯", title: "Planes de Emergencia" },
            { icon: "⚖️", title: "Consulta de Normatividad" },
            { icon: "🎓", title: "Capacitaciones" },
            { icon: "🧩", title: "Matriz de Riesgos y Peligros" },
            { icon: "🩺", title: "Diagnóstico para tu Empresa" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)",
                padding: "1.5rem",
                borderRadius: "15px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.45)",
                textAlign: "center",
                fontSize: "1.05rem",
                fontWeight: "600",
                color: "#fff",
              }}
            >
              <div
                style={{
                  fontSize: "1.3rem",
                  marginBottom: "0.5rem",
                  color: "#fff",
                }}
              >
                {item.icon}
              </div>
              <div>{item.title}</div>
            </div>
          ))}
        </div>

        {/* Botón de regreso */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <motion.button
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 20px rgba(111,183,231,0.9)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            style={{
              background: "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)",
              color: "#fff",
              padding: "0.9rem 1.5rem",
              borderRadius: "10px",
              border: "none",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
              marginTop: "3rem",
              boxShadow: "0 6px 18px rgba(0,0,0,0.45)",
            }}
          >
            🏠 Regresar al inicio
          </motion.button>
        </Link>
      </div>
    </main>
  );
}
