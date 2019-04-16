import React from 'react';
import Header from '../../components/base/Header';
import { getScrollTop } from '../../lib/utils';
import { connect } from 'react-redux';
import { openAuthModal } from '../../store/modules/base';
import { StoreState } from 'store';

interface OwnProps {}
interface StateProps {}
interface DispatchProps {
  openAuthModal: typeof openAuthModal;
}
type HeaderContainerProps = StateProps & DispatchProps & OwnProps;

const { useEffect, useCallback, useState } = React;

const HeaderContainer: React.SFC<HeaderContainerProps> = ({
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

  return <Header floating={floating} onAuthModalOpen={onAuthModalOpen} />;
};

export default connect<StateProps, DispatchProps, OwnProps, StoreState>(
  () => ({}),
  {
    openAuthModal,
  },
)(HeaderContainer);
