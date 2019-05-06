import * as React from 'react';
import styled from 'styled-components';
import PublishSection from './PublishSection';
import { FaPlus as PlusIcon } from 'react-icons/fa';
import palette from '../../../lib/styles/palette';

const PublishSeriesSectionBlock = styled(PublishSection)``;
const SeriesButton = styled.button`
  height: 3rem;
  width: 100%;
  border-radius: 4px;
  background-color: white;
  border: 1px solid ${palette.cyan5};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${palette.cyan5};
  font-size: 1.125rem;
  font-weight: bold;
  cursor: pointer;
  svg {
    margin-right: 0.875rem;
  }
  &:hover {
    background: ${palette.cyan5};
    color: white;
  }
`;
export interface PublishSeriesSectionProps {}

const PublishSeriesSection: React.FC<PublishSeriesSectionProps> = () => {
  return (
    <PublishSeriesSectionBlock title="시리즈 설정">
      <SeriesButton>
        <PlusIcon />
        시리즈에 추가하기
      </SeriesButton>
    </PublishSeriesSectionBlock>
  );
};

export default PublishSeriesSection;
