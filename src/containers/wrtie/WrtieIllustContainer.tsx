import React, { Component } from 'react';
import WriteIllustForm from '../../components/write/illust/WriteIllustForm';

interface WrtieIllustContainerState {}
interface WrtieIllustContainerProps {}
class WrtieIllustContainer extends Component<
  WrtieIllustContainerProps,
  WrtieIllustContainerState
> {
  constructor(props: WrtieIllustContainerProps) {
    super(props);
    this.state = {};
  }

  onUploadClick = () => {
    const upload = document.createElement('input');
    upload.type = 'file';
    upload.onchange = e => {
      if (!upload.files) return;
      const file = upload.files[0];
      if (!file) return;
      console.log(file);
    };
    upload.click();
  };

  uploadImage = (file: File) => {
    if (!file) return;
    console.log(file);
  };

  onDrop = (e: DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer) {
      const { files } = e.dataTransfer;
      if (!files) return;
      this.uploadImage(files[0]);
    }
    return;
  };

  onDragLeave = (e: DragEvent) => {
    e.preventDefault();
    if (!e.relatedTarget) return;
  };

  onPasteImage = (file: File) => {
    if (!file) return;
    this.uploadImage(file);
  };

  render() {
    return (
      <WriteIllustForm
        onDrop={this.onDrop}
        onPasteImage={this.onPasteImage}
        onUploadClick={this.onUploadClick}
      />
    );
  }
}

export default WrtieIllustContainer;
