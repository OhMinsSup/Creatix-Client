import React from 'react';
import styled from 'styled-components';
import NavMenu from './NavMenu';

const MainSideMenuBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

interface MainSideMenuProps {}
const MainSideMenu: React.SFC<MainSideMenuProps> = () => {
  return (
    <MainSideMenuBlock>
      <NavMenu />
    </MainSideMenuBlock>
  );
};

export default MainSideMenu;
