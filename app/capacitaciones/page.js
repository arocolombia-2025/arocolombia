"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Capacitaciones() {
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
      {/* Capa oscura de fondo */}
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

      {/* Contenido principal con animación */}
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
        {/* Título principal */}
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
          Capacitaciones ARO Colombia
        </h1>

        {/* Introducción general */}
        <p
          style={{
            fontSize: "1.2rem",
            color: "#D1D5DB",
            lineHeight: "1.8",
            marginBottom: "2rem",
          }}
        >
          En ARO Colombia, las capacitaciones se desarrollan a todo nivel dentro
          de las organizaciones, con el objetivo de fortalecer la cultura de
          prevención y autocuidado. Estas actividades se imparten como{" "}
          <strong>sensibilizaciones</strong> para garantizar una mayor acogida,
          receptividad y entendimiento de los temas por parte de todos los
          trabajadores.
        </p>

        {/* Lista de capacitaciones */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          style={{
            listStyle: "none",
            padding: 0,
            margin: "2rem auto",
            color: "#D1D5DB",
            fontSize: "1.1rem",
            textAlign: "left",
            maxWidth: "700px",
            lineHeight: "1.8",
          }}
        >
          <li>🧑‍🏫 <strong>Inducción y Reinducción en Seguridad y Salud en el Trabajo:</strong> Dirigida a trabajadores nuevos y antiguos para reforzar políticas, normas y responsabilidades del SG-SST.</li>
          <li>🚒 <strong>Prevención y Control de Incendios:</strong> Entrenamiento sobre tipos de fuego, manejo de extintores y evacuación.</li>
          <li>❤️ <strong>Primeros Auxilios:</strong> Formación para la atención inicial de emergencias médicas.</li>
          <li>⚙️ <strong>Ergonomía y Pausas Activas:</strong> Promoción de hábitos posturales saludables y ejercicios de estiramiento.</li>
          <li>🧯 <strong>Plan de Emergencias y Evacuación:</strong> Procedimientos de respuesta ante emergencias y roles de brigadas.</li>
          <li>🌿 <strong>Gestión Ambiental y Manejo de Residuos:</strong> Sensibilización sobre el cuidado ambiental y disposición correcta de residuos.</li>
          <li>🧠 <strong>Riesgos Psicosociales y Estrés Laboral:</strong> Identificación, prevención y manejo de factores psicosociales.</li>
          <li>🧤 <strong>Elementos de Protección Personal (EPP):</strong> Uso, mantenimiento y obligatoriedad de los EPP en cada área de trabajo.</li>
        </motion.ul>

        {/* Mensaje final */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "#AFCBDF",
            marginTop: "1rem",
          }}
        >
          Cada capacitación busca fomentar el compromiso con la seguridad y el
          bienestar, fortaleciendo una cultura preventiva en toda la empresa.
        </p>

        {/* Botón regresar */}
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
