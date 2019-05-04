import React from 'react';
import PublishScreenTemplate from '../../components/write/publish/PublishScreenTemplate';
import PublishThumbnailContainer from './PublishThumbnailContainer';

type PublishScreenProps = {};
const PublishScreen: React.SFC<PublishScreenProps> = () => {
  return (
    <PublishScreenTemplate
      left={<PublishThumbnailContainer />}
      right={<div>오른쪽</div>}
    />
  );
};

export default PublishScreen;
