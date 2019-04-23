import React from 'react';
import QuillEditor from '../../components/write/books/QuillEditor';

interface WriteBooksContainerState {
  title: string;
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
    };
  }

  onChangeTitle = (value: string) => {
    this.setState({
      title: value,
    });
  };

  render() {
    const { title } = this.state;
    return <QuillEditor title={title} onChangeTitle={this.onChangeTitle} />;
  }
}

export default WriteBooksContainer;
