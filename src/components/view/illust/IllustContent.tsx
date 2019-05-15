import React from 'react';
import styled from 'styled-components';
import IllustPrev from './IllustPrev';
import IllustNext from './IllustNext';

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
      flex-direction: row;
      align-items: center;
      padding-left: 0;
      padding-right: 0;
      > li {
        opacity: 1;
        width: 768px;
        height: 500px;
        flex: 0 0 auto;
        overflow: hidden;
        transition-duration: 0.05s, 0.3s;
        transition-property: opacity, width;
        transition-timing-function: linear, ease;
        > .wrapper {
          display: flex;
          width: 100%;
          height: 100%;
          background-color: #efefef;
          flex-shrink: 0;
          margin: 0;
          padding: 0;
          align-items: stretch;
          position: relative;
          .illust {
            width: 100%;
            height: 100%;
            object-fit: cover;
            user-select: none;
            left: 0;
            position: absolute;
            top: 0;
          }
        }
      }
    }
  }
`;

const images = [
  'https://images.velog.io/post-images/godori/967f0f60-698f-11e9-96b4-3faf0bb6ff50/dockercheatsheet2.png',
  'http://webimage.10x10.co.kr/play2016/2017/20/20171018192333_0h334.jpg',
  'https://www.suyongso.com/files/attach/images/115/733/477/014/65af5577e610da07f455482d8b84cc7e.jpg',
  'https://g-grafolio.pstatic.net/20181005_159/1538728672670gzm07_JPEG/%B1%D7%B8%B2%C3%B3%B7%B3_%28LEE_coco%C0%C7_%C3%E6%B5%B9%B5%C8_%BB%E7%BA%BB%29.jpg?type=w896_4',
];

interface IllustContentProps {}
const IllustContent: React.SFC<IllustContentProps> = () => {
  const [location, setLocation] = React.useState(0);

  const onNext = React.useCallback(() => {
    if (location === images.length - 1) {
      return setLocation(0);
    }
    let result = location + 1;
    return setLocation(result);
  }, [location, images]);

  const onPrev = React.useCallback(() => {
    let result: number = 0;
    if (location <= 0) {
      result = images.length - 1;
      return setLocation(result);
    }
    result = location - 1;
    return setLocation(result);
  }, [location, images]);

  return (
    <IllustContentBlock>
      <div className="contents">
        <ul className="illust-wrapper">
          {images.map((i, index) =>
            location === index ? (
              <li key={index}>
                <div className="wrapper">
                  <img className="illust" src={i} />
                </div>
              </li>
            ) : null,
          )}
        </ul>
        <IllustPrev />
        <IllustNext />
      </div>
    </IllustContentBlock>
  );
};

export default IllustContent;
