import React from 'react';
import FeedContent from '../../components/main/Feeds/FeedContent';
import FeedIllust from '../../components/main/Feeds/FeedIllust';
import FeedBook from '../../components/main/Feeds/FeedBook';

const card = [
  {
    url:
      'https://hashnode.imgix.net/res/hashnode/image/upload/v1554986443698/4FquSejQo.png?w=800&h=420&fit=crop&crop=entropy&auto=format,enhance&q=60',
    title: 'creatix title1',
    comments: 5,
    likes: 6,
    tags: ['react', 'vue', 'serverless'],
  },
  {
    url:
      'https://hashnode.imgix.net/res/hashnode/image/upload/v1554901392470/fjzz6Pq7U.jpeg?w=800&h=420&fit=crop&crop=entropy&auto=format,enhance&q=60',
    title: 'creatix title2',
    comments: 5,
    likes: 6,
    tags: ['golang', 'veloss', 'webpack'],
  },
  {
    url:
      'https://hashnode.imgix.net/res/hashnode/image/upload/v1555611620225/3v_eEZasX.png?w=500&auto=format,enhance&q=60',
    title: 'Interfaces and Abstract Classes',
    comments: 15,
    likes: 4,
    tags: ['php', 'class', 'oop'],
  },
  {
    url:
      'https://hashnode.imgix.net/res/hashnode/image/upload/v1554901392470/fjzz6Pq7U.jpeg?w=800&h=420&fit=crop&crop=entropy&auto=format,enhance&q=60',
    title: 'creatix title2',
    comments: 5,
    likes: 6,
    tags: ['golang', 'veloss', 'webpack'],
  },
  {
    url:
      'https://hashnode.imgix.net/res/hashnode/image/upload/v1555611620225/3v_eEZasX.png?w=500&auto=format,enhance&q=60',
    title: 'Interfaces and Abstract Classes',
    comments: 15,
    likes: 4,
    tags: ['php', 'class', 'oop'],
  },
];

interface FeedContentContainerProps {}
const FeedContentContainer: React.SFC<FeedContentContainerProps> = () => {
  return (
    <React.Fragment>
      <FeedContent title="일러스트">
        {card.map((c, i) => {
          return (
            <FeedIllust
              key={i}
              title={c.title}
              comments={c.comments}
              likes={c.likes}
              url={c.url}
              tags={c.tags}
            />
          );
        })}
      </FeedContent>
      <FeedContent title="소설">
        {card.map((c, i) => {
          return <FeedBook key={i} url={c.url} title={c.title} />;
        })}
      </FeedContent>
    </React.Fragment>
  );
};

export default FeedContentContainer;
