//mqtt

let mosca = require('mosca')
let setting = {port:1883}
let broker = new mosca.Server(setting)

broker.on('ready', ()=> {
    console.log('Broker Ready')
})


broker.on('published', (packet)=>{
    message = packet.payload.toString() //n
    console.log(message)
})