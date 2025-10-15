"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function DiagnosticoParaTuEmpresa() {
  const secciones = [
    {
      titulo: "Diagnóstico del Sistema de Gestión SST",
      contenido: "Permite conocer el estado real del SG-SST, identificando fortalezas, debilidades y oportunidades de mejora.",
    },
    {
      titulo: "Importancia del Diagnóstico",
      contenido: "Garantiza prevención de riesgos laborales, mejora productividad y asegura cumplimiento legal.",
    },
    {
      titulo: "Componentes Evaluados",
      contenido: "Política de SST, plan anual, identificación de peligros, evaluación de riesgos, capacitación, comités y gestión documental.",
    },
    {
      titulo: "Actualización del Sistema",
      contenido: "Debe realizarse periódicamente para mantener actualizados los procesos y procedimientos del SG-SST.",
    },
    {
      titulo: "Normatividad Aplicable",
      contenido: "Resolución 0312/2019, Decreto 1072/2015, Ley 1562/2012 y demás normas relacionadas.",
    },
  ];

  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndice((prev) => (prev + 1) % secciones.length);
    }, 
