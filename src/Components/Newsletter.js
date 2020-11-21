import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <p className="newsletter__text">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="newsletter__bar">
        <input
          type="text"
          className="newsletter__input"
          placeholder="Email address"
        />
        <a className="" href="#" className="newsletter__btn">
          GET STARTED
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </div>
    </div>
  );
};

export default Newsletter;
