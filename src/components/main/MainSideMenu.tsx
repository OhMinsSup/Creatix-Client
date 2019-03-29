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
      {/* TODO 추후 다른 사이드 메뉴 컴포넌트 생성 */}
    </MainSideMenuBlock>
  );
};

export default MainSideMenu;
