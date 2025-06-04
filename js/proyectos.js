document.getElementById("formProyecto").addEventListener("submit", function(e) {
    e.preventDefault();
    const codigo = document.getElementById("codigo").value.trim();
    const titulo = document.getElementById("titulo").value.trim();
    const area = document.getElementById("area").value;
    const estado = document.getElementById("estado").value;

    if (!codigo || !titulo || !area || !estado) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    let proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];

    if (proyectos.some(p => p.codigo === codigo || p.titulo === titulo)) {
        alert("Código o título ya registrados.");
        return;
    }

    proyectos.push({ codigo, titulo, area, estado });
    localStorage.setItem("proyectos", JSON.stringify(proyectos));
    mostrarProyectos();
    alert("Proyecto guardado con éxito.");
    this.reset();
});

function mostrarProyectos() {
    let proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];
    document.getElementById("listaProyectos").textContent = JSON.stringify(proyectos, null, 2);
}

// Mostrar al cargar
mostrarProyectos();
