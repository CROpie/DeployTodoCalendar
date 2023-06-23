import { redirect } from '@sveltejs/kit';

export const load = async ({ locals: { supabase, getSession } }) => {
	console.log('** /home/+page.server.js load **');
	const session = await getSession();

	if (!session) {
		throw redirect(303, '/');
	}

	// supabase auto generated api SELECT PROJECTNAME
	// added filter to get only logged in user
	// only a blank array returned until RLS enabled in policies on supabase website
	let { data: projects } = await supabase
		.from('Projects')
		.select('projectName, id')
		.eq('user', session.user.id);

	let { data: todos } = await supabase
		.from('Todos')
		.select('todoName, dueDate, notes, project, id')
		.eq('user', session.user.id);

	return { session, projects, todos };
};
