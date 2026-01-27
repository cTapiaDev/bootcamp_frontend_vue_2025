# Validador de Carrito de Compras Dinámico
El sistema debe reaccionar visualmente si el usuario intenta gastar más de lo permitido o si agrega productos de categorías específicas.

---

### Etapas:
1. Estructura (BEM):
    - Crear un contenedor principal.
    - Crear un formulario para poder ingresar el nombre y precio del producto.
    - Crear un elemento que muestre la lista de los items.
    - Crear un elemento de estado en dónde se muestre el total y un mensaje de advertencia según corresponda.

2. Estilos (SCSS):
    - Definir variables de colores.
    - Crear un modificador que cambie la sección según corresponda (opcional)
    - Crear un modificador que permita aplicar una regla para los items que superen los $50.000
    su texto se debe poner en negrita automáticamente.

3. Lógica (JS):
    - Usar un array de objetos para guardar los productos.
    - Crear una función para calcular el total (se puede utilizar .reduce)
    - Crear una función que renderice la lista cada vez que se agrega un nuevo producto (recomendación de map).
    - Agregar un botón que permita limpiar el carrito.
