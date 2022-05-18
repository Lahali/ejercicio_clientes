import Client from "./client.js"
const arrayClients = []

const buttonNewClient = document.getElementById("newClient")
buttonNewClient.addEventListener('click', addClient)
function addClient() {
    const clientName = prompt("Nombre del nuevo cliente")
    const clientSurname = prompt("Apellido del nuevo cliente")
    const newClient = new Client(clientName, clientSurname)
    arrayClients.push(newClient)
    console.log(arrayClients)
}
