import React from 'react';
import styled from 'styled-components';
import IllustrationList from '../../containers/list/IllustrationList';
import { RouteComponentProps } from 'react-router';

const IllustrationPageBlock = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  position: relative;
`;

interface IllustrationPageProps extends RouteComponentProps {}

const IllustrationPage: React.SFC<IllustrationPageProps> = () => (
  <IllustrationPageBlock>
    <IllustrationList />
  </IllustrationPageBlock>
);

export default IllustrationPage;
