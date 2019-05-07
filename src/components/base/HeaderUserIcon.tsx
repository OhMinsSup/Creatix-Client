import * as React from 'react';
import styled from 'styled-components';
import { MdArrowDropDown } from 'react-icons/md';
import palette from '../../lib/styles/palette';

const HeaderUserIconBlock = styled.div`
  cursor: pointer;
  img {
    display: block;
    height: 2.5rem;
    width: 2.5rem;
    box-shadow: 0px 0 8px rgba(0, 0, 0, 0.085);
    border-radius: 1.5rem;
    object-fit: cover;
    transition: 0.125s all ease-in;
  }
  svg {
    font-size: 1.5rem;
    margin-left: 0.25rem;
    color: ${palette.gray6};
    transition: 0.125s all ease-in;
  }
  display: flex;
  align-items: center;
  &:hover {
    img {
      box-shadow: 0px 0 12px rgba(0, 0, 0, 0.1);
    }
    svg {
      color: ${palette.gray9};
    }
  }
`;

export interface HeaderUserIconProps {
  thumbnail?: string;
  onClick: () => void;
}

const HeaderUserIcon: React.SFC<HeaderUserIconProps> = ({
  onClick,
  thumbnail,
}) => {
  const defaultThumbnail = 'https://avatars.io/instagram/username/medium';
  return (
    <HeaderUserIconBlock onClick={onClick}>
      <img src={thumbnail || defaultThumbnail} alt="thumbnail" />
      <MdArrowDropDown />
    </HeaderUserIconBlock>
  );
};

export default HeaderUserIcon;
