import * as React from 'react';
import styled, { css } from 'styled-components';
import { MdRemoveCircle as RemoveIcon } from 'react-icons/md';
import palette from '../../lib/styles/palette';

const InputTagsBlock = styled.div<{ focus: boolean }>`
  margin-top: 8px;
  label {
    font-weight: bold;
    font-size: 1.125rem;
    color: ${palette.gray9};
    transition: all 0.125s ease-in;
    ${props =>
      props.focus &&
      css`
        color: ${palette.cyan7};
      `}
  }
  .input-button {
    display: flex;
    border-radius: 8px;
    margin-top: 1rem;
    input {
      font-size: 1rem;
      padding: 0.5rem;
      flex: 7;
      border: none;
      outline: none;
      border-bottom: 1px solid ${palette.gray7};
      ${props =>
        props.focus &&
        css`
          color: ${palette.cyan7};
          border-bottom: 1px solid ${palette.cyan7};
        `}
    }
    .button {
      flex: 2;
      background: ${palette.cyan3};
      padding-top: 0.4rem;
      text-align: center;
      color: white;
      font-weight: 600;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
      font-size: 0.9rem;
      transition: 0.05s all ease-in;
      user-select: none;
      cursor: pointer;
      &:hover {
        background: ${palette.cyan2};
      }
      &:active {
        background: ${palette.cyan4};
      }
    }
  }
  .tags {
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    margin-left: -0.25rem;
    margin-right: -0.25rem;
    max-height: 5.5rem;
    overflow-y: auto;
    position: relative;
  }
`;

const TagBlock = styled.div`
  margin: 0.25rem;
  padding: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0rem;
  font-size: 0.85rem;
  color: ${palette.gray9};
  align-items: center;
  display: flex;
  background: ${palette.gray2};
  font-weight: 500;
  word-break: break-all;
  border-radius: 6px;
  .remove {
    font-size: 0.9rem;
    color: ${palette.gray6};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    &:hover {
      cursor: pointer;
      color: ${palette.red9};
    }
  }
`;

const Tag: React.SFC<{
  name: string;
  onRemove(tag: string): void;
}> = ({ name, onRemove }) => (
  <TagBlock>
    <div className="text">{name}</div>
    <div className="remove" onClick={() => onRemove(name)}>
      <RemoveIcon />
    </div>
  </TagBlock>
);

interface State {
  input: string;
  focus: boolean;
}

interface Props {
  label?: string;
  tags: string[];
  onInsert: (tag: string) => void;
  onRemove: (tag: string) => void;
}

class InputTags extends React.Component<Props, State> {
  tags: HTMLDivElement | null = null;

  state = {
    input: '',
    focus: false,
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      input: e.target.value,
    });
  };

  onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (['Enter', ','].indexOf(e.key) !== -1) {
      this.onButtonClick();
      e.preventDefault();
    }
  };

  onButtonClick = () => {
    const { input } = this.state;
    this.props.onInsert(input.replace(',', ''));
    this.setState({
      input: '',
    });
  };

  onFocus = () => {
    this.setState({
      focus: true,
    });
  };

  onBlur = () => {
    this.setState({
      focus: false,
    });
  };

  renderTags = () => {
    const { tags, onRemove } = this.props;
    return tags.map(tag => <Tag key={tag} name={tag} onRemove={onRemove} />);
  };

  public render() {
    const { onButtonClick, onChange, onKeyUp, onBlur, onFocus } = this;
    const { input, focus } = this.state;
    return (
      <InputTagsBlock focus={focus}>
        <label>{this.props.label}</label>
        <div className="input-button">
          <input
            placeholder="태그를 입력하세요"
            value={input}
            onChange={onChange}
            onKeyUp={onKeyUp}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          <div className="button" onClick={onButtonClick}>
            등록
          </div>
        </div>
        <div
          id="tags"
          className="tags"
          ref={ref => {
            this.tags = ref;
          }}
        >
          {this.renderTags()}
        </div>
      </InputTagsBlock>
    );
  }
}

export default InputTags;
