let lista = document.getElementsById("lista");

let valores = ['irving rios','Luis fernando','Melisa Garcia'];
let valores = [];
const mostrarValores = () => valores.map(valor =>{
  let componenteLi = document.createElement("li");
  componenteLi.innerHTML = valor;
  lista.appendChild(componenteLi);
})

const agregarValor = () =>{
  let valor =document.getElementsById("valor");
  //valor.ud = 2;
  lista.innerHTML = "";
  valores.push(valor.value);
  console.log(valores);
  mostrarValores();
  valor.value="";
}

const limpiarValores =() => {
  lista.innerHTML = "";
  valores = [];
}

mostrarValores();
