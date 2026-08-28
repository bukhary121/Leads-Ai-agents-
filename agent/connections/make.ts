import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.make.com",
  description: "Run Make scenarios and manage your Make account",
  auth: connect("mcp.make.com/prj_tD6PDcKBGrCgn4AUPM4T0COBjBu4"),
});
