const client = require('./client');

async function init() {

	// await client.set('msg:1','Hello redis')
	await client.expire('msg:1', 15);
	const result = await client.get('msg:1');
	console.log('Result ->', result);

}
init();
