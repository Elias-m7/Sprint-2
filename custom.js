const ListaDePagos = [];
const ListaDeUsuarios = [];
const tablaDeUsuariosYPrecios = document.getElementById("list-group");
const recuentoTotal = document.getElementById("total");
const divisionDePagos = document.getElementById("pagoIndividual");
const usuario = document.getElementById("nombre");
const pago = document.getElementById("pago");

function reparticionDePrecios() {
  agregarGastosALista();
  mostrarUltimoPago();
  pagoIndividual();
}

function agregarGastosALista() {
  ListaDeUsuarios.push(usuario.value);
  ListaDePagos.push(pago.value);
}

function mostrarUltimoPago() {
  const li = document.createElement("li");
  const text = document.createTextNode(`${usuario.value}: pagó $${pago.value}`);
  li.classList.add("list-group-item");

  li.appendChild(text);
  tablaDeUsuariosYPrecios.appendChild(li);
}

function sumarPagos(ListaDePagos) {
  let suma = 0;
  for (let pago of ListaDePagos) {
    suma += parseFloat(pago);
  }
  return suma;
}

function pagoIndividual() {
  const total = sumarPagos(ListaDePagos);
  recuentoTotal.innerText = `El total es: $${total}`;
  divisionDePagos.innerText = `El dinero que debe aportar cada uno es de: $${
    total / ListaDeUsuarios.length
  } `;
}
