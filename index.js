'use strict';

const Hapi = require('hapi');
const plugins = require('./plugins')

// Create a server with a host and port
const server = new Hapi.Server();
server.connection(
    { 
        port: 3000 
    },
    {
        cors:true,
        debug: { 'request': ['error', 'uncaught'] }
    }
);





// Start the server
server.register(require('./plugins'),(err) => {

    if (err) {
        throw err;
    }

    server.route(require('./routes/groups'));

    // Add the route
    server.route({
        method: 'GET',
        path:'/', 
        config: {  // try with redirectTo disabled makes isAuthenticated usefully available
            auth: {
                strategy: 'session',
                mode: 'try'
            },
            plugins: { 'hapi-auth-cookie': { redirectTo: false } }
        },
        handler: function (request, reply) {
            var html = "hapi world... <br>"+
            'auth: '+JSON.stringify(request.auth)+'<br>'+
            'cache: '+JSON.stringify(request.cache)+'<br>'+
            'request: '+JSON.stringify(request.session)+'<br>'+
            // 'request: '+JSON.stringify(request)+'<br>'+
            '<a href="/auth/facebook"> facebook</a>';
            // console.log(request)
            return reply(html);
        }
    });

    server.route({
        path: '/myprofile',
        method: 'GET',
        config: {
            auth: 'session',
            handler: function(request, reply) {
                reply('<html><head><title>Login page</title></head><body><h3>Welcome '
                  + JSON.stringify(request.auth.credentials, null, 4)
                  + '!</h3><br/><form method="get" action="/logout">'
                  + '<input type="submit" value="Logout">'
                  + '</form></body></html>');
            }
        }
    })

    server.start((err) => {

        if (err) {
            throw err;
        }

        console.log('Server running at:', server.info.uri);

    });
});
    

