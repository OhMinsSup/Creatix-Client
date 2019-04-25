import React from 'react';
import QuillEditor from '../../components/write/books/QuillEditor';
import WriteBooksSubmitModal from './WriteBooksSubmitModal';

interface WriteBooksContainerState {
  title: string;
  submitModal: boolean;
}
interface WriteBooksContainerProps {}
class WriteBooksContainer extends React.Component<
  WriteBooksContainerProps,
  WriteBooksContainerState
> {
  constructor(props: WriteBooksContainerProps) {
    super(props);
    this.state = {
      title: '',
      submitModal: true,
    };
  }

  onChangeTitle = (value: string) => {
    this.setState({
      title: value,
    });
  };

  onClickSubmitModal = () => {
    this.setState({
      submitModal: true,
    });
  };

  render() {
    const { title, submitModal } = this.state;
    return (
      <React.Fragment>
        <QuillEditor
          title={title}
          onChangeTitle={this.onChangeTitle}
          onClickSubmitModal={this.onClickSubmitModal}
        />
        <WriteBooksSubmitModal visible={submitModal} />
      </React.Fragment>
    );
  }
}

export default WriteBooksContainer;
