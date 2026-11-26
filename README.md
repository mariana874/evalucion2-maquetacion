# Semillero Deportivo Risaralda

Catálogo web de escuelas deportivas, desarrollado para la Evaluación 2 de maquetación dinámica de ADSO.

**Aprendiz:** Mariana Serna Ocampo  
**Tema:** 12 — Escuelas deportivas  
**Empresa:** Semillero Deportivo Risaralda  
**Eslogan:** Formamos deportistas y personas

## Programas
El catálogo incluye 12 programas deportivos: fútbol, natación, patinaje y baloncesto. Cada programa muestra descripción, mensualidad, edad mínima y horario.

## Funciones
- Diseño adaptable con Bootstrap 5.3: una columna en celular, dos en tableta y cuatro en escritorio.
- Filtros por deporte, buscador por texto y orden por nombre o mensualidad.
- Contador de resultados y mensaje cuando no hay coincidencias.
- HTML semántico, etiquetas accesibles y navegación por teclado.

## Organización
- `index.html`: contenido y estructura.
- `css/estilos.css`: identidad visual y estilos.
- `js/datos.js`: datos de los 12 programas.
- `js/app.js`: tarjetas dinámicas, filtros y eventos.
- `img/placeholder.svg`: imagen de respaldo permitida por la guía.
- `ENTREGA.md`: información para presentar la evaluación.

## Probar
Abrir `index.html` en el navegador o ejecutar un servidor local. Para revisar la evaluación:

```bash
node verificar-evaluacion.js --sin-api
```

El verificador proviene de la plantilla de la evaluación y no se modifica.
