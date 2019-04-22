import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { MdSearch as SearchIcon } from 'react-icons/md';
import palette from '../../lib/styles/palette';
import HeaderUserIcon from './HeaderUserIcon';
import HeaderUserMenu from './HeaderUserMenu';
import useToggle from '../../lib/hooks/useToggle';

const HeaderBlock = styled.div<{ floating: boolean }>`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  z-index: 920;
  ${props =>
    props.floating &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0px 0 8px rgba(0, 0, 0, 0.08);
    `}
  > .wrapper {
    padding: 0 15px;
    max-width: 100%;
    margin: auto;
    .action-nav {
      display: flex;
      position: relative;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      max-width: 1024px;
      padding-left: 20px;
      padding-right: 20px;
      margin-left: auto;
      margin-right: auto;
      .left {
        display: flex;
        position: relative;
        align-items: center;
        flex: 1 1 auto;
        z-index: 500;
      }
      .right {
        display: flex;
        flex: 0 0 auto;
        z-index: 500;
        position: relative;
      }
    }
  }
`;

const HeaderLeft = styled.div`
  .brand {
    flex: 0 0 auto;
    fill: rgba(0, 0, 0, 0.84);
    border: 0;
    z-index: 700;
    background-color: transparent;
    text-decoration: none;
    cursor: pointer;
    .wrapper {
      display: flex;
      font-size: 2rem;
      color: ${palette.gray7};
      font-weight: 800;
      letter-spacing: 1px;
    }
  }
`;

const HeaderRight = styled.div`
  .search-wrapper {
    padding: 0.5rem;
    margin-right: 0.25rem;
    .search {
      height: 25px;
      width: 25px;
    }
    .placeholder-search {
      display: inline-block;
      text-align: left;
      white-space: normal;
      position: relative;
      color: rgba(0, 0, 0, 0.54);
      background: rgba(0, 0, 0, 0);
      font-size: 16px;
      text-decoration: none;
      cursor: pointer;
      transition: 0.1s background-color, 0.1s border-color, 0.1s color,
        0.1s fill;
    }
    &:hover {
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);
      border-radius: 5px;
    }
  }
  .auth-btn {
    display: flex;
    flex-direction: row;
    margin-left: 0.5rem;
    font-size: 14px;
    border-radius: 3px;
    font-weight: 600;
    background: #fff;
    border: 1px solid ${palette.cyan3};
    cursor: pointer;
    button {
      border: none;
      outline: none;
      background: white;
      cursor: pointer;
      padding: 8px 12px;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.1rem;
    }
    &:hover {
      background: ${palette.cyan3};
      button {
        background: ${palette.cyan3};
        color: white;
      }
    }
  }
`;

interface HeaderProps {
  width: number;
  user: boolean;
  floating: boolean;
  onAuthModalOpen: () => void;
}

const Header: React.SFC<HeaderProps> = ({
  floating,
  onAuthModalOpen,
  user,
  width,
}) => {
  const [userMenu, toggleUserMenu] = useToggle(false);

  return (
    <HeaderBlock floating={floating}>
      <div className="wrapper">
        <div className="action-nav">
          <HeaderLeft className="left">
            <Link to="/" className="brand">
              <span className="wrapper">C:</span>
            </Link>
          </HeaderLeft>
          <HeaderRight className="right">
            <div className="search-wrapper">
              {width < 768 ? (
                <SearchIcon className="search" />
              ) : (
                <Link to="/search" className="placeholder-search">
                  찾고 싶은 검색어를 입력하세요
                </Link>
              )}
            </div>
            {user ? (
              <div>
                <HeaderUserIcon onClick={toggleUserMenu} />
                <HeaderUserMenu
                  onClose={toggleUserMenu}
                  onLogout={() => ({})}
                  username="veloss"
                  visible={userMenu}
                />
              </div>
            ) : (
              <div className="auth-btn">
                <button onClick={onAuthModalOpen}>로그인/회원가입</button>
              </div>
            )}
          </HeaderRight>
        </div>
      </div>
    </HeaderBlock>
  );
};

export default Header;
