import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.sentry.dev/mcp",
  description: "Search, query, and debug errors intelligently",
  auth: connect("mcp.sentry.dev/prj_tD6PDcKBGrCgn4AUPM4T0COBjBu4"),
});
