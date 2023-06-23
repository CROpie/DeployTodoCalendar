import { r as redirect } from "../../chunks/index.js";
const load = async ({ locals: { getSession } }) => {
  console.log("** ./+page.server.js load **");
  const session = await getSession();
  if (session) {
    console.log("+page.server.js session true");
    throw redirect(303, "/home");
  } else {
    console.log("+page.server.js session false");
  }
};
export {
  load
};
