"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contacto() {
  const [formStatus, setFormStatus] = useState("");
  const whatsappNumber = "573239269999";

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "972815fc-0dc6-49db-9466-8c6928374f7d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setFormStatus("✅ Tu mensaje ha sido enviado correctamente.");
      e.target.reset();
    } else {
      setFormStatus("❌ Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
    }
  }

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
      ></div>

      {/* Contenido principal */}
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
            background:
              "linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "2rem",
          }}
        >
          Contáctanos
        </h1>

        <p
          style={{
            color: "#D1D5DB",
            fontSize: "1.2rem",
            marginBottom: "2rem",
          }}
        >
          Si deseas comunicarte con nosotros, estamos disponibles para atenderte:
        </p>

        <div
          style={{
            color: "#ccc",
            fontSize: "1.1rem",
            marginBottom: "2rem",
          }}
        >
          📧 <strong style={{ color: "#6FB7E7" }}>contacto.arocolombiasas@gmail.com</strong> <br />
          📞 <strong>+57 323 926 9999</strong> <br />
          🏢 Carrera 32 #13-231, Soacha, Colombia
        </div>

        {/* FORMULARIO WEB3FORMS */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.8rem",
            maxWidth: "520px",
            margin: "1.5rem auto",
            backgroundColor: "rgba(255,255,255,0.06)",
            padding: "1.5rem",
            borderRadius: "10px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Tu nombre completo"
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            required
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Escribe tu mensaje aquí..."
            rows="4"
            required
            style={{ ...inputStyle, resize: "none" }}
          ></textarea>

          <button type="submit" style={sendButtonStyle}>
            ✉️ Enviar solicitud
          </button>

          {formStatus && (
            <p style={{ color: "#6FB7E7", marginTop: "1rem" }}>{formStatus}</p>
          )}
        </form>

        {/* BOTÓN WHATSAPP */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=Hola,%20quiero%20recibir%20más%20información%20sobre%20los%20servicios%20de%20ARO%20Colombia`}
          target="_blank"
          rel="noopener noreferrer"
          style={whatsappButtonStyle}
        >
          💬 Contáctanos por WhatsApp
        </a>

        <p style={{ color: "#9CA3AF", marginTop: "1.5rem" }}>
          También puedes seguirnos en nuestras redes sociales para conocer más
          sobre nuestros servicios y novedades.
        </p>

        <Link href="/">
          <button style={backButtonStyle}>⬅ Regresar al inicio</button>
        </Link>
      </motion.div>
    </main>
  );
}

/* === ESTILOS === */
const inputStyle = {
  width: "100%",
  padding: "0.8rem 1rem",
  borderRadius: "8px",
  border: "none",
  fontSize: "1rem",
  outline: "none",
  background: "#fff",
  color: "#000",
};

const sendButtonStyle = {
  width: "100%",
  background: "linear-gradient(to right, #2F6CA6, #6FB7E7, #93C5FD)",
  color: "#fff",
  padding: "0.9rem 1rem",
  borderRadius: "8px",
  border: "none",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 6px 18px rgba(47,108,166,0.35)",
  transition: "all 0.2s ease",
};

const whatsappButtonStyle = {
  display: "inline-block",
  marginTop: "0.8rem",
  background: "linear-gradient(to right, #25D366, #128C7E)",
  color: "#fff",
  padding: "0.8rem 1.3rem",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
  boxShadow: "0 4px 14px rgba(37,211,102,0.3)",
};

const backButtonStyle = {
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