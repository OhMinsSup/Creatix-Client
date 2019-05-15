import * as React from 'react';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';
import HeaderUserMenuItem from './HeaderUserMenuItem';

const HeaderUserMenuBlock = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 1rem;
  right: 0;
  > .menu-wrapper {
    width: 12rem;
    background: white;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  }
`;

interface HeaderUserMenuProps {
  username: string;
  visible: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const HeaderUserMenu: React.SFC<HeaderUserMenuProps> = ({
  onClose,
  onLogout,
  username,
  visible,
}) => {
  if (!visible) return null;
  return (
    <OutsideClickHandler onOutsideClick={onClose}>
      <HeaderUserMenuBlock>
        <div className="menu-wrapper">
          <HeaderUserMenuItem to={`/@${username}`}>
            내 페이지
          </HeaderUserMenuItem>
          <HeaderUserMenuItem to="/">일러스트 작성</HeaderUserMenuItem>
          <HeaderUserMenuItem to="/">소설 작성</HeaderUserMenuItem>
          <HeaderUserMenuItem to="/">북마크</HeaderUserMenuItem>
          <HeaderUserMenuItem to="/setting">설정</HeaderUserMenuItem>
          <HeaderUserMenuItem onClick={onLogout}>로그아웃</HeaderUserMenuItem>
        </div>
      </HeaderUserMenuBlock>
    </OutsideClickHandler>
  );
};

export default HeaderUserMenu;
