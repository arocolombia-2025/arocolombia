'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Flame,
  FileText,
  GraduationCap,
  Users,
  AlertTriangle,
  ClipboardCheck,
  Menu,
} from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: 'absolute', // 👈 Barra flotante
        top: '20px',
        right: '25px',
        zIndex: 20,
        transform: 'scale(0.85)', // 👈 Aumentada un 15%
        transformOrigin: 'top right', // 👈 Mantiene la posición arriba a la derecha
      }}
    >
      {/* Botón del menú */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: 'linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)',
          color: '#fff',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
          transition: 'all 0.3s ease',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => {
          e.target.style.filter = 'brightness(1.3)';
          e.target.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.filter = 'brightness(1)';
          e.target.style.transform = 'scale(1)';
        }}
      >
        <Menu size={18} />
        Menú
      </button>

      {/* Menú desplegable */}
      {menuOpen && (
        <nav
          style={{
            position: 'absolute',
            top: '55px',
            right: '0',
            background: 'linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)',
            borderRadius: '10px',
            padding: '1rem',
            zIndex: 1000,
            boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
            width: '250px',
          }}
        >
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {menuItems.map((item, index) => (
              <li key={index} style={{ margin: '0.4rem 0' }}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ textDecoration: 'none' }}
                >
                  <button
                    style={{
                      ...menuButton,
                      background:
                        'linear-gradient(to bottom, #6FB7E7, #2F6CA6, #0F3558)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '0.5rem 0.8rem',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.filter = 'brightness(1.3)';
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.filter = 'brightness(1)';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

// 🔹 Ítems del menú (rutas corregidas para coincidir con tus carpetas)
const menuItems = [
  {
    href: '/planes-de-emergencia',
    label: 'Planes de emergencia',
    icon: <Flame size={18} />,
  },
  {
    href: '/normatividad',
    label: 'Normatividad',
    icon: <FileText size={18} />,
  },
  {
    href: '/capacitaciones',
    label: 'Capacitaciones',
    icon: <GraduationCap size={18} />,
  },
  {
    href: '/clientes',
    label: 'Clientes',
    icon: <Users size={18} />,
  },
  {
    href: '/matrices-de-riesgos-y-peligros',
    label: 'Matrices de riesgos y peligros',
    icon: <AlertTriangle size={18} />,
  },
  {
    href: '/diagnostico-para-tu-empresa',
    label: 'Diagnóstico para tu empresa',
    icon: <ClipboardCheck size={18} />,
  },
];

// 🔹 Estilo base de los botones
const menuButton = {
  border: 'none',
  color: '#fff',
  borderRadius: '6px',
  width: '100%',
  textAlign: 'left',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '0.9rem',
  transition: 'all 0.3s ease',
  textDecoration: 'none',
  boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
  background: 'transparent',
};
