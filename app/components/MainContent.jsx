'use client';

export default function MainContent({ activeSection }) {
  return (
    <div
      style={{
        backgroundImage: "url('/fondo-aro.png')", // 👈 tu fondo principal
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      {activeSection === 'inicio' && (
        <>
          <h1 style={{ fontSize: '2.5rem', color: '#E6B800' }}>
            Bienvenido a ARO COLOMBIA
          </h1>
          <p style={{ maxWidth: '600px' }}>
            Administradora de Riesgos Outsourcing — especialistas en Seguridad y Salud en el Trabajo.
          </p>
        </>
      )}

      {activeSection === 'nosotros' && (
        <>
          <h1 style={{ color: '#E6B800' }}>Nosotros</h1>
          <p style={{ maxWidth: '600px' }}>
            Somos ARO COLOMBIA, una empresa dedicada a brindar soluciones integrales en gestión de riesgos laborales, seguridad industrial y salud ocupacional.
          </p>
        </>
      )}

      {activeSection === 'soluciones' && (
        <>
          <h1 style={{ color: '#E6B800' }}>Soluciones</h1>
          <p style={{ maxWidth: '600px' }}>
            Ofrecemos asesorías, auditorías, capacitaciones y programas en Seguridad y Salud en el Trabajo, ajustados a la normatividad vigente.
          </p>
        </>
      )}

      {activeSection === 'clientes' && (
        <>
          <h1 style={{ color: '#E6B800' }}>Nuestros Clientes</h1>
          <p style={{ maxWidth: '600px' }}>
            Empresas líderes en distintos sectores confían en ARO COLOMBIA para su gestión de riesgos laborales.
          </p>
        </>
      )}

      {activeSection === 'contacto' && (
        <>
          <h1 style={{ color: '#E6B800' }}>Contáctanos</h1>
          <p style={{ maxWidth: '600px' }}>
            📧 contacto@arocolombiasas@gmail.com.com  
            <br />
            📞 +57 3239269999
          </p>
        </>
      )}
    </div>
  );
}
