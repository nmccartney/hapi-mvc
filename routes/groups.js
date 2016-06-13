'use strict';

// const Boom = require('boom');  
// const uuid = require('node-uuid');  
// const Joi = require('joi');
const controller = require('../controllers/groups');

module.exports = [
	{  
		method: 'GET',
		path: '/groups',
		handler: controller.index,
		config: {
        // validate: require('./validators/users').showUserPage
    }
	},
	{  
		method: 'GET',
		path: '/groups/{name}',
		handler: controller.show,
		config: {
        // validate: require('./validators/users').showUserPage
    }
	},
	{  
		method: 'POST',
		path: '/groups/new/{name}',
		handler: controller.create,
		config: {
        // validate: require('./validators/users').showUserPage
    }
	},
	{  
		method: ['PATCH', 'POST'],
		path: '/groups/{id}',
		handler: controller.update,
		config: {
        // validate: require('./validators/users').showUserPage
    }
	},
	{  
		method: 'DELETE',
		path: '/groups/{id}',
		handler: controller.delete,
		config: {
        // validate: require('./validators/users').showUserPage
    }
	},
];
