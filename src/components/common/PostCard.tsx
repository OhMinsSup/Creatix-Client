import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  FaRegHeart as LikeIcon,
  FaRegComment as CommentIcon,
  FaShareAlt as ShareIcon,
  FaRegBookmark as SaveIcon,
} from 'react-icons/fa';
import palette from '../../lib/styles/palette';

const imagsrc =
  'https://thumb.velog.io/resize?url=https://images.velog.io/profiles/velopert/thumbnails/1536400727.98.png&width=128';

const postsrc =
  'https://hashnode.imgix.net/res/hashnode/image/upload/v1553797389980/XvnRdt2hc.png?w=800&auto=format,enhance&q=60';

const PostCardBlock = styled.div`
  display: block;
  width: 768px;
  padding: 1rem 1.8rem;
  margin-bottom: 1.5rem;
  background: #fff;
  border-radius: 8px;
  transition: background 0.3s ease-in-out;
  .wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex-grow: 1;
    .contents {
      width: 100%;
      margin-right: 0;
      .description {
        margin-top: 0.5rem;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
        text-decoration: none;
        p {
          margin-bottom: 1rem;
          color: ${palette.gray8};
        }
      }
    }
  }
`;

const PostMeta = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  .meta-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    .user-thumbnail {
      display: block;
      overflow: hidden;
      border-radius: 100%;
      margin-right: 0.5rem;
      width: 40px;
      height: 40px;
      color: #4d4d4d;
      font-weight: 600;
      background: ${palette.gray1};
      font-size: 1rem;
      .thumbnail {
        width: 100%;
        display: block;
        border-style: none;
      }
    }
    .user-info {
      display: flex;
      flex-direction: row;
      align-items: center;
      .user-info-wrapper {
        display: flex;
        flex-direction: column;
        .username {
          color: #4d4d4d;
          font-weight: bold;
          font-size: 1rem;
          margin: 0 8px 0 0;
          text-decoration: none;
        }
        .wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          .email {
            color: ${palette.gray6};
            font-size: 1rem;
            font-weight: 400;
            margin: 0 8px 0 0;
            text-decoration: none;
          }
          .date-time {
            color: ${palette.gray6};
            font-size: 1rem;
            margin: 0 8px 0 0;
            .middot {
              font-size: 1rem;
              margin: 0 8px 0 0;
              display: inline-block;
              color: #999;
            }
            .date {
              color: #999;
              font-size: 0.875rem;
              font-weight: 400;
              margin: 0 8px 0 0;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
`;

const PostImage = styled.div`
  width: 100%;
  .image-wrapper {
    display: flex;
    flex-grow: 1;
    width: 100%;
    height: 320px;
    border-radius: 6px;
    border: 1px solid ${palette.gray2};
    .image {
      border-radius: 6px;
      width: 100%;
      height: 100%;
    }
  }
`;

const PostFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  .left {
    display: flex;
    flex-direction: row;
    .active-btn {
      display: inline-block;
      min-width: 80px;
      .btn-wrapper {
        color: #8899a6;
        display: inline-block;
        font-size: 16px;
        padding: 0 2px;
        border: 0;
        margin-right: 0.85rem;
        background: transparent;
        position: relative;
        overflow: visible;
        cursor: pointer;
        svg {
          font-size: 18px;
          line-height: 18px;
          background: transparent;
          display: inline-block;
          font-style: normal;
          vertical-align: baseline;
          position: relative;
        }
        .count {
          color: #8899a6;
          display: inline-block;
          font-size: 12px;
          font-weight: bold;
          margin-left: 6px;
          position: relative;
          cursor: pointer;
          top: -4px;
        }
      }
    }
  }
`;

const PostCard: React.SFC = () => {
  return (
    <PostCardBlock>
      <div className="wrapper">
        <div className="contents">
          <PostMeta>
            <div className="meta-wrapper">
              <Link to="/" className="user-thumbnail">
                <img className="thumbnail" src={imagsrc} />
              </Link>
              <div className="user-info">
                <div className="user-info-wrapper">
                  <Link to="/" className="username">
                    veloss
                  </Link>
                  <div className="wrapper">
                    <Link className="email" to="/">
                      (@public.veloss@naver.com)
                    </Link>
                    <p className="date-time">
                      <span className="middot">·</span>
                      <Link
                        className="date"
                        to="/"
                        title="March 28, 2019 5:04 PM"
                      >
                        13 hours ago
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </PostMeta>
          <PostImage>
            <Link to="/" className="image-wrapper">
              <img src={postsrc} className="image" />
            </Link>
          </PostImage>
          <Link to="/" className="description">
            <p>
              Hi all, thanks for being a part of our healthy community of
              software developers. At Hashnode, we love reading all the feedback
              from our users, and we take them seriously. With this "Design
              Refresh" our target was to improve various sections of Hashn...
            </p>
          </Link>
        </div>
        <PostFooter>
          <div className="left">
            <div className="active-btn">
              <button className="btn-wrapper">
                <LikeIcon />
                <span className="count">
                  <span>18</span>
                </span>
              </button>
              <button className="btn-wrapper">
                <CommentIcon />
                <span className="count">
                  <span>18</span>
                </span>
              </button>
            </div>
          </div>
          <div className="right">
            <SaveIcon />
            <ShareIcon />
          </div>
        </PostFooter>
      </div>
    </PostCardBlock>
  );
};

export default PostCard;
