// src/routes/+layout.server.ts
export const load = async ({ locals: { getSession } }) => {
	console.log('** /+layout.server.js load **');

	const session = await getSession();

	if (session) {
		console.log('+layout.server.js session true');
	} else {
		console.log('+layout.server.js session false');
	}

	return {
		session
	};
};
