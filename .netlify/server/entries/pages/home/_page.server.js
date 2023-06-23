import { r as redirect } from "../../../chunks/index.js";
const load = async ({ locals: { supabase, getSession } }) => {
  const session = await getSession();
  if (!session) {
    throw redirect(303, "/");
  }
  let { data: projects } = await supabase.from("Projects").select("projectName, id").eq("user", session.user.id);
  let { data: todos } = await supabase.from("Todos").select("todoName, dueDate, notes, project, id").eq("user", session.user.id);
  return { session, projects, todos };
};
export {
  load
};
