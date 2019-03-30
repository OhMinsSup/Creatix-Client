import React from 'react';
import styled, { css } from 'styled-components';

const GralleryMediaBlock = styled.div<{ visible: boolean }>`
  border-radius: 0 0 4px 4px;
  padding-bottom: 51px;
  line-height: 0;
  min-height: 200px;
  overflow: hidden;
  position: relative;
  text-align: center;
  background-color: rgb(64, 64, 64);
  ${props =>
    !props.visible &&
    css`
      display: none;
    `}
  img {
    width: 100%;
    height: 894px;
    margin-top: 0px;
    margin-bottom: 0px;
    border: 0;
    line-height: 0;
    text-align: center;
  }
`;

interface GralleryMediaProps {
  image: string;
  visible: boolean;
}

const src = 'https://pbs.twimg.com/media/D24k_u7UkAAb8qp.jpg:large';

const GralleryMedia: React.SFC<GralleryMediaProps> = ({ visible, image }) => {
  return (
    <GralleryMediaBlock visible={visible}>
      <img src={image} />
    </GralleryMediaBlock>
  );
};

export default GralleryMedia;
