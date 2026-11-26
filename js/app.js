/* El catálogo se genera desde los datos de js/datos.js. */
const estado = {
  categoria: 'todas',
  texto: '',
  orden: 'nombre-asc'
};

function crearCard(item) {
  const categoriaNombre = {
    futbol: 'Fútbol', natacion: 'Natación',
    patinaje: 'Patinaje', baloncesto: 'Baloncesto'
  };
  const mensualidad = new Intl.NumberFormat('es-CO').format(item[configuracion.campoOrden]);
  return `
    <article class="card rounded-3 shadow-sm h-100">
      <img class="card-img-top" src="${item.imagen}" alt="Imagen del programa ${item.nombre}" loading="lazy">
      <div class="card-body d-flex flex-column">
        <span class="badge badge-categoria align-self-start mb-2">${categoriaNombre[item.categoria] || item.categoria} (${item.categoria})</span>
        <h3 class="card-title">${item.nombre}</h3>
        <p class="card-text">${item.descripcion}</p>
        <p class="precio mt-auto mb-2">${configuracion.etiquetaValor}: $ ${mensualidad} (${item[configuracion.campoOrden]})</p>
        <p class="dato-tarjeta"><strong>Edad mínima:</strong> ${item.edadMinima} años</p>
        <p class="dato-tarjeta"><strong>Horario:</strong> ${item.horario}</p>
      </div>
    </article>`;
}

function generarHTML(lista) {
  if (lista.length === 0) {
    return '<p class="col-12 text-center py-4">No hay resultados para tu búsqueda.</p>';
  }
  return lista.map(crearCard).join('');
}

function filtrarPorCategoria(lista, categoria) {
  return categoria === 'todas' ? [...lista] : lista.filter(item => item.categoria === categoria);
}

function buscarPorTexto(lista, texto) {
  const normalizar = valor => valor.toLocaleLowerCase('es').normalize('NFD').replace(/[\\u0300-\\u036f]/g, '');
  const busqueda = normalizar(texto.trim());
  if (!busqueda) return [...lista];
  return lista.filter(item =>
    normalizar(item.nombre).includes(busqueda) ||
    normalizar(item.descripcion).includes(busqueda)
  );
}

function ordenarItems(lista, criterio) {
  const resultado = [...lista];
  if (criterio === 'valor-asc') {
    resultado.sort((a, b) => a[configuracion.campoOrden] - b[configuracion.campoOrden]);
  } else if (criterio === 'valor-desc') {
    resultado.sort((a, b) => b[configuracion.campoOrden] - a[configuracion.campoOrden]);
  } else {
    resultado.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));
  }
  return resultado;
}

function aplicarFiltros(lista, estadoActual) {
  const porCategoria = filtrarPorCategoria(lista, estadoActual.categoria);
  const porTexto = buscarPorTexto(porCategoria, estadoActual.texto);
  return ordenarItems(porTexto, estadoActual.orden);
}

function actualizarVista() {
  const resultado = aplicarFiltros(items, estado);
  document.getElementById('catalogo').innerHTML = generarHTML(resultado);
  document.getElementById('contador').textContent =
    `Mostrando ${resultado.length} de ${items.length} resultados`;
}

function iniciar() {
  document.querySelectorAll('[data-categoria]').forEach(boton => {
    boton.addEventListener('click', () => {
      estado.categoria = boton.dataset.categoria;
      document.querySelectorAll('[data-categoria]').forEach(otro => {
        otro.setAttribute('aria-pressed', String(otro === boton));
      });
      actualizarVista();
    });
  });

  document.getElementById('buscador').addEventListener('input', evento => {
    estado.texto = evento.target.value;
    actualizarVista();
  });

  document.getElementById('orden').addEventListener('change', evento => {
    estado.orden = evento.target.value;
    actualizarVista();
  });

  actualizarVista();
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', iniciar);
}
