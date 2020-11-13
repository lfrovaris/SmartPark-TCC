const express = require('express'); //Colocando todo o express na constante 
const server = express(); //jogando no servidor inicializado
server.use(express.json());


const MotoristaRoutes = require('./routes/MotoristaRoutes');
server.use('/motorista', MotoristaRoutes);

const VagaRoutes = require('./routes/VagaRoutes');
server.use('/vaga', VagaRoutes);

const LoginRoutes = require('./routes/LoginRoutes');
server.use('/login', LoginRoutes);


server.listen(3000,() => {
    console.log("API ONLINE");
});