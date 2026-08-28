import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.agentmail.to/mcp",
  description: "Email inboxes for AI agents",
  auth: connect("mcp.agentmail.to/prj_tD6PDcKBGrCgn4AUPM4T0COBjBu4"),
});
