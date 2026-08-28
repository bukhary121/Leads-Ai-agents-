import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.webflow.com/mcp",
  description: "Manage Webflow CMS, pages, assets and sites",
  auth: connect("mcp.webflow.com/prj_tD6PDcKBGrCgn4AUPM4T0COBjBu4"),
});
