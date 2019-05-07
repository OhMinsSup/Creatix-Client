import React from 'react';
import { render } from 'react-testing-library';
import AuthSocialButton, { AuthSocialButtonProps } from '../AuthSocialButton';

describe('AuthSocialButton', () => {
  const setup = (props: Partial<AuthSocialButtonProps> = {}) => {
    const initialProps: AuthSocialButtonProps = {
      provider: 'facebook',
      tabIndex: 4,
    };
    return render(<AuthSocialButton {...initialProps} {...props} />);
  };

  it('renders properly', () => {
    setup();
  });

  it('renders correctly', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it('gives facebook background style to AuthSocialButton', () => {
    const { container } = setup({
      provider: 'facebook',
    });

    const facebook = container.querySelector('button');
    expect(facebook && facebook.style.background).toEqual('rgb(59, 89, 152)');
  });

  it('gives google background style to AuthSocialButton', () => {
    const { container } = setup({
      provider: 'google',
    });

    const google = container.querySelector('button');
    expect(google && google.style.background).toEqual('rgb(240, 62, 62)');
  });

  it('gives github background style to AuthSocialButton', () => {
    const { container } = setup({
      provider: 'github',
    });

    const github = container.querySelector('button');
    expect(github && github.style.background).toEqual('rgb(39, 46, 51)');
  });
});
