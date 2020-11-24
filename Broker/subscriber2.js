//mqq client
const fetch = require("node-fetch");

let mqtt = require('mqtt')


var client = mqtt.connect('mqtt://31.220.52.116:1883', {
    username: "loradatauser", 
    password: "220volts#"
  });
  

let topico = 'application/3/device/0000000000000001/rx';

client.on('message', (topico, message,{}) => {
    
    message = message.toString()
    let obj = JSON.parse(message);
    let sensor = "1C-35-5B-5F-4A-D8";
    let data = obj.data;
    let estado;
    if (data == "AA==")
        estado = false
    if (data == "AQ==")
        estado = true
    console.log("Sensor: " + sensor + " -> estado:" + estado);

    var jsonString = "{\"macAddress\": \"" + sensor +"\"," + "\"ocupado\":\""+estado+"\"}";

    console.log(jsonString);

    fetch('http://localhost:3000/vaga/changeStatus/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonString
    });

   console.log("Dado inserido");

})
 
client.on('connect', ()=>{
    client.subscribe(topico)
})