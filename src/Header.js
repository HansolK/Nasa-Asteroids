import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "@zendeskgarden/react-chrome/dist/styles.css";
import {
  Chrome,
  Nav,
  NavItem,
  NavItemIcon,
  NavItemText
} from "@zendeskgarden/react-chrome";
import { ReactComponent as HomeIcon } from "@zendeskgarden/svg-icons/src/26/home-fill.svg";
import { ReactComponent as PersonIcon } from "@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg";
import "./Header.css";
import moment from "moment";

function Header() {
  const today = moment().format("YYYY-MM-DD");
  return (
    <>
      <Chrome>
        <Nav expanded>
          <NavItem as={Link} to="/">
            <NavItemIcon>
              <HomeIcon />
            </NavItemIcon>
            <NavItemText>Home</NavItemText>
          </NavItem>
          <NavItem as={Link} to="/about">
            <NavItemIcon>
              <PersonIcon />
            </NavItemIcon>
            <NavItemText>About</NavItemText>
          </NavItem>
          <NavItem as={Link} to={`/asteroids/${today}`}>
            <NavItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </NavItemIcon>
            <NavItemText>Asteroids</NavItemText>
          </NavItem>
          <NavItem as={Link} to={`/mars/${today}`}>
            <NavItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <circle cx="12" cy="12" r="3.2" />
                <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </NavItemIcon>
            <NavItemText>Mars</NavItemText>
          </NavItem>
        </Nav>
      </Chrome>
    </>
  );
}

export default Header;
