import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.agentcard.sh/mcp",
  description: "Virtual cards for AI agents and the Purchase API",
  auth: connect("mcp.agentcard.sh/prj_tD6PDcKBGrCgn4AUPM4T0COBjBu4"),
});
