$(document).ready(function() {
    console.log("¡Hola mundo desde jQuery!");

    // ----- ESTE ES UN COMENTARIO PARA GIT -----


    // ==== Esto es JS Vanilla (Puro) ====
    // const btnAgregar = document.querySelector('#btn-agregar');
    // btnAgregar.addEventListener('click', () => {
    //     console.log('click en agregar');
    // });

    const obtenerBadgeStock = (stock) => {
        if (stock === 0) return '<span class="badge bg-danger">Agotado</span>';
        if (stock <= 5) return '<span class="badge bg-warning text-dark">Crítico</span>';
        return '<span class="badge bg-success">En Stock</span>';
    }

    const crearFila = (nombre, stock) => {
        return `
            <tr>
                <td class="fw-bold">${nombre}</td>
                <td>${stock}</td>
                <td>${obtenerBadgeStock(parseInt(stock))}</td>
                <td class="text-end">
                    <button class="btn btn-sm btn-outline-danger btn-eliminar">Eliminar</button>
                </td>
            </tr>
        `
    }

    $('#btn-agregar').on('click', function() {
        let nombre = $('#txt-nombre').val();
        let stock = $('#txt-stock').val(); // Todo dato del val, es de tipo String

        if (nombre === "" || stock === "") { // || = OR , && = AND
            alert("Error: Debes llenar todos los campos");
            return;
        }

        console.log(`Producto: ${nombre}, Cantidad: ${stock}`);

        // let stockNum = parseInt(stock); // Esto convierte un String a un número entero.
        // let claseBadge = "";
        // let textoEstado = "";

        // Validación de semáforo
        // if (stockNum <= 5) {
        //     claseBadge = "bg-danger";
        //     textoEstado = "CRÍTICO";
        // } else if (stock <= 15) {
        //     claseBadge = "bg-warning text-dark";
        //     textoEstado = "BAJO"
        // } else {
        //     claseBadge = "bg-success";
        //     textoEstado = "NORMAL";
        // }

        const nuevaFila = crearFila(nombre, stock);
        $('#tabla-body').append(nuevaFila);
        $('#mensaje-vacio').hide();

        $('#form-inventario')[0].reset();
        $('#txt-nombre').focus();
    });

    $('#tabla-body').on('click', '.btn-eliminar', function() {
        $(this).closest('tr').remove();
        if ($('#tabla-body tr').length === 0) $('#mensaje-vacio').show();
    });



    
});