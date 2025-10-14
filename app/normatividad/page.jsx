"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CATEGORIES = [
  { label: "Circulares", folder: "circulares", icon: "📄" },
  { label: "Conceptos", folder: "conceptos", icon: "💡" },
  { label: "Decretos", folder: "decretos", icon: "📜" },
  { label: "Documentos Complementarios", folder: "documentos complementarios", icon: "🗂️" },
  { label: "Guías", folder: "guias", icon: "📘" },
  { label: "Leyes", folder: "leyes", icon: "⚖️" },
  { label: "Resoluciones", folder: "resoluciones", icon: "🧾" },
  { label: "Sentencias", folder: "sentencias", icon: "🔨" },
];

export default function NormatividadPage() {
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
          maxWidth: 1100,
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
          Normatividad
        </h1>

        {/* grid 2 filas x 4 columnas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
            alignItems: "stretch",
          }}
        >
          {CATEGORIES.map((cat, i) => {
            // 🔹 Ajuste especial para los botones indicados
            const isSpecial =
              cat.label === "Documentos Complementarios" ||
              cat.label === "Sentencias";

            return (
              <motion.div
                key={cat.folder}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Link href={`/normatividad/${encodeURIComponent(cat.folder)}`}>
                  <motion.button
                    style={{
                      ...buttonStyle,
                      ...(isSpecial && { minWidth: 200, maxWidth: 260, fontSize: "1rem" }),
                    }}
                    whileHover={{
                      boxShadow: "0 0 25px rgba(111,183,231,0.9)",
                      transform: "translateY(-3px)",
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "linear-gradient(to bottom, #A0CFF5, #6FB7E7, #2F6CA6)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)")
                    }
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "1.3rem",
                      }}
                    >
                      <div>{cat.icon}</div>
                      <span>{cat.label}</span>
                    </div>
                  </motion.button>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div style={{ marginTop: 24 }}>
          <Link href="/">
            <motion.button
              style={{
                ...buttonStyle,
                background:
                  "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)",
              }}
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 20px rgba(111,183,231,0.9)",
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

const buttonStyle = {
  background: "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)",
  color: "#fff",
  padding: "1.2rem 1.5rem",
  borderRadius: 12,
  border: "none",
  fontWeight: 700,
  fontSize: "1rem",
  cursor: "pointer",
  boxShadow: "0 6px 18px rgba(0,0,0,0.45)",
  minWidth: 200,
  maxWidth: 260,
  width: "100%",
};
