import React from 'react';
import PublishURLSetting from '../../components/write/publish/PublishURLSetting';

interface PublishURLSettingContainerProps {}
const PublishURLSettingContainer: React.SFC<
  PublishURLSettingContainerProps
> = () => {
  return (
    <PublishURLSetting
      username="velopert"
      urlSlug="sample-title"
      onChangeUrlSlug={() => {}}
    />
  );
};

export default PublishURLSettingContainer;
