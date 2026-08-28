import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.resend.com",
  description: "Send transactional and marketing email.",
  auth: connect("mcp.resend.com/prj_tD6PDcKBGrCgn4AUPM4T0COBjBu4"),
});
