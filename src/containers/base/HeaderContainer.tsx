import React from 'react';
import Header from '../../components/base/Header';
import { getScrollTop } from '../../lib/utils';

interface HeaderContainerProps {}

const { useEffect, useCallback, useState } = React;

const HeaderContainer: React.SFC<HeaderContainerProps> = () => {
  const [floating, setFloating] = useState(false);

  const onScroll = useCallback(() => {
    const scrollTop = getScrollTop();
    if (floating && scrollTop === 0) {
      setFloating(false);
      return;
    }
    setFloating(true);
  }, [floating]);

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    const reset = () => {
      document.removeEventListener('scroll', onScroll);
    };
    return reset;
  });

  return <Header floating={floating} />;
};

export default HeaderContainer;
