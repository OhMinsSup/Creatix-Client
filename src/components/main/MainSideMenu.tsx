import React from 'react';
import styled from 'styled-components';
import NavMenu from './NavMenu';
import WigetMenuContanier from '../../containers/main/WigetMenuContanier';

const MainSideMenuBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

interface MainSideMenuProps {}
const MainSideMenu: React.SFC<MainSideMenuProps> = () => {
  return (
    <MainSideMenuBlock>
      <NavMenu />
      <WigetMenuContanier title="추천" />
      <WigetMenuContanier title="인기" />
    </MainSideMenuBlock>
  );
};

export default MainSideMenu;
