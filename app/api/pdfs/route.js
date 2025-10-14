// C:\proyectos\aro-colombia-web\app\api\pdfs\route.js
import fs from "fs";
import path from "path";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    // decodeURIComponent para aceptar categorias codificadas (espacios, etc.)
    const rawCategoria = searchParams.get("categoria") || "";
    const categoria = decodeURIComponent(rawCategoria).trim();

    // carpeta de origen: public/normatividad/<categoria>
    const folderPath = path.join(process.cwd(), "public", "normatividad", categoria);

    if (!fs.existsSync(folderPath)) {
      // devuelve arreglo vacío si no existe la carpeta (no es un error)
      return new Response(JSON.stringify([]), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const files = fs.readdirSync(folderPath)
      .filter((f) => f.toLowerCase().endsWith(".pdf"))
      .map((file) => ({
        nombre: file,
        // URL pública que el frontend puede abrir / descargar
        url: `/normatividad/${encodeURIComponent(categoria)}/${encodeURIComponent(file)}`,
      }));

    return new Response(JSON.stringify(files), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error en /api/pdfs:", err);
    return new Response(JSON.stringify({ error: "Error interno del servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
