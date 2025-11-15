
import type { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    id: 1,
    title_es: "¿Qué es HTML?",
    title_en: "What is HTML?",
    content_es: "HTML significa 'HyperText Markup Language' y es el esqueleto de todas las páginas web. Usamos 'etiquetas' para estructurar el contenido, como títulos, párrafos e imágenes. ¡Es como construir los cimientos de una casa!",
    example_html: `<!DOCTYPE html>
<html>
<head>
  <title>Mi Primera Página</title>
</head>
<body>
  <h1>¡Hola, Mundo!</h1>
  <p>Bienvenidos a mi web.</p>
</body>
</html>`,
    example_css: `/* El CSS se introduce en la lección 3 */`,
    vocabulary: [
      { es: "Etiqueta", en: "Tag", description_es: "Marcadores que definen elementos, como <h1> o <p>." },
      { es: "Elemento", en: "Element", description_es: "Una etiqueta de apertura, contenido y una etiqueta de cierre." },
      { es: "Documento", en: "Document", description_es: "El archivo completo que contiene el código HTML." }
    ]
  },
  {
    id: 2,
    title_es: "Títulos y Párrafos",
    title_en: "Headings and Paragraphs",
    content_es: "Para organizar el texto, HTML nos da etiquetas de encabezado de <h1> (el más importante) a <h6> (el menos importante) y la etiqueta <p> para los párrafos. Esto ayuda a los usuarios y a los buscadores a entender tu contenido.",
    example_html: `<h1>Mi Biografía</h1>
<h2>Mis Pasatiempos</h2>
<p>Me encanta diseñar páginas web, escuchar música y jugar videojuegos.</p>
<h2>Mis Metas</h2>
<p>Quiero convertirme en un gran desarrollador web y crear aplicaciones increíbles.</p>`,
    example_css: `/* El CSS se introduce en la lección 3 */`,
    vocabulary: [
      { es: "Encabezado", en: "Heading", description_es: "Títulos y subtítulos en la página (h1, h2...)." },
      { es: "Párrafo", en: "Paragraph", description_es: "Bloques de texto (<p>)." },
      { es: "Cuerpo", en: "Body", description_es: "La parte visible de la página web (<body>)." }
    ]
  },
  {
    id: 3,
    title_es: "Introducción a CSS",
    title_en: "Introduction to CSS",
    content_es: "CSS significa 'Cascading Style Sheets'. Es el lenguaje que usamos para darle estilo a nuestro HTML. ¡Es la ropa y la pintura de nuestra casa! Podemos cambiar colores, fuentes, tamaños y mucho más. Se escribe dentro de una etiqueta <style> en el <head>.",
    example_html: `<h1>Página con Estilo</h1>
<p>Este párrafo tendrá un color diferente.</p>
<p class="destacado">Este párrafo es especial.</p>`,
    example_css: `body {
  font-family: sans-serif;
}

h1 {
  color: #60a5fa; /* Un azul claro */
}

p {
  color: #9ca3af; /* Un gris medio */
}

.destacado {
  font-style: italic;
  font-weight: bold;
}`,
    vocabulary: [
      { es: "Selector", en: "Selector", description_es: "Apunta al elemento HTML que quieres estilizar (ej. 'h1')." },
      { es: "Propiedad", en: "Property", description_es: "El atributo de estilo que quieres cambiar (ej. 'color')." },
      { es: "Valor", en: "Value", description_es: "El estilo que quieres aplicar (ej. 'blue')." }
    ]
  },
  {
    id: 4,
    title_es: "Colores y Fondos",
    title_en: "Colors and Backgrounds",
    content_es: "Hagamos nuestra página más vibrante. Con CSS, podemos controlar el color del texto con la propiedad 'color' y el color de fondo de cualquier elemento con 'background-color'.",
    example_html: `<h1>Explorando Colores</h1>
<p>Este texto es de un color, sobre un fondo de otro color.</p>
<div class="caja-colorida">
  Esta caja tiene su propio estilo de fondo.
</div>`,
    example_css: `body {
  background-color: #1e293b; /* Un azul oscuro */
  color: #e2e8f0; /* Un gris muy claro */
}

h1 {
  color: #7dd3fc; /* Cian */
}

.caja-colorida {
  background-color: #334155; /* Un gris azulado */
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
}`,
    vocabulary: [
      { es: "Color", en: "Color", description_es: "Propiedad CSS para cambiar el color del texto." },
      { es: "Fondo", en: "Background", description_es: "Propiedad CSS para cambiar el color de fondo." },
      { es: "Código Hex", en: "Hex Code", description_es: "Una forma de representar colores, como #FFFFFF para blanco." }
    ]
  },
  {
    id: 5,
    title_es: "El Modelo de Caja",
    title_en: "The Box Model",
    content_es: "En la web, cada elemento es una caja rectangular. El Modelo de Caja describe el espacio alrededor de un elemento. Se compone de: contenido, 'padding' (relleno interior), 'border' (borde) y 'margin' (margen exterior).",
    example_html: `<h1>El Modelo de Caja</h1>
<div class="mi-caja">
  Este es el contenido de la caja. Observa el espacio alrededor.
</div>`,
    example_css: `.mi-caja {
  background-color: #818cf8; /* Indigo claro */
  color: #1e1b4b; /* Indigo oscuro */
  
  padding: 25px; /* 25px de relleno interior */
  
  border: 5px solid #4f46e5; /* Borde sólido de 5px */
  
  margin: 30px; /* 30px de margen exterior */
  
  border-radius: 10px; /* Bordes redondeados */
}`,
    vocabulary: [
      { es: "Relleno", en: "Padding", description_es: "El espacio entre el contenido y el borde." },
      { es: "Borde", en: "Border", description_es: "La línea que rodea el padding y el contenido." },
      { es: "Margen", en: "Margin", description_es: "El espacio fuera del borde, que separa elementos." }
    ]
  },
  {
    id: 6,
    title_es: "¡Tu Proyecto Final!",
    title_en: "Your Final Project!",
    content_es: "¡Felicidades! Has aprendido los fundamentos de HTML y CSS. Ahora es tu turno de crear una página de 'Sobre Mí'. Usa todo lo que has aprendido: encabezados, párrafos, colores y el modelo de caja. ¡Sé creativo/a!",
    example_html: `<h1>Sobre Mí: [Tu Nombre]</h1>

<h2>¿Quién soy?</h2>
<p>
  Escribe un párrafo sobre ti. ¿Qué te gusta? 
  ¿Cuáles son tus pasiones?
</p>

<div class="info-box">
  <h3>Datos Interesantes</h3>
  <p>
    - Mi color favorito es...
    <br>
    - Mi comida preferida es...
  </p>
</div>`,
    example_css: `body {
  font-family: Arial, sans-serif;
  background-color: #f0f4f8;
  color: #333;
  line-height: 1.6;
}

h1 {
  color: #2563eb;
}

.info-box {
  background-color: #e0e7ff;
  border-left: 5px solid #4f46e5;
  padding: 15px;
  margin: 20px 0;
}`,
    vocabulary: [
      { es: "Creatividad", en: "Creativity", description_es: "¡La habilidad más importante de un desarrollador!" },
      { es: "Proyecto", en: "Project", description_es: "Una aplicación práctica de tus habilidades." },
      { es: "Desarrollador/a", en: "Developer", description_es: "¡Eso es lo que eres ahora!" }
    ]
  }
];
