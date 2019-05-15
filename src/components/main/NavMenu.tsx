import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  MdHome as HomeIcon,
  MdPhoto as IllustIcon,
  MdLibraryBooks as BookIcon,
} from 'react-icons/md';
import palette from '../../lib/styles/palette';

const NavMenuItem = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  position: relative;
  padding: 6px 1.2rem;
  font-size: 15px;
  text-align: left;
  color: #000;
  position: relative;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 0.5rem;
  svg {
    display: inline-block;
    width: 20px;
    height: 20px;
    fill: #4d4d4d;
    opacity: 0.64;
    margin-right: 1rem;
    overflow: hidden;
    vertical-align: middle;
  }
  &:hover {
    background: ${palette.gray1};
  }
  &.active {
    border-right: 3px solid ${palette.cyan4};
    color: ${palette.cyan4};
    font-weight: 700;
    svg {
      fill: ${palette.cyan4};
    }
  }
`;

const NavMenuBlock = styled.nav`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${palette.gray2};
  ul {
    margin: 0;
    list-style: none;
    padding-left: 0;
  }
`;

interface NavMenuProps {}
const NavMenu: React.SFC<NavMenuProps> = () => {
  return (
    <NavMenuBlock>
      <ul>
        <NavMenuItem
          to="/"
          activeClassName="active"
          isActive={(match, location) => {
            return ['/'].indexOf(location.pathname) !== -1;
          }}
        >
          <HomeIcon />
          <span>Home</span>
        </NavMenuItem>
        <NavMenuItem to="/illust">
          <IllustIcon />
          <span>일러스트</span>
        </NavMenuItem>
        <NavMenuItem to="/books">
          <BookIcon />
          <span>소설</span>
        </NavMenuItem>
      </ul>
    </NavMenuBlock>
  );
};

export default NavMenu;
