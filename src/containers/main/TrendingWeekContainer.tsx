import React from 'react';

const { useState } = React;

interface TrendingWeekContainerProps {}
const TrendingWeekContainer: React.SFC<TrendingWeekContainerProps> = () => {
  // TODO 타입은 추후 추가 할 예정
  type ListingType = 'ILLUST' | 'BOOKS';
  const [listing, setListing] = useState('ILLUST');
  return <div>sss</div>;
};

export default TrendingWeekContainer;
