import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const WigetItemBlock = styled.li`
  list-style: none;
  padding-left: 0;
  margin: 0;
  margin-top: 1rem;
  .item-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px 1.2rem;
    width: 100%;
    font-size: 13px;
    margin: 0;
    text-align: left;
    border: none;
    outline: none;
    background: transparent;
    position: relative;
    border-radius: 4px;
    cursor: pointer;
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
    span {
      font-size: 15px;
      font-weight: bold;
    }
    &:hover {
      background: ${palette.gray1};
    }
  }
`;

interface WigetItemProps {
  icon: React.ReactNode;
  text: string;
}

const WigetItem: React.SFC<WigetItemProps> = ({ icon, text }) => {
  return (
    <WigetItemBlock>
      <button className="item-btn">
        {icon}
        <span>{text}</span>
      </button>
    </WigetItemBlock>
  );
};

export default WigetItem;
