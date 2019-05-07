import React from 'react';
import { render } from 'react-testing-library';
import LoginPage, { LoginPageProps } from '../LoginPage';

describe('LoginPage', () => {
  const setup = (props: Partial<LoginPageProps> = {}) => {
    const initialProps: LoginPageProps = {
      text: '',
      loading: false,
    };
    return render(<LoginPage {...initialProps} {...props} />);
  };

  it('renders properly', () => {
    setup();
  });

  it('print text', () => {
    const { getByText } = setup({
      text: '연결중...',
    });
    getByText(/연결중.../);
  });

  it('loading is true', () => {
    const { container } = setup({
      loading: true,
    });

    const anchor = container.querySelector('p');
    expect(anchor).toBeTruthy();
  });

  it('loading is false', () => {
    const { container } = setup({
      loading: false,
    });

    const anchor = container.querySelector('p');
    expect(anchor).toBeTruthy();
  });
});
