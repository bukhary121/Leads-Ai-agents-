import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://coda.io/apis/mcp",
  description: "Create, search, update docs and tables",
  auth: connect("coda.io/prj_tD6PDcKBGrCgn4AUPM4T0COBjBu4"),
});
