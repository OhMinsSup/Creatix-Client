import React, { Component } from 'react';
import WriteIllustForm from '../../components/write/illust/WriteIllustForm';
import WriteIllustMutation from '../../lib/graphql/mutations/illust/writeIllust/writeIllust.mutation';
import { WRITE_ILLUST } from '../../lib/graphql/mutations/illust/writeIllust/writeIllust.querie';
import { MutationFn } from 'react-apollo';
import {
  writeIllust,
  WriteIllustVariables,
} from '../../lib/graphql/mutations/illust/writeIllust/writeIllust.typing';
import { toast } from 'react-toastify';
import { fileUpload } from '../../lib/api/file';
import { connect } from 'react-redux';
import { StoreState } from '../../store/modules';

interface OwnProps {}
interface DispatchProps {}
interface StateProps {
  userId: string | null;
}
type WrtieIllustContainerProps = OwnProps & StateProps & DispatchProps;
type WrtieIllustContainerState = {
  urls: string[];
};
class WrtieIllustContainer extends Component<
  WrtieIllustContainerProps,
  WrtieIllustContainerState
> {
  constructor(props: WrtieIllustContainerProps) {
    super(props);
    this.state = {
      urls: [],
    };
  }

  private writeIllustFn: MutationFn<
    writeIllust,
    WriteIllustVariables
  > | null = null;

  onUploadClick = () => {
    const upload = document.createElement('input');
    upload.type = 'file';
    upload.onchange = e => {
      if (!upload.files) return;
      const file = upload.files[0];
      if (!file) return;
      this.uploadImage(file);
    };
    upload.click();
  };

  uploadImage = async (file: File) => {
    if (!file) return;

    const userId = this.props.userId;
    if (!userId) return;
    try {
      const {
        data: { url },
      } = await fileUpload(file, userId);

      this.setState({
        urls: this.state.urls.concat([url]),
      });
    } catch (e) {
      throw new Error(e);
    }
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

  onSubmit = async (
    title: string,
    is_private: boolean = false,
    thumbnail: string[],
    description?: string,
    tags?: string[],
    url_slug?: string,
  ) => {
    if (this.writeIllustFn) {
      this.writeIllustFn({
        variables: {
          title,
          thumbnail,
          is_private,
          url_slug,
          description,
          tags,
        },
      });
    }
  };

  render() {
    const { urls } = this.state;
    return (
      <WriteIllustMutation
        mutation={WRITE_ILLUST}
        onCompleted={data => {
          const { WriteIllust } = data;
          if (WriteIllust.ok && !!WriteIllust.illust) {
            const {
              illust: {
                user: { username },
                url_slug,
              },
            } = WriteIllust;
            const nextUrl = `/@${username}/illust/${url_slug}`;
            toast.success(nextUrl);
          } else if (!WriteIllust.ok && WriteIllust.error) {
            toast.error(WriteIllust.error);
          }
        }}
      >
        {writeIllust => {
          this.writeIllustFn = writeIllust;
          return (
            <WriteIllustForm
              urls={urls}
              onDrop={this.onDrop}
              onPasteImage={this.onPasteImage}
              onUploadClick={this.onUploadClick}
            />
          );
        }}
      </WriteIllustMutation>
    );
  }
}

export default connect<StateProps, DispatchProps, OwnProps, StoreState>(
  ({ auth }) => ({
    userId: auth.user && auth.user.id,
  }),
  {},
)(WrtieIllustContainer);
