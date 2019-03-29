import React from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';

const PostCardsBlock = styled.div`
  margin: 0 auto;
`;

interface PostCardsProps {}

const PostCards: React.SFC<PostCardsProps> = () => {
  return (
    <PostCardsBlock>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </PostCardsBlock>
  );
};

export default PostCards;
