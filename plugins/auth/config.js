var Confidence = require("confidence");

var store = new Confidence.Store({
    provider: {
        $filter: 'env',
        production: {
            facebook: {
                provider: 'facebook',
                password: 'hapi-auth-encrypt-password-586253544882306',
                clientId: '586253544882306', // fill in your FB ClientId here
                clientSecret: '86462c640d2ba53fb76386620f65cb2e111', // fill in your FB Client Secret here
                isSecure: false // Terrible idea but required if not using HTTPS
            },
            google: {
                provider: 'google',
                password: 'hapi-auth-encrypt-password',
                clientId: '', // fill in your Google ClientId here
                clientSecret: '', // fill in your Google Client Secret here
                isSecure: false // Terrible idea but required if not using HTTPS
            }
        },
        staging: {
            facebook: {
                provider: 'facebook',
                password: 'hapi-auth-encrypt-password-586253544882306',
                clientId: '586253544882306', // fill in your FB ClientId here
                clientSecret: '86462c640d2ba53fb76386620f65cb2e', // fill in your FB Client Secret here
                isSecure: false // Terrible idea but required if not using HTTPS
            },
            google: {
                provider: 'google',
                password: 'hapi-auth-encrypt-password-586253544882306',
                clientId: '', // fill in your Google ClientId here
                clientSecret: '', // fill in your Google Client Secret here
                isSecure: false // Terrible idea but required if not using HTTPS
            }
        }, // this is the default configuration if no env.ENVIRONMENT varaible is set.
        $default: {
            facebook: {
                provider: 'facebook',
                password: 'hapi-auth-encrypt-password-586253544882306',
                clientId: '586253544882306', // fill in your FB ClientId here
                clientSecret: '86462c640d2ba53fb76386620f65cb2e', // fill in your FB Client Secret here
                isSecure: false // Terrible idea but required if not using HTTPS
            },
            google: {
                provider: 'google',
                password: 'hapi-auth-encrypt-password-586253544882306',
                clientId: 'sdf', // fill in your Google ClientId here
                clientSecret: '', // fill in your Google Client Secret here
                isSecure: false // Terrible idea but required if not using HTTPS
            }
        }
    }
});

var criteria = {
    env: process.env.ENVIRONMENT
};

exports.get = function(key) {
    return store.get(key, criteria);
};
