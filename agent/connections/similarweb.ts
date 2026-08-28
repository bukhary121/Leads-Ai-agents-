import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.similarweb.com",
  description: "Real time web, mobile app, and market data.",
  auth: connect("mcp.similarweb.com/prj_tD6PDcKBGrCgn4AUPM4T0COBjBu4"),
});
