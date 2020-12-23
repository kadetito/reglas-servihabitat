import React from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar__container">
      <SideNav onSelect={(selected) => {}}>
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <NavLink to="/">
                <i className="fa fa-fw fa-home" />
              </NavLink>
            </NavIcon>
            <NavText>
              <NavLink to="/">Home</NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="listado">
            <NavIcon>
              <NavLink to="/listado">
                <i className="fas fa-list"></i>
              </NavLink>
            </NavIcon>
            <NavText>
              <NavLink to="/listado">Listado</NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="crear">
            <NavIcon>
              <NavLink to="/crear">
                <i className="fas fa-edit"></i>
              </NavLink>
            </NavIcon>
            <NavText>
              <NavLink to="/crear">Crear Reglas</NavLink>
            </NavText>
          </NavItem>

          {/* <NavItem eventKey="charts">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>Charts</NavText>
            <NavItem eventKey="charts/linechart">
              <NavText>Line Chart</NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavText>Bar Chart</NavText>
            </NavItem>
          </NavItem> */}
        </SideNav.Nav>
      </SideNav>
    </div>
  );
};
