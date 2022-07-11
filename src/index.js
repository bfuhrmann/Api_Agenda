const express = require('express');
const server = express();
const AgendaRoutes = require('./routes/AgendaRoutes');
server.use(express.json());

server.use('/agenda', AgendaRoutes);


server.listen(3000, ()=>{
    console.log('API ONLINE ')
});