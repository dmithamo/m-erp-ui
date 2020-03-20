import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import RESOURCES from '../../common/constants/resources';
import User from './AuthenticatedUser';
import { logoutUser } from '../auth/storeLogic/actions';

export function Sidebar(props) {
  const { user, onLogout } = props;
  return (
    <StyledSidebar>
      <div id="user">
        <User user={user} onLogout={onLogout} />
      </div>

      <div id="upper">
        {Object.values(RESOURCES)
          .filter((r) => !['help', 'LLC 2020'].includes(r.name))
          .map((resource) => (
            <SidebarItem key={resource.path} route={resource} />
          ))}
      </div>

      <div id="lower">
        <SidebarItem route={RESOURCES.help} />
        <SidebarItem route={RESOURCES.about} />
      </div>
    </StyledSidebar>
  );
}

Sidebar.propTypes = {
  user: PropTypes.any.isRequired,
  onLogout: PropTypes.func.isRequired,
};

const StyledSidebar = styled.nav`
  background: #a8ff78;
  background: -webkit-linear-gradient(to right, #78ffd6, #a8ff78);
  background: linear-gradient(to right, #78ffd6, #a8ff78);

  display: grid;
  grid-template-rows: 1fr 2fr 1fr;

  div {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: black;
  }

  div#user {
    height: 10em;
    border-radius: 50%;
    margin: auto;
    align-items: center;
    justify-content: center;
  }

  div#upper {
    justify-content: center;
    margin-bottom: 25px;
  }

  div#lower {
    border-top: 3px solid #ffffff60;
    justify-content: center;
  }
`;

export function SidebarItem({ route: { path, name, icon } }) {
  return (
    <StyledLink activeClassName="isActive" to={path}>
      <FontAwesomeIcon icon={icon} />
      <span>{name}</span>
    </StyledLink>
  );
}

SidebarItem.propTypes = {
  route: PropTypes.shape({
    path: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.any,
  }).isRequired,
};

const StyledLink = styled(NavLink)`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 30px 1fr;
  grid-gap: 10px;
  align-items: center;
  padding: 0.8em;
  text-decoration: none;
  text-transform: capitalize;
  color: #000;
  opacity: 0.7;
  margin-bottom: 2em;
  font-weight: bold;

  svg {
    font-size: 1.3em;
  }

  &.isActive {
    opacity: 1;
    background-color: #fff;
  }

  :hover {
    opacity: 1;
    background-color: #fff;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: space-around;

    span {
      display: none;
    }
  }
`;

const mapStateToProps = (state) => ({ user: state.auth.user });
const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(logoutUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
