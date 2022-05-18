import Client from "./client.js";
const arrayClients = [];

const buttonNewClient = document.getElementById("newClient");
buttonNewClient.addEventListener("click", addClient);
function addClient() {
  const clientName = prompt("Nombre del nuevo cliente");
  const clientSurname = prompt("Apellido del nuevo cliente");
  const newClient = new Client(clientName, clientSurname);
  arrayClients.push(newClient);
  console.log(arrayClients);
}

const buttonDeleteClient = document.getElementById("deleteClient");
buttonDeleteClient.addEventListener("click", deleteClient);
function deleteClient() {
  const clientName = prompt("¿Qué cliente va a ser eliminado?", "nombre");
  const clientSurname = prompt("¿Apellido del susodicho?", "apellido");
  arrayClients.find((element, index) => {
    if (clientName !== element.Name) {
      alert("No encuentro ese nombre");
      return;
    }
    if (clientName === element.Name && clientSurname === element.Surname) {
      arrayClients.splice(index, 1);
      alert("El cliente ha sido eliminado");
    }
  });
  console.log(arrayClients);
}

const buttonNewAccount = document.getElementById("newAccount");
buttonNewAccount.addEventListener("click", createAccount);
function createAccount() {
  const clientName = prompt("¿A qué cliente le creamos la cuenta?", "nombre");
  const clientSurname = prompt("¿Apellido del susodicho?", "apellido");
  arrayClients.find((element)=> {
      if (clientName !== element.Name) {
          alert("No encuentro ese nombre")
          return
      }
      if (clientName === element.Name && clientSurname === element.Surname) {
          
      }
  })
}
