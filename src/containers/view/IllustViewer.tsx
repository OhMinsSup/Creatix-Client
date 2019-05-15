import React from 'react';
import IllustHeader from '../../components/view/illust/IllustHeader';
import IllustContent from '../../components/view/illust/IllustContent';

interface IllustViewerProps {}
class IllustViewer extends React.Component<IllustViewerProps> {
  render() {
    return (
      <React.Fragment>
        <IllustHeader />
        <IllustContent />
      </React.Fragment>
    );
  }
}

export default IllustViewer;
