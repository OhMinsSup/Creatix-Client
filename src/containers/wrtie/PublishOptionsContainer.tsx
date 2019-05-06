import React from 'react';
import PublishPrivacySetting, {
  PrivacySetting,
} from '../../components/write/publish/PublishPrivacySetting';
import PublishPrivacySettingContainer from './PublishPrivacySettingContainer';
import PublishURLSettingContainer from './PublishURLSettingContainer';
import PublishSeriesSectionContainer from './PublishSeriesSectionContainer';
import PublishActionButtons from '../../components/write/publish/PublishActionButtons';

interface PublishOptionsContainerProps {
  onCancel: () => void;
}
const PublishOptionsContainer: React.SFC<PublishOptionsContainerProps> = ({
  onCancel,
}) => {
  return (
    <React.Fragment>
      <div>
        <PublishPrivacySettingContainer />
        <PublishURLSettingContainer />
        <PublishSeriesSectionContainer />
      </div>
      <PublishActionButtons onCancel={onCancel} onPublish={() => {}} />
    </React.Fragment>
  );
};

export default PublishOptionsContainer;
