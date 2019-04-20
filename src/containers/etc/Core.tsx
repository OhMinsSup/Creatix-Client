import React from 'react';
import { throttle } from 'lodash';
import { connect } from 'react-redux';
import GalleryViewerContainer from '../base/GalleryViewerContainer';
import { StoreState } from '../../store/modules';
import { setWidth } from '../../store/modules/base';
const { useEffect } = React;

interface OwnProps {}
interface StateProps {
  grally: boolean;
}
interface DispatchProps {
  setWidth: typeof setWidth;
}
type CoreProps = StateProps & DispatchProps & OwnProps;

const Core: React.SFC<CoreProps> = ({ grally, setWidth }) => {
  const onResize = throttle(() => {
    setWidthFunc();
  }, 250);

  const setWidthFunc = () => {
    if (typeof window === 'undefined') return;
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
  });

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
  {
    setWidth,
  },
)(Core);
