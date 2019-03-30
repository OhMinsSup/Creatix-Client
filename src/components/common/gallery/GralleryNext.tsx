import React from 'react';
import styled from 'styled-components';
import { FaChevronRight as NextArrowIcon } from 'react-icons/fa';

const GralleryNextBlock = styled.div`
  display: block;
  right: 0;
  width: 67%;
  position: absolute;
  z-index: 1;
  top: 0;
  height: 100%;
  cursor: pointer;
  .handle-next {
    position: absolute;
    top: 35%;
    right: -50px;
    width: 50px;
    height: 200px;
    margin-top: -17px;
    display: block;
    transition: opacity 0.05s ease-in-out;
    color: #fff;
    opacity: 0.3;
    line-height: 200px;
    .next {
      display: inline-block;
      font-style: normal;
      vertical-align: baseline;
      position: relative;
      font-size: 21px;
      line-height: 1;
    }
    &:hover {
      opacity: 1;
    }
  }
`;

interface GralleryNextProps {
  onClick: () => void;
}

const GralleryNext: React.SFC<GralleryNextProps> = ({ onClick }) => {
  return (
    <GralleryNextBlock onClick={onClick}>
      <span className="handle-next">
        <NextArrowIcon className="next" />
      </span>
    </GralleryNextBlock>
  );
};

export default GralleryNext;
