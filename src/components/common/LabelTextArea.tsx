import React from 'react';
import Textarea from 'react-textarea-autosize';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const LabelTextAreaBlock = styled.div<{ focus: boolean }>`
  label,
  textarea {
    display: block;
    line-height: 1.5;
  }
  label {
    font-weight: bold;
    font-size: 1.125rem;
    color: ${palette.gray9};
    margin-bottom: 1rem;
    transition: all 0.125s ease-in;
    ${props =>
      props.focus &&
      css`
        color: ${palette.cyan7};
      `}
  }
  textarea {
    font-size: 1.5rem;
    border: none;
    outline: none;
    width: 100%;
    color: ${palette.gray7};
    transition: all 0.125s ease-in;
    resize: none;
    overflow-y: hidden;
    ${props =>
      props.focus &&
      css`
        color: ${palette.cyan7};
      `}
    &::placeholder {
      color: ${palette.gray5};
    }
  }
  .group {
    display: inline-block;
    max-width: 100%;
  }
  .text-wrapper {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${palette.gray7};
    display: flex;
    align-items: center;
    ${props =>
      props.focus &&
      css`
        border-color: ${palette.cyan7};
      `}
    textarea {
      width: 1;
    }
    svg {
      font-size: 1.5rem;
      color: ${palette.gray6};
    }
  }
  .width-maker {
    max-width: 100%;
    display: inline-block;
    visibility: hidden;
    font-size: 1.5rem;
    overflow: hidden;
    line-height: 0;
  }
`;

type TextAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export interface LabelTextAreaProps extends TextAreaProps {
  label: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler;
}

const LabelTextArea: React.SFC<LabelTextAreaProps> = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  ...rest
}) => {
  const [focus, setFocus] = React.useState(false);
  const onFocus = React.useCallback(() => {
    setFocus(true);
  }, []);
  const onBlur = React.useCallback(() => {
    setFocus(false);
  }, []);

  return (
    <LabelTextAreaBlock focus={focus}>
      <label>{label}</label>
      <div className="group">
        <div className="text-wrapper">
          <Textarea
            minRows={1}
            maxRows={6}
            name={name}
            onChange={onChange}
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
          />
        </div>

        <div className="width-maker">{value || `${placeholder}`}</div>
      </div>
    </LabelTextAreaBlock>
  );
};

export default LabelTextArea;
