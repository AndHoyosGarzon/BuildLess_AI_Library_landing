# 🏗️ Prototipo Landing Buildness Project

Un prototipo de landing page para el proyecto Buildness desarrollado con React + Vite, siguiendo principios de HTML semántico y arquitectura de componentes moderna.

## 🚀 Tecnologías Utilizadas

- **React 19.1.0** - Biblioteca de JavaScript para interfaces de usuario
- **Vite 7.0.4** - Herramienta de construcción y desarrollo rápido
- **TailwindCSS 4.1.11** - Framework de CSS utilitario
- **DaisyUI 5.0.46** - Biblioteca de componentes para Tailwind
- **React Icons 5.5.0** - Biblioteca de iconos para React
- **ESLint** - Linter para JavaScript/React

## 📁 Estructura del Proyecto

```
Prototipe_landing_buildness_project/
├── 📁 public/                     # Archivos públicos estáticos
├── 📁 src/                        # Código fuente principal
│   ├── 📄 App.jsx                 # Componente raíz de la aplicación
│   ├── 📄 main.jsx                # Punto de entrada de React
│   ├── 📄 index.css               # Estilos globales
│   └── 📁 components/             # Componentes de React
│       ├── 🏗️ COMPONENTES PRINCIPALES (Etiquetas semánticas principales)
│       ├── 📄 Header.jsx          # <header> - Encabezado principal
│       ├── 📄 Navigation.jsx      # <nav> - Navegación del sitio
│       ├── 📄 MainContent.jsx     # <main> - Contenido principal
│       ├── 📄 Banner.jsx          # <section> + <article> - Banner hero
│       ├── 📄 VideoSection.jsx    # <section> + <figure> - Sección multimedia
│       ├── 📄 IntendedForSection.jsx # <section> - "Para quién está dirigido"
│       ├── 📄 Footer.jsx          # <footer> - Pie de página
│       └── 📁 UI/                 # Elementos de interfaz reutilizables
│           ├── 📄 Button.jsx      # <button> - Botones interactivos
│           ├── 📄 IconList.jsx    # <ul> - Listas de iconos
│           ├── 📄 IconItem.jsx    # <li> - Elemento individual de ícono
│           ├── 📄 Video.jsx       # <video> - Componente de video
│           ├── 📄 Figure.jsx      # <figure> - Agrupador multimedia
│           ├── 📄 Caption.jsx     # <figcaption> - Descripción multimedia
│           ├── 📄 Text.jsx        # <p> - Párrafos de texto
│           └── 📄 Title.jsx       # <h1-h6> - Títulos dinámicos
├── 📄 semantica.md                # Documentación de estructura HTML semántica
├── 📄 package.json                # Dependencias y scripts del proyecto
├── 📄 vite.config.js              # Configuración de Vite
├── 📄 eslint.config.js            # Configuración de ESLint
├── 📄 index.html                  # Archivo HTML principal
└── 📄 README.md                   # Documentación del proyecto
```

## 🏛️ Arquitectura de Componentes

### 🎯 Principios de Diseño

1. **HTML Semántico**: Cada componente utiliza las etiquetas HTML semánticas apropiadas
2. **Separación de Responsabilidades**: Componentes principales vs elementos UI
3. **Reutilización**: Elementos UI pueden ser utilizados en múltiples secciones
4. **Accesibilidad**: Estructura semántica que mejora la accesibilidad web
5. **SEO Friendly**: Marcado HTML que favorece el posicionamiento en buscadores

### 🏗️ Componentes Principales
> Ubicados en `src/components/`

| Componente | Etiqueta HTML | Propósito |
|------------|---------------|-----------|
| `Header.jsx` | `<header>` | Encabezado principal del sitio |
| `Navigation.jsx` | `<nav>` | Sistema de navegación (Documentation, Login) |
| `MainContent.jsx` | `<main>` | Contenedor del contenido principal |
| `Banner.jsx` | `<section>` + `<article>` | Sección hero con información principal |
| `VideoSection.jsx` | `<section>` + `<figure>` | Sección multimedia con video/animación |
| `IntendedForSection.jsx` | `<section>` + `<article>` | Sección "¿Para quién está dirigido?" |
| `Footer.jsx` | `<footer>` | Pie de página con información adicional |

### 🎨 Componentes UI
> Ubicados en `src/components/UI/`

| Componente | Etiqueta HTML | Propósito |
|------------|---------------|-----------|
| `Button.jsx` | `<button>` | Botones interactivos (ej: "Learn more") |
| `IconList.jsx` | `<ul>` | Lista de íconos con descripciones |
| `IconItem.jsx` | `<li>` | Elemento individual de la lista de íconos |
| `Video.jsx` | `<video>` | Reproductor de video |
| `Figure.jsx` | `<figure>` | Agrupador de contenido multimedia |
| `Caption.jsx` | `<figcaption>` | Descripción de contenido multimedia |
| `Text.jsx` | `<p>` | Párrafos de texto descriptivo |
| `Title.jsx` | `<h1>-<h6>` | Títulos dinámicos con prop `level` |

## 🚦 Scripts Disponibles

```bash
# Desarrollo - Inicia el servidor de desarrollo
npm run dev

# Construcción - Genera build de producción
npm run build

# Linting - Ejecuta ESLint para verificar código
npm run lint

# Vista previa - Previsualiza el build de producción
npm run preview
```

## 🔧 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd Prototipe_landing_buildness_project
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 📋 Estructura Semántica

El proyecto sigue la estructura HTML semántica documentada en `semantica.md`, que define:

- **Jerarquía de etiquetas** anidadas correctamente
- **Orden semántico** que mejora la accesibilidad
- **Marcado estructural** que favorece el SEO
- **Separación clara** entre contenido y presentación

### Flujo de Contenido
```
<header> (Header.jsx)
  └── <nav> (Navigation.jsx)

<main> (MainContent.jsx)
  ├── <section> (Banner.jsx)
  │   └── <article>
  │       ├── <h1>
  │       └── <p>
  ├── <section> (VideoSection.jsx)
  │   └── <article>
  │       └── <figure>
  │           ├── <video>
  │           └── <figcaption>
  └── <section> (IntendedForSection.jsx)
      └── <article>
          ├── <h2>
          └── <ul> (IconList.jsx)
              └── <li> (IconItem.jsx)

<footer> (Footer.jsx)
```

## 🎨 Sistema de Estilos

- **TailwindCSS**: Framework de utilidades CSS
- **DaisyUI**: Componentes preconstruidos compatible con Tailwind
- **Responsive Design**: Diseño adaptativo para múltiples dispositivos
- **Tema Moderno**: Interfaz limpia y profesional

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es un prototipo para Buildness Project.

---

**Desarrollado con ❤️ usando React + Vite + TailwindCSS**
