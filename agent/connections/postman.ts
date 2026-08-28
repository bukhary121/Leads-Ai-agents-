import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.postman.com/minimal",
  description: "Give API context to your coding agents",
  auth: connect("mcp.postman.com/prj_tD6PDcKBGrCgn4AUPM4T0COBjBu4"),
});
