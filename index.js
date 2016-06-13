'use strict';

const Hapi = require('hapi');
const plugins = require('./plugins')

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    port: 3000 
});


// Add the route
server.route({
    method: 'GET',
    path:'/', 
    handler: function (request, reply) {

        return reply('hapi world...');
    }
});


// Start the server
server.register(require('./plugins'),(err) => {

    if (err) {
        throw err;
    }

    server.route(require('./routes/groups'));

    server.start((err) => {

        if (err) {
            throw err;
        }

        console.log('Server running at:', server.info.uri);

    });
});
    

