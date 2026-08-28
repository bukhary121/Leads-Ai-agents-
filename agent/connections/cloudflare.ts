import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.cloudflare.com/mcp",
  description: "Build applications with compute, storage, and AI",
  auth: connect("mcp.cloudflare.com/prj_tD6PDcKBGrCgn4AUPM4T0COBjBu4"),
});
