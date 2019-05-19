import React from 'react';
import IllustHeader from '../../components/view/illust/IllustHeader';
import IllustContent from '../../components/view/illust/IllustContent';
import IllustLeftSticker from '../../components/view/illust/IllustLeftSticker';

interface IllustViewerState {}
interface IllustViewerProps {}
class IllustViewer extends React.Component<
  IllustViewerProps,
  IllustViewerState
> {
  render() {
    return (
      <React.Fragment>
        <IllustLeftSticker liked={true} />
        <IllustHeader />
        <IllustContent />
      </React.Fragment>
    );
  }
}

export default IllustViewer;
