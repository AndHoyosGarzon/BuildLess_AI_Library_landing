# Estructura HTML Semántica para el Wireframe

## Jerarquía de Etiquetas con Secciones Anidadas

- `<header>`
  - Contiene: `<nav>` (para los enlaces de navegación como "Documentation" y "Login")
  - Cierre: `</header>`

- `<nav>`
  - Contiene: Enlaces de navegación (como "Documentation" y "Login")
  - Cierre: `</nav>` (dentro de `<header>`)

- `<main>`
  - Contiene: `<section>` (para cada bloque de contenido principal)
  - Cierre: `</main>`

- `<section>`
  - Cierre: `</section>` (dentro de `<main>`)
  - Contiene: `<article>` (para los bloques de contenido individuales como el banner o las secciones de video/animación)

- `<article>`
  - Contiene: `<div>` (para agrupar elementos como íconos y descripciones)
  - Cierre: `</article>` (dentro de `<section>`)

- `<div>`
  - Contiene: 
    - `<h1>` (para el encabezado principal del banner)
    - `<p>` (para el texto descriptivo)
    - `<video>` (o `<iframe>` para animación) (para el marcador de video/animación)
    - `<figure>` (para agrupar video y descripción)
    - `<ul>` (para la lista de íconos)
    - `<button>` (para el botón "Learn more")
    - `<h2>` (para el subtítulo "who is it intended for")
  - Cierre: `</div>` (dentro de `<article>`)

- `<h1>`
  - Contiene: Texto del encabezado principal (e.g., "Banner information with all data and resource project Buildness")
  - Cierre: `</h1>` (dentro de `<div>` o `<article>`)

- `<p>`
  - Contiene: Texto descriptivo
  - Cierre: `</p>` (dentro de `<div>` o `<article>`)

- `<video>` (o `<iframe>` para animación)
  - Contiene: Contenido de video o animación
  - Cierre: `</video>` (o `</iframe>`) (dentro de `<div>` o `<article>`)

- `<figure>`
  - Contiene: `<figcaption>` (para el texto descriptivo debajo del video)
  - Cierre: `</figure>` (dentro de `<div>` o `<article>`)

- `<figcaption>`
  - Contiene: Texto descriptivo (e.g., "Small description with the more important functionalities")
  - Cierre: `</figcaption>` (dentro de `<figure>`)

- `<ul>`
  - Contiene: `<li>` (para cada ícono con descripción)
  - Cierre: `</ul>` (dentro de `<div>` o `<article>`)

- `<li>`
  - Contiene: Texto de cada ícono con descripción (e.g., "Icon 1 with description")
  - Cierre: `</li>` (dentro de `<ul>`)

- `<button>`
  - Contiene: Texto del botón (e.g., "Learn more")
  - Cierre: `</button>` (dentro de `<div>` o `<article>`)

- `<h2>`
  - Contiene: Texto del subtítulo (e.g., "who is it intended for")
  - Cierre: `</h2>` (dentro de `<div>` o `<article>`)

- `<footer>`
  - Contiene: Contenido del pie de página (e.g., información de copyright o enlaces adicionales)
  - Cierre: `</footer>` (fuera de `<main>`)

## Notas
- Esta estructura sigue el orden jerárquico basado en el wireframe proporcionado.
- Asegúrate de anidar las etiquetas correctamente y cerrarlas en el orden inverso para mantener la semántica y accesibilidad.