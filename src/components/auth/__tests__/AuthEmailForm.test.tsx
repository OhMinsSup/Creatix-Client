import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import AuthEmailForm, { AuthEmailFormProps } from '../AuthEmailForm';

describe('AuthEmailForm', () => {
  const setup = (props: Partial<AuthEmailFormProps> = {}) => {
    const initialProps: AuthEmailFormProps = {
      value: '',
      mode: 'LOGIN',
      disabled: false,
      onSubmit: (value: string) => {},
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
    };
    const utils = render(<AuthEmailForm {...initialProps} {...props} />);

    const email = utils.getByPlaceholderText(
      /이메일을 입력하세요./,
    ) as HTMLInputElement;

    const changeInput = () => {
      fireEvent.change(email, {
        target: {
          value: 'test@naver.com',
        },
      });
    };

    return {
      ...utils,
      email,
      changeInput,
    };
  };
  it('renders properly', () => {
    setup();
  });

  it('calls onSubmit', () => {
    const onSubmit = jest.fn();
    const utils = setup({
      mode: 'REGISTER',
      value: 'test@naver.com',
      onSubmit,
    });

    const form = utils.getByText('회원가입');
    fireEvent.submit(form);
    expect(onSubmit).toBeCalledWith('test@naver.com');
  });

  describe('button Click Mode Change', () => {
    it('LOGIN', () => {
      const { getAllByText } = setup({ mode: 'LOGIN' });
      getAllByText('로그인');
    });

    it('REGISTER', () => {
      const { getAllByText } = setup({ mode: 'REGISTER' });
      getAllByText('회원가입');
    });
  });
});
