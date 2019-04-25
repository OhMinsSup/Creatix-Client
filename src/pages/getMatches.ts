import { matchPath, RouteProps } from 'react-router';
import MainPage from './main/MainPage';
import IllustWritePage from './write/IllustWritePage';
import BooksWritePage from './write/BooksWritePage';

const config: RouteProps[] = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/write/illust',
    component: IllustWritePage,
  },
  {
    path: '/write/books',
    component: BooksWritePage,
  },
];

export function getMatches(path: string) {
  return config
    .map(r => {
      const match = matchPath(path, r);
      if (!match) return null;
      return {
        match,
        component: r.component,
      };
    })
    .filter(Boolean);
}
