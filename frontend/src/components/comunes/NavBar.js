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
        <SideNav.Nav>
          <NavItem eventKey="home">
            <NavIcon>
              <NavLink to="/home" activeClassName="navbar__link--active">
                <i class="fas fa-warehouse"></i>
              </NavLink>
            </NavIcon>
            <NavText>
              <NavLink className="linkexpanded" to="/home">
                Dashboard
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="crear">
            <NavIcon>
              <NavLink to="/crear" activeClassName="navbar__link--active">
                <i className="fas fa-list"></i>
              </NavLink>
            </NavIcon>
            <NavText>
              <NavLink className="linkexpanded" to="/crear">
                Editor de reglas
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="asignaciones">
            <NavIcon>
              <NavLink
                to="/asignaciones"
                activeClassName="navbar__link--active"
              >
                <i class="fas fa-code-branch"></i>
              </NavLink>
            </NavIcon>
            <NavText>
              <NavLink className="linkexpanded" to="/asignaciones">
                Asignaciones
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="modulos">
            <NavIcon>
              <NavLink to="/modulos" activeClassName="navbar__link--active">
                <i class="fas fa-th"></i>
              </NavLink>
            </NavIcon>
            <NavText>
              <NavLink className="linkexpanded" to="/modulos">
                Módulos
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="resultados">
            <NavIcon>
              <NavLink to="/resultados" activeClassName="navbar__link--active">
                <i class="fas fa-chart-bar"></i>
              </NavLink>
            </NavIcon>
            <NavText>
              <NavLink className="linkexpanded" to="/resultados">
                Resultados
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="asociaciones">
            <NavIcon>
              <NavLink
                to="/asociaciones"
                activeClassName="navbar__link--active"
              >
                <i class="fas fa-chalkboard-teacher"></i>
              </NavLink>
            </NavIcon>
            <NavText>
              <NavLink className="linkexpanded" to="/asociaciones">
                Asociaciones
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="simulaciones">
            <NavIcon>
              <NavLink
                to="/simulaciones"
                activeClassName="navbar__link--active"
              >
                <i class="fab fa-whmcs"></i>
              </NavLink>
            </NavIcon>
            <NavText>
              <NavLink className="linkexpanded" to="/simulaciones">
                Simulaciones
              </NavLink>
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
