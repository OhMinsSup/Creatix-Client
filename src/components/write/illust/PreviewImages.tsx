import React from 'react';
import styled from 'styled-components';
import { MdClose as CloseIcon } from 'react-icons/md';
import palette from '../../../lib/styles/palette';

const PreviewImagesBlock = styled.div`
  border-color: ${palette.cyan4};
  border-width: 1px;
  border-style: solid;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  > .wrapper {
    display: block;
    max-width: 100%;
    overflow: hidden;
    background-color: #f5f8fa;
    box-sizing: border-box;
    border-radius: 0;
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    box-shadow: inset 0 1px 0 #ccd6dd;
    transition: height 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    .container {
      display: flex;
      padding: 8px 16px;
      .image {
        margin-right: 0;
        background-color: #ccd6dd;
        border: 1px solid #e6ecf0;
        border-radius: 6px;
        cursor: pointer;
        display: inline-block;
        font-size: 12px;
        max-width: 312px;
        overflow: hidden;
        position: relative;
        width: 113px;
        .image-container {
          height: 113px;
          overflow: hidden;
          width: 113px;
          img {
            height: 113px;
            width: 214.70000000000002px;
            margin-left: -50.85000000000001px;
            margin-top: 0px;
          }
        }
        .remove {
          border-radius: 10px;
          height: 19px;
          right: 4px;
          top: 4px;
          width: 19px;
          background: #14171a;
          color: #fff;
          margin-top: 0;
          position: absolute;
          svg {
            font-size: 1rem;
            font-weight: 500;
            position: relative;
            left: 0.1rem;
            top: 0.05rem;
          }
        }
      }

      .image + .image {
        margin-left: 0.5rem;
      }
    }
  }
`;

const Images: React.SFC = () => {
  return (
    <div className="image">
      <div className="image-container">
        <img />
      </div>
      <div className="remove" onClick={() => ({})}>
        <CloseIcon />
      </div>
    </div>
  );
};

interface PreviewImagesProps {}
const PreviewImages: React.SFC<PreviewImagesProps> = () => {
  return (
    <PreviewImagesBlock>
      <div className="wrapper">
        <div className="container">
          <Images />
        </div>
      </div>
    </PreviewImagesBlock>
  );
};

export default PreviewImages;
