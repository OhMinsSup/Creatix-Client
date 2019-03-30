import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';

const IllustrationActiveButtonBlock = styled.button<{
  type: 'comment' | 'like' | 'share' | 'save';
}>`
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
  ${props =>
    props.type === 'comment' &&
    css`
      &:hover {
        color: ${palette.green4};
        .count {
          color: ${palette.green4};
        }
      }
    `}
  ${props =>
    props.type === 'like' &&
    css`
      &:hover {
        color: ${palette.red4};
        .count {
          color: ${palette.red4};
        }
      }
    `}
  ${props =>
    props.type === 'save' &&
    css`
      &:hover {
        color: ${palette.blue4};
        .count {
          color: ${palette.blue4};
        }
      }
    `}
  ${props =>
    props.type === 'share' &&
    css`
      &:hover {
        color: ${palette.cyan7};
        .count {
          color: ${palette.cyan7};
        }
      }
    `}
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
`;

interface IllustrationActiveButtonProps {
  icon: React.ReactNode;
  type: 'comment' | 'like' | 'share' | 'save';
  count?: number;
}

const IllustrationActiveButton: React.SFC<IllustrationActiveButtonProps> = ({
  icon,
  count,
  type,
}) => {
  return (
    <IllustrationActiveButtonBlock type={type}>
      {icon}
      {count ? (
        <span className="count">
          <span>18</span>
        </span>
      ) : null}
    </IllustrationActiveButtonBlock>
  );
};

export default IllustrationActiveButton;
