
const prompt = require("prompt-sync")();

function FriendsList() {
  this.friends = [];

  this.addFriends = function() {
    const cantidad = parseInt(prompt(`¿Cuántos amigos deseas ingresar? `));

    for (let i = 0; i < cantidad; i++) {
      const nombre = prompt(`Ingresa el nombre del amigo ${i + 1}: `);
      this.friends.push(nombre);
    }

    console.log("\nLista de amigos:");
    console.log(this.friends);
  }
}

const lista = new FriendsList();
lista.addFriends();


