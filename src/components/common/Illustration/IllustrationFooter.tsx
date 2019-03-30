import React from 'react';
import styled from 'styled-components';
import {
  FaRegHeart as LikeIcon,
  FaRegComment as CommentIcon,
  FaShareAlt as ShareIcon,
  FaRegBookmark as SaveIcon,
} from 'react-icons/fa';
import IllustrationActiveButton from './IllustrationActiveButton';

const IllustrationFooterBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
`;

const LeftBlock = styled.div`
  display: flex;
  flex-direction: row;
  .active {
    display: inline-block;
    min-width: 80px;
  }
`;

const RightBlock = styled.div`
  display: flex;
  flex-direction: row;
  .active {
    display: inline-block;
    min-width: 80px;
  }
`;

interface IllustrationFooterProps {}

const IllustrationFooter: React.SFC<IllustrationFooterProps> = () => {
  return (
    <IllustrationFooterBlock>
      <LeftBlock>
        <div className="active">
          <IllustrationActiveButton icon={<LikeIcon />} count={5} type="like" />
          <IllustrationActiveButton
            icon={<CommentIcon />}
            count={5}
            type="comment"
          />
        </div>
      </LeftBlock>
      <RightBlock>
        <IllustrationActiveButton icon={<SaveIcon />} type="save" />
        <IllustrationActiveButton icon={<ShareIcon />} type="share" />
      </RightBlock>
    </IllustrationFooterBlock>
  );
};

export default IllustrationFooter;
