
// Type your code below this line!

//- ¿Cómo recopilarás la cantidad y el nombre de cada producto?
//recopilo informacion creando items de productos para poder generar una funcion que muestre la lista de compra 

 
// 1. Crear un item
const item1 = {
    name: "rice",
    quantity: 2
};

// 2. Crear una lista vacía
const listacompra = [];

// 3. Función para agregar nuevos productos
function itemnew(name, quantity) {
    //- ¿Cómo manejarás artículos repetidos?
    //  lo hago con una condición de if y else para que sume los valores de los items de productos repetidos 
    const existente = listacompra.find(item => item.name == name) 
    const item2 = {
        name: name,
        quantity: quantity
    };
    if(existente){
        existente.quantity+=quantity;
    } else {
        const item2 ={name, quantity};
    }

    listacompra.push(item2); // agregamos el nuevo producto
}

// 4. Agregar elementos
listacompra.push(item1);
itemnew("apple", 9);
itemnew("cookies", 45);
itemnew("rice", 5)
itemnew("butter", 1)



 //- ¿Cómo imprimirás el resumen final de la lista?
 
function mostrarLista() {
    console.log("🛒 Lista de compras:");
    for (let i = 0; i < listacompra.length; i++) {
        const item = listacompra[i];
        console.log(`- ${item.name}: ${item.quantity} unidades`);
    }
}


mostrarLista();

//