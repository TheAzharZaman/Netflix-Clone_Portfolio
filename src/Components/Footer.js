import React from "react";

import { Link } from "react-scroll";
import CopyrightSection from "./CopyrightSection";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sectionSeperator2"></div>
      <h3 className="footerTop__callText">Questions? Call 0800-022-5173</h3>
      {/* Cloumn One */}
      <div className="footerContent__columns flexrow evenly">
        <div className="footerColumn__one flexcolumn">
          <Link
            className="footerColumn__item pointer"
            to="faqsSection"
            smooth={true}
          >
            FAQ
          </Link>
          <a className="footerColumn__item pointer" href="#">
            Investor Relations
          </a>
          <a className="footerColumn__item pointer" href="#">
            Privacy
          </a>
          <a className="footerColumn__item pointer" href="#">
            Speed Test
          </a>
        </div>

        {/* Column 2 */}

        <div className="footerColumn__two flexcolumn">
          <a className="footerColumn__item pointer" href="#">
            Help Center
          </a>
          <a className="footerColumn__item pointer" href="#">
            Jobs
          </a>
          <a className="footerColumn__item pointer" href="#">
            Cookie Preferences
          </a>
          <a className="footerColumn__item pointer" href="#">
            Legal Notices
          </a>
        </div>

        {/* Column 3 */}

        <div className="footerColumn__three flexcolumn">
          <a className="footerColumn__item pointer" href="#">
            Account
          </a>
          <a className="footerColumn__item pointer" href="#">
            Ways to Watch
          </a>
          <a className="footerColumn__item pointer" href="#">
            Corporate Information
          </a>
          <Link
            className="footerColumn__item pointer"
            to="banner__fade__bottom"
            smooth={true}
            duration={1200}
          >
            Netflix Originals
          </Link>
        </div>

        {/* Column 4 */}

        <div className="footerColumn__four flexcolumn">
          <a className="footerColumn__item pointer" href="#">
            Media Center
          </a>
          <a className="footerColumn__item pointer" href="#">
            Terms of Use
          </a>
          <a className="footerColumn__item pointer" href="#">
            Contact Us
          </a>
        </div>
      </div>
      // <CopyrightSection />
      <div className="btm">
        <h3>e</h3>
      </div>
    </div>
  );
};

export default Footer;
