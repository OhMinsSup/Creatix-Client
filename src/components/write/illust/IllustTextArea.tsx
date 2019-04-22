import React from 'react';
import styled from 'styled-components';
import LabelInput from '../../common/LabelInput';
import LabelTextArea from '../../common/LabelTextArea';
import InputTags from '../../common/InputTags';
import palette from '../../../lib/styles/palette';

const CheckBoxArea: React.SFC<{
  value: boolean;
  onChange: () => void;
}> = ({ value, onChange }) => {
  return (
    <div className="wrapper">
      {value ? <span>비공개</span> : <span>공개</span>}
      <input type="checkbox" defaultChecked={value} onChange={onChange} />
    </div>
  );
};

const IllustTextAreaBlock = styled.div`
  min-height: 510px;
  width: 540px;
  min-width: 0;
  padding-left: 20px;
  padding-right: 20px;
  .text-area {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

const CheckBoxBlock = styled.div`
  display: flex;
  flex-direction: row;
  label {
    font-weight: bold;
    font-size: 1.125rem;
    color: ${palette.gray9};
    margin-bottom: 1rem;
    transition: all 0.125s ease-in;
  }
  > .wrapper {
    margin-left: 1.1rem;
    span {
      font-weight: bold;
      font-size: 0.85rem;
      color: ${palette.gray9};
    }
  }

  .wrapper + .wrapper {
    margin-left: 1rem;
  }
`;

interface IllustTextAreaProps {
  title: string;
  description: string;
  tags: string[];
  visible: boolean;
  onToggleCheck: () => void;
  onInsert: (tag: string) => void;
  onRemove: (tag: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const IllustTextArea: React.SFC<IllustTextAreaProps> = ({
  title,
  tags,
  visible,
  description,
  onChange,
  onInsert,
  onRemove,
  onToggleCheck,
}) => {
  return (
    <IllustTextAreaBlock>
      <div className="text-area">
        <LabelInput
          name="title"
          onChange={onChange}
          placeholder="제목을 입력해주세요"
          value={title}
          label="제목"
        />
        <LabelTextArea
          name="description"
          onChange={onChange}
          placeholder="사람들에게 일러스트를 설명해주세요"
          value={description}
          label="설명"
        />
        <InputTags
          label="태그"
          tags={tags}
          onInsert={onInsert}
          onRemove={onRemove}
        />
      </div>
      <CheckBoxBlock>
        <label>공개 범위</label>
        <CheckBoxArea value={visible} onChange={onToggleCheck} />
      </CheckBoxBlock>
    </IllustTextAreaBlock>
  );
};

export default IllustTextArea;
