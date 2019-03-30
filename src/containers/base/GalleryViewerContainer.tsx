import React, { Component } from 'react';
import GalleryViewer from '../../components/common/gallery/GalleryViewer';

type GalleryViewerContainerProps = {};

class GalleryViewerContainer extends Component<GalleryViewerContainerProps> {
  render() {
    const src = [
      'https://pbs.twimg.com/media/D24k_u7UkAAb8qp.jpg:large',
      'https://pbs.twimg.com/media/D2wNwuMU4AA5DdQ.jpg:large',
      'https://pbs.twimg.com/media/D21dZKRU4AAW9ik.jpg:large',
      'https://pbs.twimg.com/media/D2wJlcdWoAEXgGr.jpg:large',
    ];

    return <GalleryViewer images={src} />;
  }
}

export default GalleryViewerContainer;
