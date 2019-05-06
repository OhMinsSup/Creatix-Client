import React from 'react';
import QuillEditor from '../../components/write/books/QuillEditor';
import PublishScreen from './PublishScreen';
import { connect } from 'react-redux';
import { StoreState } from '../../store/modules';
import { openPublish } from '../../store/modules/write';

interface WriteBooksContainerState {
  title: string;
}
interface OwnProps {}
interface StateProps {
  visible: boolean;
}
interface DispatchProps {
  openPublish: typeof openPublish;
}
type WriteBooksContainerProps = StateProps & DispatchProps & OwnProps;

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

  onOpen = () => {
    const { openPublish } = this.props;
    openPublish();
  };

  render() {
    const { title } = this.state;
    return (
      <React.Fragment>
        <QuillEditor
          title={title}
          onChangeTitle={this.onChangeTitle}
          onClickPublish={this.onOpen}
        />
        <PublishScreen />
      </React.Fragment>
    );
  }
}

export default connect<StateProps, DispatchProps, OwnProps, StoreState>(
  ({ write }) => ({
    visible: write.publish,
  }),
  {
    openPublish,
  },
)(WriteBooksContainer);
