var Group = require('../models/groups');
var Boom = require('boom')

module.exports = {
    /**
    **
    **/
    'index' : (req, res) => {
        const Group = req.collections.groups;

        Group.find()
            .then((list) => { res(list)})
    },
    /**
    **
    **/
    'show' : (req, res) => {
        const Group = req.collections.groups;

        Group.findOne( req.params, (err, user) => {

            if (err) {
                return res(Boom.badData('Internal DB error', err));
            }

            if (!user) {
                console.log('unknown error')
                return res(Boom.notFound('Group error'));
            }

            res(user);
        });
    },
    /**
    **
    **/
    'create' : (req, res) => {

        const Group = req.collections.groups;

        Group
            .create({ name: req.params.name },(err,group) => {

                if (err) {
                    console.log('bad data error')
                    return res(Boom.badData('Internal DB error', err));
                }

                if (!group) {
                    console.log('unknown error')
                    return res(Boom.notFound('Group error'));
                }

                return res(group);
            });
    },
    /**
    **
    **/
    'update' : (req, res) => {
        res("Group update...");
    },
    /**
    **
    **/
    'delete' : (req, res) => {
        res("Group delete...");
    },
}
