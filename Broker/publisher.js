//mqtt publisher

let mqtt = require('mqtt')

var client = mqtt.connect('mqtt://maqiatto.com', {
    username: 'rovarisleo@gmail.com',
    password: 'Initial1!' 
  });

let topico = 'rovarisleo@gmail.com/sensors';

let message = 'Desligado'

client.on('connect', ()=>{
    setInterval(()=>{

        client.publish(topico, message)
        console.log('Estado do sensor:',message)
    }, 2500)
})
