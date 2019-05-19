import React from 'react';
import styled from 'styled-components';
import {
  FaFacebookF as FacebookIcon,
  FaTwitter as TwitterIcon,
  FaHeart as HeartIcon,
  FaRegHeart as HeartOutLineIcon,
  FaRegBookmark as BookmarkIcon,
} from 'react-icons/fa';
import palette from '../../../lib/styles/palette';
const IllustActionFooterBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  background: #fff;

  .circle {
    width: 3rem;
    height: 3rem;
    background: white;
    border-radius: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
  }

  .like-wrapper {
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    .circle {
      &.like {
        color: ${palette.cyan4};
        border: 1px solid ${palette.cyan4};
        &:hover {
          color: white;
          background: ${palette.cyan4};
        }
      }
    }
  }

  .common-wrapper {
    display: flex;
    align-items: center;
    flex: 0 0 auto;

    .circle {
      &.share {
        color: ${palette.gray6};
        border: none;
        &:hover {
          color: ${palette.gray7};
          border: 1px solid ${palette.gray7};
        }
      }
    }

    .circle + .circle {
      margin-left: 0.5rem;
    }
  }

  .count {
    color: ${palette.cyan5};
    font-weight: 600;
    font-size: 1rem;
    margin-right: 0.75rem;
    margin-left: 0.75rem;
  }
`;

interface IllustActionFooterProps {}
const IllustActionFooter: React.SFC<IllustActionFooterProps> = () => {
  const liked = false;
  return (
    <IllustActionFooterBlock>
      <div className="like-wrapper">
        <button className="circle like">
          {liked ? <HeartIcon /> : <HeartOutLineIcon />}
        </button>
        <span className="count">10</span>
      </div>
      <div className="common-wrapper">
        <button className="circle share">
          <BookmarkIcon />
        </button>
        <button className="circle share">
          <FacebookIcon />
        </button>
        <button className="circle share">
          <TwitterIcon />
        </button>
      </div>
    </IllustActionFooterBlock>
  );
};

export default IllustActionFooter;
