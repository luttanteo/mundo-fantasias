// const style = 'style="text-decoration-line: underline"'
function navigate(caminho) {
  window.location.href = caminho;
}

const cabecalho = document.getElementById("cabecalho");
cabecalho.innerHTML = `
  <div id="div-logo">
    <img src=/>
    <h1 id="logo">Mundo das Fantasias</h1>
  </div>
  <nav id="nav">
    <button
      aria-label="Abrir Menu"
      id="btn-mobile"
      aria-haspopup="true"
      aria-controls="menu"
      aria-expanded="false"
    >
      Menu
      <span id="hamburguer"></span>
    </button>
    <ul id="menu" role="menu">
      <li><a class="servicos" data-path="/home/home.html">Home</a></li>
      <li><a class="servicos" data-path="/catalogo/catalogo.html">Catálogo</a></li>
    </ul>
  </nav>
`;

document.querySelectorAll("#menu a[data-path]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    
    const caminho = link.getAttribute("data-path");
    navigate(caminho);
  });
});

//para destacar a pagina atual
const pathAtual = window.location.pathname;
document.querySelectorAll(`a[data-path="${pathAtual}"]`).forEach((link) => {
    link.style.textDecoration = "underline";
  });


const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();

  const nav = document.getElementById("nav");
  nav.classList.toggle("active");

  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active.toString());
  event.currentTarget.setAttribute(
    "aria-label",
    active ? "Fechar Menu" : "Abrir Menu"
  );
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);