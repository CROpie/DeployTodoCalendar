import { f as fail } from "../../../../chunks/index.js";
const actions = {
  addProjectToDB: async ({ request, locals: { supabase, getSession } }) => {
    console.log("** /apis/+page.server.js action:addProjectToDB **");
    const formData = await request.formData();
    const projectName = formData.get("projectName");
    const session = await getSession();
    const { error } = await supabase.from("Projects").insert({
      projectName,
      user: session.user.id
    });
    if (error) {
      console.log("failed to add project");
      return fail(500, { error: "ouch" });
    } else {
      console.log("added project");
      return { success: true };
    }
  },
  removeProjectFromDB: async ({ request, locals: { supabase } }) => {
    console.log("** /apis/+page.server.js action:removeProjectFromDB **");
    const formData = await request.formData();
    const projectID = formData.get("projectID");
    const { error } = await supabase.from("Projects").delete().eq("id", projectID);
    if (error) {
      console.log("here?");
      return fail(500, { error: "ouch" });
    } else {
      console.log("or here?");
      return { success: true };
    }
  }
};
export {
  actions
};
