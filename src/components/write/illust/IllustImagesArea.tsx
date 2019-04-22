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
        .text {
          position: absolute;
          overflow: hidden;
          margin: 32px;
          left: 0;
          right: 0;
          bottom: 0;
          padding-left: 10px;
          padding-right: 10px;
          padding-top: 5px;
          padding-bottom: 5px;
          span {
            text-align: center;
            font-weight: 400;
            letter-spacing: -0.4px;
            font-size: 14px;
            color: #8e8e8e;
          }
        }
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
              <div className="text">
                <span>권장사항:10MB 이하의 고화질 파일을 사용하세요</span>
              </div>
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
