import React from 'react';
import Header from '../../components/base/Header';
import { getScrollTop } from '../../lib/utils';
import { connect } from 'react-redux';
import { openAuthModal } from '../../store/modules/base';
import { StoreState } from '../../store/modules';

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
  const [floating, setFloating] = useState(false);

  const onScroll = useCallback(() => {
    const scrollTop = getScrollTop();
    if (floating && scrollTop === 0) {
      setFloating(false);
      return;
    }
    setFloating(true);
  }, [floating]);

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
    <Header
      width={width}
      floating={floating}
      onAuthModalOpen={onAuthModalOpen}
      user={logged}
    />
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
