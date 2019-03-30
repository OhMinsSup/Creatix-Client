import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft as PrevArrowIcon } from 'react-icons/fa';

const GralleryPrevBlock = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 33%;
  height: 100%;
  cursor: pointer;
  .handle-prev {
    position: absolute;
    top: 35%;
    width: 50px;
    height: 200px;
    margin-top: -17px;
    display: block;
    transition: opacity 0.05s ease-in-out;
    color: #fff;
    left: -50px;
    opacity: 0.3;
    line-height: 200px;
    .prev {
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

interface GralleryPrevProps {
  onClick: () => void;
}

const GralleryPrev: React.SFC<GralleryPrevProps> = ({ onClick }) => {
  return (
    <GralleryPrevBlock onClick={onClick}>
      <span className="handle-prev">
        <PrevArrowIcon className="prev" />
      </span>
    </GralleryPrevBlock>
  );
};

export default GralleryPrev;
