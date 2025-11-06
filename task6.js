
// Type your code below this line!
 
// 1. Crear un item
const item1 = {
    name: "rice",
    quantity: 2
};

// 2. Crear una lista vacía
const listacompra = [];

// 3. Función para agregar nuevos productos
function itemnew(name, quantity) {
    const item2 = {
        name: name,
        quantity: quantity
    };
    listacompra.push(item2); // agregamos el nuevo producto
}

// 4. Agregar elementos
listacompra.push(item1);
itemnew("apple", 9);
itemnew("cookies", 45);
itemnew("rice", 5);

// 5. Mostrar la lista con formato bonito
function mostrarLista() {
    console.log("🛒 Lista de compras:");
    for (let i = 0; i < listacompra.length; i++) {
        const item = listacompra[i];
        console.log(`- ${item.name}: ${item.quantity} unidades`);
    }
}

//
mostrarLista();