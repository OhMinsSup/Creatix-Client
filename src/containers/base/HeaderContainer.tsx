import React from 'react';
import Header from '../../components/base/Header';
import { getScrollTop } from '../../lib/utils';
import { connect } from 'react-redux';
import { openAuthModal } from '../../store/modules/base';
import { StoreState } from '../../store/modules';
import { Mutation, MutationFn } from 'react-apollo';
import { LOG_USER_OUT } from '../../lib/graphql/shared/shared.querie';
import LogOutMutation from '../../lib/graphql/mutations/auth/logout/logout.mutation';
import { LOTOUT } from '../../lib/graphql/mutations/auth/logout/logout.querie';
import { logout } from '../../lib/graphql/mutations/auth/logout/logout.typing';

interface OwnProps {}
interface StateProps {
  width: number;
  logged: boolean;
}
interface DispatchProps {
  openAuthModal: typeof openAuthModal;
}
type HeaderContainerProps = StateProps & DispatchProps & OwnProps;

const { useEffect, useCallback, useState } = React;

const HeaderContainer: React.SFC<HeaderContainerProps> = ({
  width,
  logged,
  openAuthModal,
}) => {
  let logOutMutationFn: MutationFn<logout, null>;
  const [floating, setFloating] = useState(false);

  const onScroll = useCallback(() => {
    const scrollTop = getScrollTop();
    if (floating && scrollTop === 0) {
      setFloating(false);
      return;
    }
    setFloating(true);
  }, [floating]);

  const onLogOut = () => {
    logOutMutationFn();
    window.location.href = '/';
  };

  const onAuthModalOpen = () => {
    openAuthModal();
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    const reset = () => {
      document.removeEventListener('scroll', onScroll);
    };
    return reset;
  });

  return (
    <Mutation mutation={LOG_USER_OUT}>
      {logUserOut => (
        <LogOutMutation
          mutation={LOTOUT}
          onCompleted={data => {
            const {
              LogOut: { ok },
            } = data;
            if (ok) {
              logUserOut();
            }
          }}
        >
          {logOut => {
            logOutMutationFn = logOut;
            return (
              <Header
                width={width}
                floating={floating}
                onAuthModalOpen={onAuthModalOpen}
                user={logged}
                onLogOut={onLogOut}
              />
            );
          }}
        </LogOutMutation>
      )}
    </Mutation>
  );
};

export default connect<StateProps, DispatchProps, OwnProps, StoreState>(
  ({ base, auth }) => ({
    logged: !!(auth.user && auth.user),
    width: base.layer.width,
  }),
  {
    openAuthModal,
  },
)(HeaderContainer);
