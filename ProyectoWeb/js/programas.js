document.getElementById("formPrograma").addEventListener("submit", function(e) {
    e.preventDefault();
    const codigo = document.getElementById("codigoPrograma").value.trim();
    const nombre = document.getElementById("nombrePrograma").value.trim();
    const duracion = parseInt(document.getElementById("duracion").value);
    const modalidad = document.getElementById("modalidad").value;

    if (!codigo || !nombre || !duracion || duracion <= 0 || !modalidad) {
        alert("Todos los campos son obligatorios y válidos.");
        return;
    }

    let programas = JSON.parse(localStorage.getItem("programas")) || [];

    if (programas.some(p => p.codigo === codigo || p.nombre === nombre)) {
        alert("Código o nombre ya registrados.");
        return;
    }

    programas.push({ codigo, nombre, duracion, modalidad });
    localStorage.setItem("programas", JSON.stringify(programas));
    mostrarProgramas();
    alert("Programa guardado con éxito.");
    this.reset();
});

function mostrarProgramas() {
    let programas = JSON.parse(localStorage.getItem("programas")) || [];
    document.getElementById("listaProgramas").textContent = JSON.stringify(programas, null, 2);
}

// Mostrar al cargar
mostrarProgramas();
