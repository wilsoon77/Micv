# Curriculum Vitae Interactivo

Este proyecto es un Curriculum Vitae interactivo y responsive, desarrollado con HTML, JavaScript y CSS, utilizando Tailwind CSS para los estilos. El sitio incluye animaciones, efectos visuales, un fondo interactivo con partículas y una experiencia de usuario fluida.

## 📑 Tabla de Contenidos

- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Características](#-características)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación y Ejecución](#-instalación-y-ejecución)
- [Guía de Personalización](#-guía-de-personalización)
  - [Información Personal](#1-información-personal)
  - [Experiencia Laboral](#2-experiencia-laboral)
  - [Educación](#3-educación)
  - [Habilidades](#4-habilidades)
  - [Estilos y Diseño](#5-estilos-y-diseño)
  - [Fondo Interactivo](#6-fondo-interactivo)
  - [Iconos](#7-iconos)
- [Funcionamiento Detallado de los Archivos](#-funcionamiento-detallado-de-los-archivos)
  - [index.html](#indexhtml)
  - [main.js](#mainjs)
  - [style.css](#stylecss)
  - [tailwind.config.js](#tailwindconfigjs)
  - [postcss.config.js](#postcssconfigjs)
- [Build y Despliegue](#-build-y-despliegue)
- [Contribuciones](#-contribuciones)
- [Licencia](#-licencia)

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura base del documento
- **JavaScript (Vanilla)**: Lógica de la aplicación y manipulación del DOM
- **CSS3**: Estilos personalizados y animaciones
- **Tailwind CSS**: Framework de utilidades CSS para el diseño responsive
- **Font Awesome**: Biblioteca de iconos vectoriales
- **Vite**: Bundler y servidor de desarrollo

## 🎨 Características

- **Diseño Responsive**: Se adapta perfectamente a todos los tamaños de pantalla, desde móviles hasta pantallas de escritorio.

- **Tema Oscuro**: Diseño con tema oscuro elegante con gradientes y contrastes adecuados para mejorar la legibilidad.

- **Fondo Interactivo**:
  - Partículas animadas que se mueven suavemente en el fondo
  - Efecto de profundidad con transparencias
  - Rendimiento optimizado para no afectar la experiencia del usuario

- **Animaciones**:
  - Fade-in al cargar la página
  - Elementos que aparecen con efecto al hacer scroll
  - Efectos hover en tarjetas y habilidades
  - Animación en la imagen de perfil con borde giratorio

- **Navegación**:
  - Barra de navegación fija con efecto de cristal (blur)
  - Scroll suave entre secciones
  - Enlaces con animación de subrayado

- **Secciones**:
  - Información personal con foto de perfil
  - Experiencia laboral con iconos y descripciones
  - Educación con detalles de instituciones
  - Habilidades técnicas con iconos personalizados

## 🔧 Estructura del Proyecto

```
/
├── index.html          # Estructura HTML principal
├── main.js             # Lógica y datos del CV
├── style.css           # Estilos y animaciones
├── counter.js          # Utilidad auxiliar (no utilizada en el proyecto principal)
├── package.json        # Dependencias y scripts
├── postcss.config.js   # Configuración de PostCSS para Tailwind
├── tailwind.config.js  # Configuración de Tailwind CSS
└── README.md           # Documentación del proyecto
```

## 🛠️ Instalación y Ejecución

1. **Requisitos previos**:
   - Node.js (versión 14 o superior)
   - npm (normalmente viene con Node.js)

2. **Instalación**:
   ```bash
   # Clonar o descargar el repositorio
   
   # Instalar dependencias
   npm install
   ```

3. **Ejecución en desarrollo**:
   ```bash
   npm run dev
   ```
   Esto iniciará el servidor de desarrollo en `http://localhost:5173` (o el puerto que esté disponible).

4. **Construcción para producción**:
   ```bash
   npm run build
   ```
   Esto generará una carpeta `dist` con los archivos optimizados.

## 📝 Guía de Personalización

### 1. Información Personal

Todo el contenido del CV se gestiona desde el archivo `main.js` en el objeto `cvData`. Para modificar la información personal, edita la sección `personalInfo`:

```javascript
personalInfo: {
  name: "Tu Nombre Completo",     // Cambia por tu nombre
  title: "Tu Profesión",          // Cambia por tu profesión o título
  email: "tu@email.com",          // Cambia por tu email
  phone: "Tu Teléfono",           // Cambia por tu teléfono
  image: "URL de tu foto"         // Cambia por la URL de tu foto
}
```

### 2. Experiencia Laboral

Para añadir, modificar o eliminar experiencias laborales, edita el array `experience` en el objeto `cvData`:

```javascript
experience: [
  {
    title: "Título del Puesto",           // Puesto de trabajo
    company: "Nombre de la Empresa",      // Empresa donde trabajaste
    period: "Periodo",                    // Periodo de trabajo (ej: "2020 - Presente")
    description: "Descripción del puesto", // Descripción de tus responsabilidades
    icon: "fa-icon-name"                  // Icono de Font Awesome (sin el "fa-")
  },
  // Puedes añadir más objetos para más experiencias
]
```

### 3. Educación

Para modificar tu información educativa, edita el array `education` en el objeto `cvData`:

```javascript
education: [
  {
    degree: "Título Obtenido",           // Título o grado académico
    school: "Nombre de la Institución",  // Nombre de la universidad o institución
    period: "Periodo",                   // Periodo de estudio (ej: "2016 - 2020")
    icon: "fa-icon-name"                 // Icono de Font Awesome
  },
  // Puedes añadir más objetos para más formación académica
]
```

### 4. Habilidades

Para modificar tus habilidades técnicas, edita el array `skills` en el objeto `cvData`:

```javascript
skills: [
  {
    name: "Nombre de la Habilidad",  // Nombre de la tecnología o habilidad
    icon: "fa-icon-name",            // Icono de Font Awesome
    color: "text-color-class"        // Clase de color de Tailwind (ej: "text-blue-500")
  },
  // Puedes añadir más objetos para más habilidades
]
```

### 5. Estilos y Diseño

Los estilos se pueden personalizar en dos archivos principales:

1. **style.css**: Contiene los estilos personalizados y animaciones
   - Animaciones de entrada y efectos
   - Estilos de la barra de navegación
   - Efectos de hover y transiciones
   - Gradientes y efectos visuales

2. **tailwind.config.js**: Configuración de Tailwind CSS
   - Colores personalizados
   - Fuentes
   - Breakpoints
   - Extensiones del tema

### 6. Fondo Interactivo

El fondo interactivo de partículas se puede personalizar en `main.js` en la función `initParticles()`:

```javascript
// Cambiar el número de partículas
for (let i = 0; i < 100; i++) { // Aumenta o disminuye este número
  particles.push(new Particle());
}

// Cambiar el color de las partículas
ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'; // Modifica el color y la opacidad

// Cambiar el tamaño de las partículas
this.size = Math.random() * 2 + 1; // Modifica los valores para partículas más grandes o pequeñas

// Cambiar la velocidad de las partículas
this.speedX = Math.random() * 2 - 1; // Modifica los valores para mayor o menor velocidad
this.speedY = Math.random() * 2 - 1;
```

### 7. Iconos

Los iconos utilizan Font Awesome 6. Para cambiar un icono:
1. Busca el icono deseado en [Font Awesome](https://fontawesome.com/icons)
2. Copia el nombre del icono (ejemplo: `fa-code`)
3. Actualiza el campo `icon` en el objeto correspondiente en `cvData`

## 📚 Funcionamiento Detallado de los Archivos

### index.html

Este archivo contiene la estructura HTML del CV y está organizado en secciones:

- **Head**: Contiene metadatos, título y enlaces a hojas de estilo (Tailwind CSS y Font Awesome).
- **Body**: Contiene la estructura principal del CV con las siguientes secciones:
  - **Canvas**: Elemento para el fondo de partículas animadas.
  - **Navbar**: Barra de navegación fija con enlaces a las secciones.
  - **Header**: Sección de información personal con foto, nombre y datos de contacto.
  - **Experience**: Sección para mostrar la experiencia laboral.
  - **Education**: Sección para mostrar la formación académica.
  - **Skills**: Sección para mostrar las habilidades técnicas.

El archivo utiliza clases de Tailwind CSS para el diseño y la responsividad, y tiene contenedores vacíos que se llenan dinámicamente con JavaScript.

### main.js

Este archivo contiene toda la lógica del CV y está estructurado en varias partes:

1. **Datos del CV**: Un objeto `cvData` que contiene toda la información personal, experiencia, educación y habilidades.

2. **Funciones de actualización del DOM**:
   - `updatePersonalInfo()`: Actualiza la información personal en el HTML.
   - `createExperienceList()`: Genera dinámicamente las tarjetas de experiencia laboral.
   - `createEducationList()`: Genera dinámicamente las tarjetas de educación.
   - `createSkillsList()`: Genera dinámicamente las etiquetas de habilidades.

3. **Funciones de interactividad**:
   - `handleScrollAnimations()`: Maneja las animaciones al hacer scroll.
   - `handleSmoothScroll()`: Implementa el scroll suave entre secciones.

4. **Fondo de partículas**:
   - `initParticles()`: Inicializa y gestiona el fondo animado de partículas.
   - Clase `Particle`: Define el comportamiento de cada partícula.
   - Funciones auxiliares para dibujar, actualizar y animar las partículas.

5. **Inicialización**:
   - `initCV()`: Función principal que inicializa todas las partes del CV.
   - Event listener para cargar el CV cuando el documento esté listo.

El archivo utiliza JavaScript moderno (ES6+) y manipulación del DOM para crear una experiencia dinámica e interactiva.

### style.css

Este archivo contiene los estilos personalizados y animaciones del CV:

1. **Directivas de Tailwind**: Importa las capas base, componentes y utilidades de Tailwind.

2. **Animaciones**:
   - `fadeInUp`: Animación para que los elementos aparezcan desde abajo.
   - `slideInLeft`: Animación para que los elementos aparezcan desde la izquierda.

3. **Clases de animación**: Clases que aplican las animaciones definidas.

4. **Estilos de la navbar**: Estilos para la barra de navegación con efecto de cristal y animaciones en los enlaces.

5. **Efectos de hover y transiciones**: Efectos visuales para las tarjetas y etiquetas al pasar el cursor.

6. **Animaciones de scroll**: Clases para revelar elementos al hacer scroll.

7. **Gradientes y efectos visuales**: Estilos para fondos con gradientes y efectos especiales como el borde animado de la foto de perfil.

El archivo combina Tailwind CSS con CSS personalizado para lograr efectos visuales avanzados y una experiencia de usuario fluida.

### tailwind.config.js

Este archivo configura Tailwind CSS para el proyecto:

- **Content**: Define qué archivos deben ser analizados para extraer clases de Tailwind.
- **DarkMode**: Configura el modo oscuro como clase (`class`).
- **Theme**: Permite extender o sobrescribir el tema por defecto de Tailwind.
- **Plugins**: Permite añadir plugins adicionales a Tailwind.

### postcss.config.js

Este archivo configura PostCSS para procesar los estilos CSS:

- Configura Tailwind CSS como plugin de PostCSS.
- Configura Autoprefixer para añadir prefijos de navegador automáticamente.

## 📦 Build y Despliegue

Para construir el proyecto para producción:
```bash
npm run build
```

Esto generará una carpeta `dist` con los archivos optimizados listos para desplegar en cualquier servidor web estático como:

- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting
- Amazon S3
- Cualquier servidor web tradicional

Para previsualizar la versión de producción localmente:
```bash
npm run preview
```

## 🤝 Contribuciones

Si deseas mejorar este proyecto, siéntete libre de:
1. Fork el repositorio
2. Crea una rama para tus cambios (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add some amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo LICENSE para detalles