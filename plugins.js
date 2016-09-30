
var dogwaterOptions = {
  connections: {
    theDB : {
      adapter: 'theDB'
    }
  },
  adapters:{
     theDB : 'sails-disk'
  },
  models: require('./models')
};

const options = {
    ops: {
        interval: 1000
    },
    reporters: {
        console: [{
              module: 'good-squeeze',
              name: 'Squeeze',
              args: [{ log: '*', response: '*' , error:'*'}]
          }, 
          {
              module: 'good-console',
              args: [{ops:'*', log: '*', response: '*' , error:'*'}]
          }, 'stdout'],
        file: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ ops: '*' }]
        }, {
            module: 'good-squeeze',
            name: 'SafeJson'
        }, {
            module: 'good-file',
            args: ['./test/fixtures/awesome_log']
        }],
        http: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ error: '*' }]
        }, {
            module: 'good-http',
            args: ['http://prod.logs:3000', {
                wreck: {
                    headers: { 'x-api-key': 12345 }
                }
            }]
        }]
    }
};


module.exports = [
	{
    register : require('blipp')
  },
	{
    register: require('dogwater'),
    options: dogwaterOptions
  },
  {
    register: require('good'),
    options,
  },
  // { plugin: require('lout') },
    require('bell') ,
    require('hapi-auth-cookie') ,
    require('./plugins/auth')
]
