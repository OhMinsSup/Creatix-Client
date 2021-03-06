import * as React from 'react';
import styled, { css } from 'styled-components';
import PublishSection from './PublishSection';
import palette from '../../../lib/styles/palette';
import {
  TiLockClosedOutline as LockIcon,
  TiWorld as WorldIcon,
} from 'react-icons/ti';

const PublishPrivacySettingBlock = styled(PublishSection)`
  outline: none;
  border: none;
  .contents {
    display: flex;
  }
`;

const Button = styled.button<{ active: boolean }>`
  outline: none;
  border: none;
  flex: 1;
  height: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: bold;
  font-size: 1.125rem;
  color: ${palette.gray6};
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.05);
  padding: 0;
  padding-left: 1rem;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${palette.cyan5};
    color: white;
  }
  ${props =>
    props.active &&
    css`
      border: solid 1px ${palette.cyan5};
      color: ${palette.cyan5};
    `}
  svg {
    margin-right: 1.5rem;
  }
  & + & {
    margin-left: 1rem;
  }
`;

export enum PrivacySetting {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC',
}
export interface PublishPrivacySettingProps {
  selected: PrivacySetting;
  onSelect: (value: PrivacySetting) => any;
}

const PublishPrivacySetting: React.SFC<PublishPrivacySettingProps> = ({
  selected,
  onSelect,
}) => {
  return (
    <PublishPrivacySettingBlock title="공개 설정">
      <Button active={selected === PrivacySetting.PUBLIC}>
        <WorldIcon />
        전체 공개
      </Button>
      <Button active={selected === PrivacySetting.PRIVATE}>
        <LockIcon />
        나만 보기
      </Button>
    </PublishPrivacySettingBlock>
  );
};

export default PublishPrivacySetting;
