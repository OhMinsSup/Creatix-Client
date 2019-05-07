import React from 'react';
import styled from 'styled-components';
import useInputs from '../../../lib/hooks/useInputs';
import IllustSubmitArea from './IllustSubmitArea';
import IllustImagesArea from './IllustImagesArea';
import IllustTextArea from './IllustTextArea';
import useTags from '../../../lib/hooks/useTags';
import PreviewImages from './PreviewImages';

const WriteIllustFormBlock = styled.div`
  position: relative;
  margin-top: 12px;
  margin-bottom: 12px;
  top: 1rem;
  .form {
    display: flex;
    flex-direction: column;
    width: 880px;
    padding: 20px;
    border-radius: 16px;
    .contents {
      display: flex;
      flex-direction: row;
      padding-bottom: 40px;
    }
  }
`;

export type IllustTextFormType = {
  title: string;
  description: string;
};

const { useState } = React;

interface WriteIllustFormProps {
  onUploadClick: () => void;
  onDrop: (e: DragEvent) => void;
  onPasteImage: (file: File) => void;
}
const WriteIllustForm: React.SFC<WriteIllustFormProps> = ({
  onUploadClick,
  onDrop,
  onPasteImage,
}) => {
  const [form, onChange] = useInputs<IllustTextFormType>({
    title: '',
    description: '',
  });
  const [state, dispatch] = useTags({
    tags: [],
  });
  const [visible, setVisible] = useState(false);

  const onInsert = (tag: string) => {
    const processedTag = tag.trim();
    if (processedTag === '') return;
    if (state.tags.indexOf(tag) !== -1) return;
    dispatch({
      type: 'TAG_INSERT',
      payload: tag,
    });
  };

  const onRemove = (tag: string) => {
    dispatch({
      type: 'TAG_REMOVE',
      payload: tag,
    });
  };

  const onToggleCheck = () => {
    setVisible(visible ? false : true);
  };

  return (
    <WriteIllustFormBlock>
      <div className="form">
        <IllustSubmitArea />
        <div className="contents">
          <IllustImagesArea
            onDrop={onDrop}
            onPasteImage={onPasteImage}
            onUploadClick={onUploadClick}
          />
          <IllustTextArea
            title={form.title}
            description={form.description}
            tags={state.tags}
            visible={visible}
            onChange={onChange}
            onInsert={onInsert}
            onRemove={onRemove}
            onToggleCheck={onToggleCheck}
          />
        </div>
        {/* TODO 이미지가 존재하면 보여주고 존재하지 않으면 안보여줌 */}
        <PreviewImages />
      </div>
    </WriteIllustFormBlock>
  );
};

export default WriteIllustForm;
