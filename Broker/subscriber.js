//mqq client
const fetch = require("node-fetch");

let mqtt = require('mqtt')


var client = mqtt.connect('mqtt://maqiatto.com', {
    username: 'rovarisleo@gmail.com',
    password: 'Initial1!' 
  });


let topico = 'rovarisleo@gmail.com/sensors';

client.on('message', (topico, message,{}) => {
    message = message.toString()
    console.log(message)
    
    fetch('http://localhost:3000/vaga/changeStatus/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: message
    });
})
 
client.on('connect', ()=>{
    client.subscribe(topico)
})