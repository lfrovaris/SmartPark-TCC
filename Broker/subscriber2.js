//mqq client
const fetch = require("node-fetch");

let mqtt = require('mqtt')


var client = mqtt.connect('31.220.52.116:1883', {
    username: 'Loradatauser',
    password: '220volts#' 
  });


let topico = 'application/3/device/0000000000000001/rx';

client.on('message', (topico, message,{}) => {
    message = message.toString()
    console.log(message)
    
    /*fetch('http://localhost:3000/vaga/changeStatus/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: message
    });
    */
})
 
client.on('connect', ()=>{
    client.subscribe(topico)
})