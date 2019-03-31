import React from 'react';
import styled from 'styled-components';
import WigetItem from './WigetItem';
import {
  MdPhoto as IllustIcon,
  MdLibraryBooks as BookIcon,
  MdLibraryMusic as MusicIcon,
} from 'react-icons/md';
import palette from '../../lib/styles/palette';

const WigetMenuBlock = styled.div`
  padding: 0 1.2rem 1.2rem 1.2rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border-bottom: 1px solid ${palette.gray2};
  h3 {
    margin-bottom: 1rem;
    position: relative;
    font-weight: 700;
    font-size: 18px;
    color: #4d4d4d;
    margin: 0;
  }
  .body {
    margin-top: 1rem;
    padding-left: 0;
  }
`;

interface WigetMenuProps {
  title: string;
}

const WigetMenu: React.SFC<WigetMenuProps> = ({ title }) => {
  return (
    <WigetMenuBlock>
      <h3>{title}</h3>
      <div className="body">
        <WigetItem icon={<IllustIcon />} text="일러스트" />
        <WigetItem icon={<BookIcon />} text="소설" />
        <WigetItem icon={<MusicIcon />} text="음악" />
      </div>
    </WigetMenuBlock>
  );
};

export default WigetMenu;
