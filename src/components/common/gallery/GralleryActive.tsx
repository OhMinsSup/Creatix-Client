import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const GralleryActiveBlock = styled.div`
  display: block;
  border-radius: 0 0 6px 6px;
  border: 0;
  bottom: 0;
  color: #fff;
  left: 0;
  margin: 0;
  position: absolute;
  width: 100%;
  z-index: 2;
  > .wrapper {
    background-color: rgba(20, 29, 38, 0);
    transition: background-color 0.25s ease-in;
    border-bottom: 0;
    border-radius: 0 0 6px 6px;
    box-sizing: border-box;
    cursor: auto;
    margin: 0;
    padding: 0;
    text-align: left;
    width: 100%;
    color: white;
    position: relative;
    min-height: 51px;
  }
`;

const LocationsBlock = styled.div`
  display: flex;
  justify-content: center;
  border-top: 0;
  margin-bottom: 1rem;
  cursor: auto;
  text-align: center;
  .location {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    margin-right: 4px;
  }
`;

const WriterInfoBlock = styled.div`
  position: relative;
  > .wrapper {
    display: flex;
    flex-direction: row;
    padding-bottom: 1.5rem;
    .username {
      font-size: 0.875rem;
      font-weight: 600;
      color: white;
      margin-left: 0.5rem;
      text-decoration: none;
    }
    .subinfo {
      margin-left: 0.5rem;
      font-size: 0.875rem;
      color: #8aa6c1;
      span + span::before {
        color: $oc-gray-5;
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        content: '\00B7';
      }
    }
  }
`;

interface GralleryActiveProps {
  location: number;
  images: string[];
}
const GralleryActive: React.SFC<GralleryActiveProps> = ({
  images,
  location,
}) => {
  return (
    <GralleryActiveBlock>
      <div className="wrapper">
        <LocationsBlock>
          {images.map((image, index) => {
            return location === index ? (
              <div
                key={index}
                className="location"
                style={{ backgroundColor: '#3897f0' }}
              />
            ) : (
              <div
                key={index}
                className="location"
                style={{ backgroundColor: '#dbdbdb' }}
              />
            );
          })}
        </LocationsBlock>
        <WriterInfoBlock>
          <div className="wrapper">
            <Link to="/" className="username">
              veloss
            </Link>
            <div className="subinfo">
              <span>(@public.veloss@naver.com)</span>
              <span>3월 25</span>
              <span>간단한 내용 설명</span>
            </div>
          </div>
        </WriterInfoBlock>
      </div>
    </GralleryActiveBlock>
  );
};

export default GralleryActive;
