$(document).ready(function() {
    console.log("¡Hola mundo desde jQuery!");

    // ==== Esto es JS Vanilla (Puro) ====
    // const btnAgregar = document.querySelector('#btn-agregar');
    // btnAgregar.addEventListener('click', () => {
    //     console.log('click en agregar');
    // });

    $('#btn-agregar').on('click', function() {
        let nombre = $('#txt-nombre').val();
        let stock = $('#txt-stock').val(); // Todo dato del val, es de tipo String

        if (nombre === "" || stock === "") { // || = OR , && = AND
            alert("Error: Debes llenar todos los campos");
            return;
        }

        console.log(`Producto: ${nombre}, Cantidad: ${stock}`);

        let stockNum = parseInt(stock); // Esto convierte un String a un número entero.
        let claseBadge = "";
        let textoEstado = "";

        // Validación de semáforo
        if (stockNum <= 5) {
            claseBadge = "bg-danger";
            textoEstado = "CRÍTICO";
        } else if (stock <= 15) {
            claseBadge = "bg-warning text-dark";
            textoEstado = "BAJO"
        } else {
            claseBadge = "bg-success";
            textoEstado = "NORMAL";
        }

        let nuevaFila = `
            <tr>
                <td>${nombre}</td>
                <td>${stock}</td>
                <td>
                    <span class="badge ${claseBadge}">${textoEstado}</span>
                </td>
                <td></td>
            </tr>
        `

        $('#tabla-body').append(nuevaFila);
    });

    
});