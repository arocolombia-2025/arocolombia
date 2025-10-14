import Header from './components/Header'; // 👈 importa el nuevo Header

export const metadata = {
  title: 'ARO COLOMBIA',
  description: 'Administradora de Riesgos Outsourcing',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          fontFamily: 'Franklin Gothic Medium, Arial, sans-serif',
          backgroundColor: '#000',
          color: '#fff',
        }}
      >
        {/* Aquí se muestra el nuevo encabezado */}
        <Header />

        {/* Aquí se cargan las demás páginas */}
        <main>{children}</main>

        {/* Pie de página */}
        <footer
          style={{
            textAlign: 'center',
            padding: '1rem',
            backgroundColor: '#111',
            marginTop: '2rem',
            fontSize: '0.9rem',
            color: '#999',
          }}
        >
          © 2025 ARO COLOMBIA - Administradora de Riesgos Outsourcing
        </footer>
      </body>
    </html>
  );
}
