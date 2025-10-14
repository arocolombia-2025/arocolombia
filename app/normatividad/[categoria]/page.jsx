"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CategoriaPage({ params }) {
  // Next.js 15: unwrap params (React.use) para Client Component
  const resolved = React.use(params);
  const categoria = decodeURIComponent(resolved?.categoria ?? "");

  const [archivos, setArchivos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (!categoria) {
        setArchivos([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const res = await fetch(`/api/pdfs?categoria=${encodeURIComponent(categoria)}`);
        if (!res.ok) {
          console.error("API /api/pdfs responded:", res.status, await res.text());
          setArchivos([]);
          setLoading(false);
          return;
        }
        const data = await res.json();
        setArchivos(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching PDFs:", err);
        setArchivos([]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [categoria]);

  return (
    <main
      style={{
        backgroundImage: "url('/fondo-aro.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: "2rem",
        position: "relative",
        color: "#fff",
      }}
    >
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.65)", zIndex: 0 }} />

      <motion.div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 1000, padding: "2rem" }}
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Link href="/normatividad">
          <button style={{ ...backBtnStyle }}>⬅ Regresar al listado</button>
        </Link>

        <h1 style={{ fontSize: 28, fontWeight: 700, margin: "1rem 0", textTransform: "capitalize",
             background: "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          {categoria}
        </h1>

        {loading ? (
          <p style={{ color: "#D1D5DB" }}>Cargando documentos...</p>
        ) : archivos.length === 0 ? (
          <p style={{ color: "#D1D5DB" }}>No hay documentos disponibles en esta categoría.</p>
        ) : (
          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {archivos.map((pdf, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.03 }} style={{ background: "rgba(255,255,255,0.06)", padding: 16, borderRadius: 12, boxShadow: "0 8px 20px rgba(0,0,0,0.5)" }}>

                <div style={{ color: "#fff", fontWeight: 700, marginBottom: 12, wordBreak: "break-word" }}>📄 {pdf.nombre}</div>

                <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
                  <a href={pdf.url} target="_blank" rel="noopener noreferrer"
                     style={viewBtnStyle}>Ver</a>
                  <a href={pdf.url} download style={downloadBtnStyle}>Descargar</a>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div style={{ marginTop: 20 }}>
          <Link href="/"><button style={mainBtnStyle}>🏠 Ir al inicio</button></Link>
        </div>
      </motion.div>
    </main>
  );
}

const buttonStyle = {
  background: "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)",
  color: "#fff",
  padding: "1rem 1.5rem",
  borderRadius: 12,
  border: "none",
  fontWeight: 700,
  cursor: "pointer",
  boxShadow: "0 6px 18px rgba(0,0,0,0.45)",
  minWidth: 200,
};

const backBtnStyle = {
  background: "linear-gradient(to bottom, #FFD700, #E6B800, #B38F00)",
  color: "#000",
  padding: "0.6rem 1rem",
  borderRadius: 10,
  border: "none",
  fontWeight: 700,
};

const viewBtnStyle = {
  background: "linear-gradient(to bottom, #A0CFF5, #6FB7E7, #2F6CA6)",
  color: "#000",
  padding: "0.5rem 0.9rem",
  borderRadius: 10,
  textDecoration: "none",
  fontWeight: 700,
};

const downloadBtnStyle = {
  background: "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)",
  color: "#fff",
  padding: "0.5rem 0.9rem",
  borderRadius: 10,
  textDecoration: "none",
  fontWeight: 700,
};

const mainBtnStyle = {
  background: "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)",
  color: "#fff",
  padding: "0.8rem 1.2rem",
  borderRadius: 10,
  border: "none",
  fontWeight: 700,
};
