import { fail } from '@sveltejs/kit';

export const actions = {
	addTodoToDB: async ({ request, locals: { supabase, getSession } }) => {
		console.log('** /apis/todo/+page.server.js action:addTodoToDB **');
		const data = await request.formData();
		const todoName = data.get('todoName');
		const notes = data.get('notes');
		const projectID = parseInt(data.get('projectID'));
		const dueDate = data.get('dueDate');

		const session = await getSession();

		const { error } = await supabase.from('Todos').insert({
			todoName,
			dueDate,
			notes,
			project: projectID,
			user: session.user.id
		});

		if (error) {
			console.log('failed to add todo');
			return fail(500, { error: 'ouch' });
		} else {
			console.log('added todo');
			return { success: true };
		}
	},
	removeTodoFromDB: async ({ request, locals: { supabase } }) => {
		console.log('** /apis/todo/+page.server.js action:removeTodoFromDB **');
		const formData = await request.formData();
		const todoID = formData.get('todoID');

		const { error } = await supabase.from('Todos').delete().eq('id', todoID);

		if (error) {
			console.log('failed to remove todo');
			return fail(500, { error: 'ouch' });
		} else {
			console.log('removed todo');
			return { success: true };
		}
	},
	modifyTodoInDB: async ({ request, locals: { supabase } }) => {
		console.log('** /apis/todo/+page.server.js action:modifyTodoInDB  **');
		const data = await request.formData();
		const todoName = data.get('todoName');
		const dueDate = data.get('dueDate');
		const notes = data.get('notes');
		const todoID = parseInt(data.get('todoID'));

		const { error } = await supabase
			.from('Todos')
			.update({
				todoName,
				dueDate,
				notes
			})
			.eq('id', todoID);

		if (error) {
			console.log('failed to modify todo');
			return fail(500, { error: 'ouch' });
		} else {
			console.log('modified todo');
			return { success: true };
		}
	}
};
