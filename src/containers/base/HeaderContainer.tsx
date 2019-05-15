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
const HeaderContainer: React.SFC<HeaderContainerProps> = ({
  width,
  logged,
  openAuthModal,
}) => {
  let logOutMutationFn: MutationFn<logout, null>;
  const lastY = React.useRef(0);
  const direction = React.useRef<null | 'UP' | 'DOWN'>(null);

  const [floating, setFloating] = React.useState(false);
  const [baseY, setBaseY] = React.useState(0);
  const [floatingMargin, setFloatingMargin] = React.useState(-60);

  const onScroll = React.useCallback(() => {
    const scrollTop = getScrollTop();
    if (floating && scrollTop === 0) {
      setFloating(false);
      setFloatingMargin(-60);
      return;
    }

    if (floating) {
      const calculated = -60 + baseY - scrollTop;
      setFloatingMargin(calculated > 0 ? 0 : calculated);
    }

    const d = scrollTop < lastY.current ? 'UP' : 'DOWN';

    if (
      d !== direction.current &&
      (floatingMargin === 0 || floatingMargin <= -60)
    ) {
      setBaseY(scrollTop + (d === 'DOWN' ? 60 : 0));
    }

    // turns floating ON
    if (direction.current !== 'UP' && d === 'UP' && scrollTop > 120) {
      setFloating(true);
    }

    direction.current = d;
    lastY.current = scrollTop;
  }, [baseY, floating, floatingMargin]);

  React.useEffect(() => {
    document.addEventListener('scroll', onScroll);
    const reset = () => {
      document.removeEventListener('scroll', onScroll);
    };
    return reset;
  }, [floating, baseY, floatingMargin, onScroll]);

  const onLogOut = () => {
    logOutMutationFn();
    window.location.href = '/';
  };

  const onAuthModalOpen = () => {
    openAuthModal();
  };

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
