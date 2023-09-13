import React from "react";
import "../styles/footer.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer-links">
        <li className="link-item">© 2023 GitHub, Inc.</li>
        <li className="link-item">Terms</li>
        <li className="link-item">Privacy</li>
        <li className="link-item">Sitemap</li>
        <li className="link-item">What is git?</li>
      </ul>

      <div className="socials">
        <FacebookIcon style={{ marginRight: "2rem", color: "#7c8590" }} />
        <LinkedInIcon style={{ marginRight: "2rem", color: "#7c8590" }} />
        <GitHubIcon style={{ color: "#7c8590" }} />
      </div>
    </div>
  );
}

export default Footer;
