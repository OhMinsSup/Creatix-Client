import React from 'react';
import ContentsCard from './ContentsCard';

interface ContentsCardsProps {}
const ContentsCards: React.SFC<ContentsCardsProps> = () => {
  const url =
    'https://hashnode.imgix.net/res/hashnode/image/upload/v1554986443698/4FquSejQo.png?w=800&h=420&fit=crop&crop=entropy&auto=format,enhance&q=60';
  return (
    <React.Fragment>
      <ContentsCard url={url} />
      <ContentsCard url={url} />
      <ContentsCard url={url} />
      <ContentsCard url={url} />
      <ContentsCard url={url} />
    </React.Fragment>
  );
};

export default ContentsCards;
