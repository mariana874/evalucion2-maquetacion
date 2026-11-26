/*
 * datos.js - Los datos de tu tema
 * Los datos viven aquí, separados de la interfaz. app.js los recorre
 * y construye las tarjetas: nunca se escriben tarjetas a mano en el HTML.
 *
 * TODO (issue #1):
 *
 * 1. Completa configuracion:
 *      titulo         nombre de tu proyecto
 *      campoOrden     nombre de la propiedad NUMÉRICA que se usa para ordenar
 *                     (precio, duracionMinutos, paginas...). Se elige en la guía.
 *      etiquetaValor  cómo se muestra ese número en la tarjeta ("Precio", "Duración")
 *
 * 2. Llena items con los 12 elementos de la página de Contenido de tu
 *    empresa en el Manual de marca (nombres, categorías y valores exactos).
 *    TODOS con las mismas propiedades:
 *      id           número, único
 *      nombre       texto
 *      categoria    texto (mínimo 3 categorías, cada una con 2 o más elementos)
 *      descripcion  texto corto
 *      imagen       ruta en img/ (que exista) o URL que empiece por https://
 *      la propiedad de campoOrden (número)
 *      y los 2 campos propios que indica tu tema en la guía
 *
 * La información es ficticia: la entrega la empresa en el manual.
 * Puedes usar img/placeholder.svg mientras consigues imágenes.
 */

const configuracion = {
  titulo: "Semillero Deportivo Risaralda",
  campoOrden: "mensualidad",
  etiquetaValor: "Mensualidad"
};

const items = [
  { id: 1, 
    nombre: "Fútbol infantil", 
    categoria: "futbol",
    descripcion: "Fundamentos y juego en equipo.",
    imagen: "img/placeholder.svg",
    mensualidad: 90000, edadMinima: 6, horario: "martes y jueves 3:00 p. m." },

  { id: 2, 
    nombre: "Fútbol juvenil", 
    categoria: "futbol",
    descripcion: "Táctica y preparación para torneos.",
    imagen: "img/placeholder.svg",
    mensualidad: 110000, edadMinima: 12, horario: "lunes y miércoles 4:00 p. m." },

  { id: 3, 
    nombre: "Fútbol femenino", 
    categoria: "futbol",
    descripcion: "Equipo competitivo para niñas.",
    imagen: "img/placeholder.svg",
    mensualidad: 100000, edadMinima: 10, horario: "sábados 8:00 a. m." },

  { id: 4, 
    nombre: "Natación bebés", 
    categoria: "natacion",
    descripcion: "Adaptación al agua con acompañante.",
    imagen: "img/placeholder.svg",
    mensualidad: 120000, edadMinima: 1, horario: "sábados 9:00 a. m." },

  { id: 5, 
    nombre: "Natación niños", 
    categoria: "natacion",
    descripcion: "Aprende los cuatro estilos.",
    imagen: "img/placeholder.svg",
    mensualidad: 130000, edadMinima: 5, horario: "martes y jueves 4:00 p. m." },

  { id: 6, 
    nombre: "Natación competitiva", 
    categoria: "natacion",
    descripcion: "Entrenamiento para competencias.",
    imagen: "img/placeholder.svg",
    mensualidad: 160000, edadMinima: 10, horario: "lunes a viernes 5:00 a. m." },

  { id: 7, 
    nombre: "Patinaje iniciación", 
    categoria: "patinaje",
    descripcion: "Equilibrio y primeros desplazamientos.",
    imagen: "img/placeholder.svg",
    mensualidad: 85000, edadMinima: 4, horario: "sábados 10:00 a. m." },

  { id: 8, 
    nombre: "Patinaje de carreras", 
    categoria: "patinaje",
    descripcion: "Velocidad en pista y ruta.",
    imagen: "img/placeholder.svg",
    mensualidad: 115000, edadMinima: 8, horario: "miércoles y viernes 3:00 p. m." },

  { id: 9, 
    nombre: "Patinaje artístico", 
    categoria: "patinaje",
    descripcion: "Saltos, giros y coreografía.",
    imagen: "img/placeholder.svg",
    mensualidad: 125000, edadMinima: 6, horario: "martes y jueves 5:00 p. m." },

  { id: 10, 
    nombre: "Baloncesto mini", 
    categoria: "baloncesto",
    descripcion: "Juego reducido para los más pequeños.",
    imagen: "img/placeholder.svg",
    mensualidad: 80000, edadMinima: 6, horario: "sábados 8:00 a. m." },

  { id: 11, 
    nombre: "Baloncesto juvenil", 
    categoria: "baloncesto",
    descripcion: "Fundamentos y partidos.",
    imagen: "img/placeholder.svg",
    mensualidad: 95000, edadMinima: 12, horario: "lunes y miércoles 5:00 p. m." },

  { id: 12, 
    nombre: "Baloncesto en silla", 
    categoria: "baloncesto",
    descripcion: "Programa incluyente para todas las edades.",
    imagen: "img/placeholder.svg",
    mensualidad: 60000, edadMinima: 8, horario: "viernes 4:00 p. m." }
];
