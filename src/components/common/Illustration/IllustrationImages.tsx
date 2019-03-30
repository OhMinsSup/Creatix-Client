import React from 'react';
import styled from 'styled-components';

import palette from '../../../lib/styles/palette';

const src =
  'https://hashnode.imgix.net/res/hashnode/image/upload/v1553797389980/XvnRdt2hc.png?w=800&auto=format,enhance&q=60';

const IllustrationImagesBlock = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: 320px;
  border-radius: 6px;
  border: 1px solid ${palette.gray2};
  cursor: pointer;
  img {
    border-radius: 6px;
    width: 100%;
    height: 100%;
  }
`;

interface IllustrationImagesProps {
  onOpen: () => void;
}

const IllustrationImages: React.SFC<IllustrationImagesProps> = ({ onOpen }) => {
  return (
    <IllustrationImagesBlock onClick={onOpen}>
      <img src={src} />
    </IllustrationImagesBlock>
  );
};

export default IllustrationImages;
