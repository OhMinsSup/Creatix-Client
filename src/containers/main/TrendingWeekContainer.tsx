import React from 'react';
import MainTrendingContents from '../../components/main/MainTrendingContents';
import ContentsCards from '../../components/common/ContentsCards';

interface TrendingWeekContainerProps {}
const TrendingWeekContainer: React.SFC<TrendingWeekContainerProps> = () => {
  type ListingType = 'ILLUST' | 'BOOKS';
  const [listing, setListing] = React.useState<ListingType>('ILLUST');
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setListing(e.target.value as ListingType);
  };

  return (
    <MainTrendingContents listing={listing} onChange={onChange} title={listing}>
      <ContentsCards />
    </MainTrendingContents>
  );
};

export default TrendingWeekContainer;
