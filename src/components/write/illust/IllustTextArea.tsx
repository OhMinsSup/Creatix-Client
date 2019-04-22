import React from 'react';
import styled, { css } from 'styled-components';
import LabelInput from '../../common/LabelInput';
import LabelTextArea from '../../common/LabelTextArea';
import InputTags from '../../common/InputTags';
import palette from '../../../lib/styles/palette';

const Toggler: React.SFC<{
  value: boolean;
  onClick: () => void;
}> = ({ value, onClick }) => {
  return (
    <div className="toggler">
      <div className="toggle-box" onClick={onClick}>
        <div className="circle" />
      </div>
      {value ? (
        <div className="text">비공개</div>
      ) : (
        <div className="text">공개</div>
      )}
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

const TogglerBlock = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: row;
  label {
    font-weight: bold;
    font-size: 1.125rem;
    color: ${palette.gray9};
    transition: all 0.125s ease-in;
  }
  .toggler {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    & + .toggler {
      margin-top: 0.5rem;
    }
    .toggle-box {
      background: ${palette.gray3};
      height: 32px;
      width: 56px;
      border-radius: 16px;
      position: relative;
      margin-right: 0.5rem;
      cursor: pointer;
      transition: 0.125s ease-in background;
      .circle {
        transition: 0.125s ease-in transform;
        background: white;
        width: 24px;
        height: 24px;
        top: 4px;
        left: 4px;
        border-radius: 12px;
        position: absolute;
      }

      ${props =>
        props.visible &&
        css`
          background: ${palette.cyan4};
          .circle {
            transform: translate(24px);
          }
        `}
    }
    .text {
      font-size: 0.875rem;
      color: ${palette.gray9};
      font-weight: 600;
    }
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
      <TogglerBlock visible={visible}>
        <label>공개 범위</label>
        <Toggler value={visible} onClick={onToggleCheck} />
      </TogglerBlock>
    </IllustTextAreaBlock>
  );
};

export default IllustTextArea;
