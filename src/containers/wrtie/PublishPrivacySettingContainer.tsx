import React from 'react';
import PublishPrivacySetting, {
  PrivacySetting,
} from '../../components/write/publish/PublishPrivacySetting';

interface PublishPrivacySettingContainerProps {}
const PublishPrivacySettingContainer: React.SFC<
  PublishPrivacySettingContainerProps
> = () => {
  return (
    <PublishPrivacySetting
      selected={PrivacySetting.PUBLIC}
      onSelect={() => ({})}
    />
  );
};

export default PublishPrivacySettingContainer;
