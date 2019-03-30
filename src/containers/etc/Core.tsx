import React from 'react';
import GalleryViewerContainer from '../base/GalleryViewerContainer';
import { connect } from 'react-redux';
import { StoreState } from 'store';

interface OwnProps {}
interface StateProps {
  grally: boolean;
}
interface DispatchProps {}
type CoreProps = StateProps & DispatchProps & OwnProps;

const Core: React.SFC<CoreProps> = ({ grally }) => {
  return (
    <React.Fragment>
      <GalleryViewerContainer grally={grally} />
    </React.Fragment>
  );
};

export default connect<StateProps, DispatchProps, OwnProps, StoreState>(
  ({ base }) => ({
    grally: base.grally.visible,
  }),
  {},
)(Core);
