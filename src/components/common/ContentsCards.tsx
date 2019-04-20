import React from 'react';
import ContentsCard from './ContentsCard';

interface ContentsCardsProps {}
const ContentsCards: React.SFC<ContentsCardsProps> = () => {
  const card = [
    {
      url:
        'https://hashnode.imgix.net/res/hashnode/image/upload/v1554986443698/4FquSejQo.png?w=800&h=420&fit=crop&crop=entropy&auto=format,enhance&q=60',
      title: 'creatix title1',
    },
    {
      url:
        'https://hashnode.imgix.net/res/hashnode/image/upload/v1554901392470/fjzz6Pq7U.jpeg?w=800&h=420&fit=crop&crop=entropy&auto=format,enhance&q=60',
      title: 'creatix title2',
    },
    {
      url:
        'https://hashnode.imgix.net/res/hashnode/image/upload/v1555611620225/3v_eEZasX.png?w=500&auto=format,enhance&q=60',
      title: 'Interfaces and Abstract Classes',
    },
    {
      url:
        'https://hashnode.imgix.net/res/hashnode/image/upload/v1554901392470/fjzz6Pq7U.jpeg?w=800&h=420&fit=crop&crop=entropy&auto=format,enhance&q=60',
      title: 'creatix title2',
    },
    {
      url:
        'https://hashnode.imgix.net/res/hashnode/image/upload/v1555611620225/3v_eEZasX.png?w=500&auto=format,enhance&q=60',
      title: 'Interfaces and Abstract Classes',
    },
  ];
  return (
    <React.Fragment>
      {card.map((c, i) => {
        return <ContentsCard key={i} url={c.url} title={c.title} />;
      })}
    </React.Fragment>
  );
};

export default ContentsCards;
