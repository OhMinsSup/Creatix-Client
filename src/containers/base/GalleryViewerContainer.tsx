import React from 'react';
import GalleryViewer from '../../components/common/gallery/GalleryViewer';
import { closeGrally } from '../../store/modules/base';
import { connect } from 'react-redux';
import { StoreState } from '../../store/modules';

interface OwnProps {
  grally: boolean;
}
interface StateProps {}
interface DispatchProps {
  closeGrally: typeof closeGrally;
}
type GalleryViewerContainerProps = StateProps & DispatchProps & OwnProps;

const GalleryViewerContainer: React.SFC<GalleryViewerContainerProps> = ({
  grally,
  closeGrally,
}) => {
  const onClose = () => {
    closeGrally();
  };
  const src = [
    'https://pbs.twimg.com/media/D24k_u7UkAAb8qp.jpg:large',
    'https://pbs.twimg.com/media/D2wNwuMU4AA5DdQ.jpg:large',
    'https://pbs.twimg.com/media/D21dZKRU4AAW9ik.jpg:large',
    'https://pbs.twimg.com/media/D2wJlcdWoAEXgGr.jpg:large',
  ];
  if (!grally) return null;
  return <GalleryViewer images={src} onClose={onClose} />;
};

export default connect<StateProps, DispatchProps, OwnProps, StoreState>(
  () => ({}),
  {
    closeGrally,
  },
)(GalleryViewerContainer);
