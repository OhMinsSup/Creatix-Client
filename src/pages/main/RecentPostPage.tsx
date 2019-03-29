import React from 'react';
import styled from 'styled-components';
import PostCards from '../../components/common/PostCards';

const RecentPostsPageBlock = styled.div`
  display: flex;
  width: 100%;
  z-index: 904;
  flex-grow: 1;
  position: relative;
`;

interface RecentPostPageProps {}

const RecentPostPage: React.SFC<RecentPostPageProps> = () => {
  return (
    <RecentPostsPageBlock>
      {/* TODO 나중에 포스트 리스팅해주는 컨테이너 생성 지금은 보여주는 식으로만 생성 */}
      <PostCards />
    </RecentPostsPageBlock>
  );
};

export default RecentPostPage;
