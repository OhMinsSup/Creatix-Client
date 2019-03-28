import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import {
  MdSearch as SearchIcon,
  MdPersonOutline as AuthIcon,
} from 'react-icons/md';
import palette from '../../lib/styles/palette';

const HeaderBlock = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 1rem;
  position: relative;
  z-index: 920;
  .wrapper {
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
    label {
      display: inline-block;
      vertical-align: middle;
      font-size: 20px;
      margin-right: 5px;
      border-width: 0;
      padding: 0;
      text-align: left;
      white-space: normal;
      color: rgba(0, 0, 0, 0.54);
      background: rgba(0, 0, 0, 0);
      transition: 0.1s background-color, 0.1s border-color, 0.1s color,
        0.1s fill;
      .wrapper {
        display: inline-block;
        line-height: 25px;
        height: 25px;
        top: 5px;
        position: relative;
        fill: rgba(0, 0, 0, 0.54);
        vertical-align: middle;
        transition: 0.1s background-color, 0.1s border-color, 0.1s color,
          0.1s fill;
        .search {
          overflow: hidden;
        }
      }
    }
    .placeholder-search {
      display: inline-block;
      margin-right: 16px;
      border-width: 0;
      padding: 0;
      top: 7px;
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
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);
      border-radius: 5px;
    }
  }
  .auth-btn {
    display: flex;
    flex-direction: row;
    cursor: pointer;
    margin-left: 0.5rem;
    font-size: 14px;
    border-radius: 3px;
    color: #000;
    font-weight: 600;
    background: #fff;
    border: 1px solid ${palette.cyan3};
    padding: 8px 12px;
    .auth-icon {
      overflow: hidden;
      vertical-align: middle;
      width: 24px;
      height: 24px;
      fill: #000;
      margin-right: 4px;
      position: relative;
      top: -1px;
    }
    span {
      line-height: 1.7;
    }
    &:hover {
      border: 2px solid ${palette.cyan3};
    }
  }
`;

const Header: React.SFC = () => {
  return (
    <HeaderBlock>
      <div className="wrapper">
        <div className="action-nav">
          <HeaderLeft className="left">
            <Link to="/" className="brand">
              <span className="wrapper">C:</span>
            </Link>
          </HeaderLeft>
          <HeaderRight className="right">
            <div className="search-wrapper">
              <label>
                <span className="wrapper">
                  <SearchIcon className="search" />
                </span>
              </label>
              <Link to="/search" className="placeholder-search">
                찾고 싶은 검색어를 입력하세요
              </Link>
            </div>
            <div className="auth-btn">
              <AuthIcon className="auth-icon" />
              <span>로그인/회원가입</span>
            </div>
          </HeaderRight>
        </div>
      </div>
    </HeaderBlock>
  );
};

export default Header;
