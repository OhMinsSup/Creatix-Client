import React from 'react';
import styled from 'styled-components';
import { GoCloudUpload as UploadIcon } from 'react-icons/go';

const IllustImagesAreaBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 340px;
  height: 510px;
  padding-left: 20px;
  padding-right: 20px;
  .upload-image {
    flex: 1 1 auto;
    min-height: 0;
    min-width: 0;
    width: 100%;
    height: 100%;
    > .wrapper {
      height: 100%;
      background-color: rgb(239, 239, 239);
      box-shadow: none;
      border-radius: 12px;
      padding: 12px;
      > .inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border: 2px dashed rgb(218, 218, 218);
        border-radius: 6px;
        .upload-icon {
          padding: 8px;
          svg {
            color: #8e8e8e;
            fill: currentColor;
            stroke-width: 0;
            vertical-align: middle;
            height: 32px;
            width: 32px;
          }
        }

        .upload-text {
          width: 100%;
          padding-left: 48px;
          padding-right: 48px;
          margin-top: 16px;
          text-align: center;
          span {
            color: #333;
            font-size: 16px;
            font-weight: 400;
            letter-spacing: -0.4px;
          }
        }
      }
    }
  }
`;

class IllustImagesArea extends React.Component {
  render() {
    return (
      <IllustImagesAreaBlock>
        <div className="upload-image">
          <div className="wrapper">
            <div className="inner">
              <div className="upload-icon">
                <UploadIcon />
              </div>
              <div className="upload-text">
                <span>드래그하거나 클릭하여 업로드</span>
              </div>
            </div>
          </div>
        </div>
      </IllustImagesAreaBlock>
    );
  }
}

export default IllustImagesArea;
