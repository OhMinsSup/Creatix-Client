import React from 'react';
import styled, { css } from 'styled-components';
import { MdPhoto as ThumbnailIcon } from 'react-icons/md';
import PublishSection from './PublishSection';
import palette from '../../../lib/styles/palette';
import InputTags from '../../common/InputTags';

const PublishThumbnailBlock = styled(PublishSection)``;

const ThumbnailSizer = styled.div`
  width: 100%;
  padding-top: 55.11%;
  position: relative;
`;

const ThumbnailBlock = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.03);
  cursor: pointer;
  .thumbnail-wrapper {
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: ${palette.gray2};
    .icon {
      width: 100%;
      height: 100%;
      color: ${palette.gray5};
    }
  }
`;

const UploadButton = styled.button`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.25rem 2rem;
  background: white;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.025);
  font-size: 1rem;
  line-height: 1.5;
  color: ${palette.cyan5};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.125s ease-in;
  font-weight: bold;
  &:focus {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  }
  &:hover {
    background: ${palette.gray0};
  }
`;

const PostInfo = styled.div<{ focus: boolean }>`
  margin-top: 1.5rem;
  h4 {
    line-height: 1.5;
    margin: 0;
    display: block;
    font-size: 1.125rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    margin-bottom: 1rem;
  }

  & > label {
    margin-top: 0.5rem;
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
`;

const ShortDescriptionTextarea = styled.textarea<{ focus: boolean }>`
  resize: none;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid ${palette.gray8};
  line-height: 1.5;
  font-size: 1rem;
  height: 2.5rem;
  margin-top: 0.5rem;
  ${props =>
    props.focus &&
    css`
      border-bottom: 1px solid ${palette.cyan7};
    `}
`;

interface ThumbnailProps {}
const Thumbnail: React.SFC<ThumbnailProps> = () => {
  return (
    <ThumbnailSizer>
      <ThumbnailBlock>
        <div className="thumbnail-wrapper">
          <ThumbnailIcon className="icon" />
          <UploadButton>썸네일 업로드</UploadButton>
        </div>
      </ThumbnailBlock>
    </ThumbnailSizer>
  );
};

interface PublishThumbnailProps {}
const PublishThumbnail: React.SFC<PublishThumbnailProps> = () => {
  const [focus, setFocus] = React.useState(false);

  const onFocus = React.useCallback(() => {
    setFocus(true);
  }, [focus]);

  const onBlur = React.useCallback(() => {
    setFocus(false);
  }, [focus]);

  return (
    <PublishThumbnailBlock title="썸네일">
      <Thumbnail />
      <PostInfo focus={focus}>
        <h4>여기에 타이틀을 적용한다.</h4>
        <label>간단한 소개</label>
        <ShortDescriptionTextarea
          focus={focus}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <InputTags
          label="태그"
          tags={[]}
          onInsert={() => ({})}
          onRemove={() => ({})}
        />
      </PostInfo>
    </PublishThumbnailBlock>
  );
};

export default PublishThumbnail;
