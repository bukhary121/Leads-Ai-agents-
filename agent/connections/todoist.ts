import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://ai.todoist.net/mcp",
  description: "Search, complete, and manage your tasks in Todoist",
  auth: connect("ai.todoist.net/prj_tD6PDcKBGrCgn4AUPM4T0COBjBu4"),
});
