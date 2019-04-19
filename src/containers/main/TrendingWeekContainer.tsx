import React from 'react';
import MainTrendingContents from '../../components/main/MainTrendingContents';
import ContentsCards from '../../components/common/ContentsCards';

const { useState } = React;

interface TrendingWeekContainerProps {}
const TrendingWeekContainer: React.SFC<TrendingWeekContainerProps> = () => {
  // TODO 타입은 추후 추가 할 예정
  type ListingType = 'ILLUST' | 'BOOKS';
  const [listing, setListing] = useState('ILLUST');
  return (
    <MainTrendingContents>
      <ContentsCards />
    </MainTrendingContents>
  );
};

export default TrendingWeekContainer;
