import React from 'react';
import styled from 'styled-components';
import IllustrationCards from '../../components/common/Illustration/IllustrationCards';

const IllustrationPageBlock = styled.div`
  display: flex;
  width: 100%;
  z-index: 904;
  flex-grow: 1;
  position: relative;
`;

interface IllustrationPageProps {}

const IllustrationPage: React.SFC<IllustrationPageProps> = () => {
  return (
    <IllustrationPageBlock>
      {/* TODO 나중에 포스트 리스팅해주는 컨테이너 생성 지금은 보여주는 식으로만 생성 */}
      <IllustrationCards />
    </IllustrationPageBlock>
  );
};

export default IllustrationPage;
