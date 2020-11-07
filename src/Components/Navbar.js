import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  // Theme Switcher Pending
// import { faAdjust, faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);

      return () => {
        window.removeEventListener("scroll");
      };
    });
  });

  // {/*Nav__switcher*/}

  //   useEffect(() => {
  //     let themeController = document.getElementById("Theme__adjustor");
  //     let appMainContainer = document.getElementById("app__mainContainer");
  //     let removeBannerBottomFade = document.getElementById(
  //       "Banner__fade__bottom"
  //     );
  //     let rowBgChanger = document.getElementById("row__postersContainer");

  //     themeController.addEventListener("click", () => {
  //       console.log("Theme__Switcher Triggered");
  //       removeBannerBottomFade.classList.toggle("Banner__fade__bottom");
  //       appMainContainer.classList.toggle("app__mainContainer");
  //       rowBgChanger.classList.add("Row__bg__changer");
  //     });
  //   }, []);

  return (
    <div className={`navBar ${show && "navBlack"}`} id="nav">
      <img
        className={`netflix__logo`}
        src="https://i.ibb.co/52KLQyp/toppng-com-netflix-logo-icon-400x300.png"
        alt="NETFLIX-LOGO"
        border="0"
      ></img>

      {/* Theme Switcher */}

      {/* <div className="Navbar__icons_container">
        <FontAwesomeIcon
          className="Theme__adjustor pointer"
          id="Theme__adjustor"
          icon={faSun}
        />
      </div> */}

      <img
        className="user__avatar"
        src="https://i.ibb.co/sVB3zrK/avatar-icon-images-4.png"
        alt="User-Avatar"
        border="0"
      ></img>
    </div>
  );
};

export default Navbar;
