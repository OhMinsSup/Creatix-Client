import React from 'react';
import QuillEditor from '../../components/write/books/QuillEditor';
import PublishScreen from './PublishScreen';

interface WriteBooksContainerState {
  title: string;
  publish: boolean;
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
      publish: true,
    };
  }

  onChangeTitle = (value: string) => {
    this.setState({
      title: value,
    });
  };

  onClickPublish = () => {
    this.setState({
      publish: !this.state.publish,
    });
  };

  render() {
    const { title, publish } = this.state;
    return (
      <React.Fragment>
        <QuillEditor
          title={title}
          onChangeTitle={this.onChangeTitle}
          onClickPublish={this.onClickPublish}
        />
        <PublishScreen />
      </React.Fragment>
    );
  }
}

export default WriteBooksContainer;
