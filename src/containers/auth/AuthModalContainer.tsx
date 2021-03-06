import React from 'react';
import { connect } from 'react-redux';
import { MutationFn } from 'react-apollo';
import { toast } from 'react-toastify';
import AuthModal from '../../components/auth/AuthModal';
import AuthForm from '../../components/auth/AuthForm';
import { closeAuthModal, changeAuthModalMode } from '../../store/modules/base';
import SendAuthEmailMutation from '../../lib/graphql/mutations/auth/sendAuthEmail/sendAuthEmail.mutation';
import { SEND_AUTH_EMAIL } from '../../lib/graphql/mutations/auth/sendAuthEmail/sendAuthEmail.querie';
import {
  sendAuthEmail,
  sendAuthEmailVariables,
} from '../../lib/graphql/mutations/auth/sendAuthEmail/sendAuthEmail.typing';
import { StoreState } from '../../store/modules';

interface OwnProps {}
interface StateProps {
  visible: boolean;
  mode: 'LOGIN' | 'REGISTER';
}
interface DispatchProps {
  closeAuthModal: typeof closeAuthModal;
  changeAuthModalMode: typeof changeAuthModalMode;
}
type AuthModalContainerProps = StateProps & DispatchProps & OwnProps;

const AuthModalContainer: React.SFC<AuthModalContainerProps> = ({
  visible,
  mode,
  changeAuthModalMode,
  closeAuthModal,
}) => {
  let sendAuthEmailFn: MutationFn<sendAuthEmail, sendAuthEmailVariables>;
  const [registered, setRegistered] = React.useState<boolean | null>(null);

  const onAuthModalClose = () => {
    closeAuthModal();
  };

  const onToggleMode = React.useCallback(() => {
    const nextMode = mode === 'REGISTER' ? 'LOGIN' : 'REGISTER';
    changeAuthModalMode(nextMode);
  }, [mode]);

  const onSendAuthEmail = (email: string) => {
    const validation = {
      emailEmpty: (text: string) => {
        if (text === '') {
          toast.error('이메일을 입력해주세요');
          return true;
        }
        return false;
      },
      emailValidate: (text: string) => {
        const regExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
        if (!regExp.test(text)) {
          toast.error('이메일 형식이 올바르지 않습니다.');
          return true;
        }
        return false;
      },
    };

    const error =
      validation.emailEmpty(email) || validation.emailValidate(email);
    if (error) return;

    sendAuthEmailFn({
      variables: {
        email,
      },
    });
  };

  return (
    <AuthModal visible={visible} onAuthModalClose={onAuthModalClose}>
      <SendAuthEmailMutation
        mutation={SEND_AUTH_EMAIL}
        onCompleted={data => {
          const { SendAuthEmail } = data;
          if (SendAuthEmail.ok && !SendAuthEmail.error) {
            setRegistered(SendAuthEmail.registered);
          }
        }}
      >
        {(sendAuthEmail, { loading }) => {
          sendAuthEmailFn = sendAuthEmail;
          return (
            <AuthForm
              mode={mode}
              loading={loading}
              registered={registered}
              onToggleMode={onToggleMode}
              onSendAuthEmail={onSendAuthEmail}
            />
          );
        }}
      </SendAuthEmailMutation>
    </AuthModal>
  );
};

export default connect<StateProps, DispatchProps, OwnProps, StoreState>(
  state => ({
    visible: state.base.auth_modal.visible,
    mode: state.base.auth_modal.mode,
  }),
  {
    closeAuthModal,
    changeAuthModalMode,
  },
)(AuthModalContainer);
