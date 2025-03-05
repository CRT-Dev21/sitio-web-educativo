export const ArticulosEducativos = () => {
  const articulos = [
    {
      id: 1,
      imagen: "./images/ecuacion.png", 
      titulo: "Cómo resolver ecuaciones de primer grado",
      descripcion: "Aprende a resolver ecuaciones de primer grado paso a paso.",
      enlace: "https://blogs.ugto.mx/bachilleratovirtual/clase-digital-4-ecuaciones-de-primer-grado/",
    },
    {
      id: 2,
      imagen: "./images/agua_naturaleza.jpg",
      titulo: "El ciclo del agua: Explicación y ejemplos",
      descripcion: "Descubre cómo funciona el ciclo del agua en la naturaleza.",
      enlace: "https://concepto.de/ciclo-del-agua/",
    },
    {
      id: 3,
      imagen: "./images/revolucion.jpg",
      titulo: "La Revolución Mexicana: Causas y consecuencias",
      descripcion: "Un análisis detallado de este importante evento histórico.",
      enlace: "https://edomex.gob.mx/revolucion_mexicana_2021",
    },
    {
      id: 4,
      imagen: "./images/soledad.jpg",
      titulo: "Análisis de 'Cien años de soledad'",
      descripcion: "Explora los temas y simbolismos de esta obra maestra.",
      enlace: "https://www.culturagenial.com/es/cien-anos-de-soledad-de-gabriel-garcia-marquez/",
    },
  ];

  return (
    <div className="articulos">
      <h2>Artículos y Guías Educativas</h2>
      <div className="articulos-grid">
        {articulos.map((articulo) => (
          <div key={articulo.id} className="articulo-card">
            <img src={articulo.imagen} alt={articulo.titulo} />
            <div className="contenido">
              <h3>{articulo.titulo}</h3>
              <p>{articulo.descripcion}</p>
              <a href={articulo.enlace}>Leer más</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};