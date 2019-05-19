import React from 'react';
import styled, { css } from 'styled-components';
import {
  FaFacebookF as FacebookIcon,
  FaTwitter as TwitterIcon,
  FaHeart as HeartIcon,
  FaRegHeart as HeartOutLineIcon,
  FaRegBookmark as BookmarkIcon,
} from 'react-icons/fa';
import { getScrollTop, getCurrentScrollPercentage } from '../../../lib/utils';
import transitions from '../../../lib/styles/transitions';
import palette from '../../../lib/styles/palette';

type StyledProps = {
  fixed: boolean;
  nofixed: boolean;
  liked: boolean;
  justLiked: boolean;
};

const IllustLeftStickerBlock = styled.div<StyledProps>`
  position: absolute;
  width: 4rem;
  left: -7rem;
  top: 11rem;
  padding-top: 1rem;

  > .wrapper {
    border-radius: 2rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${props =>
      props.fixed && !props.nofixed
        ? css`
            position: fixed;
            top: 6rem;
          `
        : null}
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
      &.sqare {
        color: ${palette.blue5};
        border: 1px solid ${palette.blue5};
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
        &:hover {
          color: white;
          background: ${palette.blue5};
        }
      }
      &.share {
        color: ${palette.gray6};
        border: none;
        &:hover {
          color: ${palette.gray7};
          border: 1px solid ${palette.gray7};
        }
      }
      &.like {
        color: ${palette.cyan4};
        border: 1px solid ${palette.cyan4};
        ${props =>
          props.justLiked
            ? css`
                animation: ${transitions.justLiked} 0.25s ease-in;
                animation-fill-mode: forwards;
              `
            : null}
        ${props =>
          props.liked
            ? css`
                color: white;
                background: ${palette.cyan4};
                &:hover {
                  background: ${palette.cyan3};
                }
              `
            : null}
        &:hover {
          color: white;
          background: ${palette.cyan4};
        }
      }
    }

    .circle + .circle {
      margin-top: 0.5rem;
    }

    .likes-count {
      color: ${palette.cyan5};
      font-weight: 600;
      font-size: 0.75rem;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }
  }
`;

interface IllustLeftStickerProps {
  liked: boolean;
}
interface IllustLeftStickerState {
  fixed: boolean;
  openShare: boolean;
  justLiked: boolean;
  nofixed: boolean;
}
class IllustLeftSticker extends React.Component<
  IllustLeftStickerProps,
  IllustLeftStickerState
> {
  pos = 0;
  element = React.createRef<HTMLDivElement>();

  state = {
    fixed: false,
    openShare: false,
    justLiked: false,
    nofixed: false,
  };

  componentDidMount() {
    if (!this.element.current) return;
    this.pos =
      this.element.current.getBoundingClientRect().top + getScrollTop();
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const scroll = getCurrentScrollPercentage();
    const scrollTop = getScrollTop();
    const fixed = scrollTop >= this.pos;
    const nofixed = scroll >= 100;

    if (this.state.nofixed !== nofixed) {
      this.setState({ nofixed });
    }

    if (this.state.fixed !== fixed) {
      this.setState({ fixed });
    }
  };

  onFacebookShare = () => {};

  onTwitterShare = () => {};

  componentDidUpdate(
    prevProps: IllustLeftStickerProps,
    prevState: IllustLeftStickerState,
  ) {
    if (!prevProps.liked && this.props.liked) {
      this.setState({
        justLiked: true,
      });
    }
  }
  public componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    const { liked } = this.props;
    const { element } = this;
    const { fixed, justLiked, nofixed } = this.state;

    return (
      <IllustLeftStickerBlock
        ref={element}
        fixed={fixed}
        nofixed={nofixed}
        liked={liked}
        justLiked={liked && justLiked}
      >
        <div className="wrapper">
          <button className="circle like">
            {liked ? <HeartIcon /> : <HeartOutLineIcon />}
          </button>
          <div className="likes-count">10</div>
          <React.Fragment>
            <button className="circle sqare">구독</button>
            <button className="circle share" onClick={this.onFacebookShare}>
              <FacebookIcon />
            </button>
            <button className="circle share" onClick={this.onTwitterShare}>
              <TwitterIcon />
            </button>
            <button className="circle share">
              <BookmarkIcon />
            </button>
          </React.Fragment>
        </div>
      </IllustLeftStickerBlock>
    );
  }
}

export default IllustLeftSticker;
