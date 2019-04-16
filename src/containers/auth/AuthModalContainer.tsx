import React from 'react';
import AuthModal from '../../components/auth/AuthModal';
import AuthForm from '../../components/auth/AuthForm';
import { connect } from 'react-redux';
import { closeAuthModal } from '../../store/modules/base';
import { StoreState } from 'store';

interface OwnProps {}
interface StateProps {
  visible: boolean;
}
interface DispatchProps {
  closeAuthModal: typeof closeAuthModal;
}
type AuthModalContainerProps = StateProps & DispatchProps & OwnProps;

const AuthModalContainer: React.SFC<AuthModalContainerProps> = ({
  visible,
  closeAuthModal,
}) => {
  const onAuthModalClose = () => {
    closeAuthModal();
  };
  return (
    <AuthModal visible={visible} onAuthModalClose={onAuthModalClose}>
      <AuthForm />
    </AuthModal>
  );
};

export default connect<StateProps, DispatchProps, OwnProps, StoreState>(
  state => ({
    visible: state.base.auth_modal.visible,
  }),
  {
    closeAuthModal,
  },
)(AuthModalContainer);
