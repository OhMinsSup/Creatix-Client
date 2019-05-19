import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../../lib/styles/palette';
import IllustActionFooter from './IllustActionFooter';

const IllustContentBlock = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  .contents {
    display: inline-block;
    line-height: 18px;
    align-items: stretch;
    flex-direction: column;
    flex-shrink: 0;
    margin: 0;
    padding: 0;
    .illust-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: 0;
      padding-right: 0;
      .wrapper {
        display: flex;
        width: 768px;
        height: 500px;
        background-color: #efefef;
        margin-bottom: 1.5rem;
        border-radius: 4px;
        border: 1px solid ${palette.gray4};
        .illust {
          width: 100%;
          height: 100%;
          object-fit: cover;
          user-select: none;
          border-radius: 4px;
        }
      }
    }
  }
`;

const ContnetsBlock = styled.div`
  text-align: start;
  font-size: 1.125rem;
  word-break: break-word;
  word-wrap: break-word;
  font-family: 'Noto Serif KR', sans-serif;
  color: ${palette.gray8};
`;

const TagBlock = styled.div`
  margin: -0.375rem;
  margin-top: 2rem;
  a {
    margin: 0.375rem;
    display: inline-flex;
    background: ${palette.gray0};
    border: 1px solid ${palette.gray3};
    color: ${palette.gray8};
    padding: 0.5rem;
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 0.75rem;
    border-radius: 4px;
    &:hover {
      cursor: pointer;
      background: ${palette.gray1};
    }
  }
`;

const images = [
  'http://webimage.10x10.co.kr/play2016/2017/20/20171018192333_0h334.jpg',
];

interface IllustContentProps {}
const IllustContent: React.SFC<IllustContentProps> = ({}) => {
  return (
    <IllustContentBlock>
      <div className="contents">
        <ul className="illust-wrapper">
          {images.map((i, index) => (
            <li className="wrapper" key={index}>
              <img className="illust" src={i} />
            </li>
          ))}
        </ul>
      </div>
      <ContnetsBlock>
        내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
        내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
        내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
        내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
        내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
        내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
        내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
        내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
        내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
      </ContnetsBlock>
      <TagBlock>
        {['illust', 'books', 'microserveris', 'docker'].map((t, i) => (
          <Link to={`/tags/${t}`} key={i}>
            {t}
          </Link>
        ))}
      </TagBlock>
      <IllustActionFooter />
    </IllustContentBlock>
  );
};

export default IllustContent;
