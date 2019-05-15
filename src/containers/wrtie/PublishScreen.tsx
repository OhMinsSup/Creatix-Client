import React from 'react';
import PublishScreenTemplate from '../../components/write/publish/PublishScreenTemplate';
import PublishThumbnailContainer from './PublishThumbnailContainer';
import PublishOptionsContainer from './PublishOptionsContainer';
import { connect } from 'react-redux';
import { StoreState } from '../../store/modules';
import { closePublish } from '../../store/modules/write';

interface OwnProps {}
interface StateProps {
  visible: boolean;
}
interface DispatchProps {
  closePublish: typeof closePublish;
}
type PublishScreenProps = StateProps & DispatchProps & OwnProps;
const PublishScreen: React.SFC<PublishScreenProps> = ({
  visible,
  closePublish,
}) => {
  const onCancel = React.useCallback(() => {
    closePublish();
  }, [closePublish]);

  if (!visible) return null;
  return (
    <PublishScreenTemplate
      left={<PublishThumbnailContainer />}
      right={<PublishOptionsContainer onCancel={onCancel} />}
    />
  );
};

export default connect<StateProps, DispatchProps, OwnProps, StoreState>(
  ({ write }) => ({
    visible: write.publish,
  }),
  {
    closePublish,
  },
)(PublishScreen);
