import React from 'react';
import { RouteComponentProps } from 'react-router';
import WriteBooksContainer from '../../containers/wrtie/WriteBooksContainer';
import WriteBooksTemplate from '../../components/write/books/WriteBooksTemplate';

interface BooksWritePageProps extends RouteComponentProps {}
const BooksWritePage: React.SFC<BooksWritePageProps> = () => (
  <WriteBooksTemplate>
    <WriteBooksContainer />
  </WriteBooksTemplate>
);

export default BooksWritePage;
