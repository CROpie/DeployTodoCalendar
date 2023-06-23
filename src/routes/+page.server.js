// src/routes/+page.server.ts
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals: { getSession } }) => {
	console.log('** ./+page.server.js load **');
	const session = await getSession();

	if (session) {
		console.log('+page.server.js session true');
		throw redirect(303, '/home');
	} else {
		console.log('+page.server.js session false');
	}
};
