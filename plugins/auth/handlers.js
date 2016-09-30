//Handler functions used by the routes.
exports.sessionManagement = function(request, reply) {

    /*session management using hapi-cookie*/
    var account = request.auth.credentials;
    var sid = '' + account.profile.id;

    console.log('----------------------');
    console.log(request.auth);
    console.log('----------------------');

    //cache object bounded to the plugin is available here.
    this.cache.set(sid, {
        account: account
    }, 0, function(err) {
        if (err) {
            return reply(err);
        }
        if(request.cookieAuth)
            request.cookieAuth.set({
                sid: sid
            });
        
        return reply.redirect('/');
    });
};
