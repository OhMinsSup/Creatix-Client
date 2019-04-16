import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import AuthEmailSuccess from './AuthEmailSuccess';
import AuthEmailForm from './AuthEmailForm';
import useInput from '../../lib/hooks/userInput';
import AuthSocialButtonGroup from './AuthSocialButtonGroup';

const AuthFormBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.5;
  h2,
  h4 {
    margin: 0;
  }
  h2 {
    font-size: 1.3125rem;
    color: ${palette.gray8};
  }
  h4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: ${palette.gray6};
  }
  section {
    width: 350px;
    margin: 0 auto;
  }
  section + section {
    margin-top: 2.5rem;
  }
  .foot {
    text-align: center;
    margin-top: 2rem;
    span {
      margin-right: 0.25rem;
    }
    a {
      font-weight: bold;
      color: ${palette.cyan6};
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

interface AuthFormProps {}
const AuthForm: React.SFC<AuthFormProps> = ({}) => {
  const [email, onChangeEmail] = useInput('');
  const onSubmit = (email: string) => {
    console.log(email);
  };
  let registered = null;
  let loading = false;
  let mode: any = 'LOGIN';
  const modeText = mode === 'REGISTER' ? '회원가입' : '로그인';

  return (
    <AuthFormBlock>
      <div>
        <h2>{modeText}</h2>
        <section>
          <h4>이메일로 {modeText}</h4>
          {registered !== null ? (
            <AuthEmailSuccess registered={registered} />
          ) : (
            <AuthEmailForm
              value={email}
              onChange={onChangeEmail}
              onSubmit={onSubmit}
              mode={mode}
              disabled={loading}
            />
          )}
        </section>
        <section>
          <h4>소셜 계정으로 {modeText}</h4>
          <AuthSocialButtonGroup />
        </section>
      </div>
      <div className="foot">
        <span>
          {mode === 'LOGIN'
            ? '아직 회원이 아니신가요?'
            : '계정이 이미 있으신가요?'}
        </span>
        <a
          tabIndex={7}
          onClick={() => console.log('sds')}
          data-testid="switchmode"
        >
          {mode === 'LOGIN' ? '회원가입' : '로그인'}
        </a>
      </div>
    </AuthFormBlock>
  );
};

export default AuthForm;
