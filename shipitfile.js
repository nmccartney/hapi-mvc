module.exports = function (shipit) {
	require('shipit-deploy')(shipit);

	shipit.initConfig({
		default: {
			workspace: '/tmp/demo',
			deployTo: '/tmp/demo',
			repositoryUrl: 'https://github.com/nmccartney/ship-hapi',
			ignores: ['.git', 'node_modules'],
			rsync: ['--del'],
			keepReleases: 2,
			// key: '/path/to/key',
			shallowClone: true
		},
		staging: {
		  	servers: 'root@107.170.137.178'
		}
	});

	shipit.task('pwd', function () {
		return shipit.remote('pwd');
	});
};