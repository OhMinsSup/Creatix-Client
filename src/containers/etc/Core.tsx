import React from 'react';
import { throttle } from 'lodash';
import { connect } from 'react-redux';
import GalleryViewerContainer from '../base/GalleryViewerContainer';
import { StoreState } from '../../store/modules';
import { setWidth } from '../../store/modules/base';
import { setUserData } from '../../store/modules/auth';
import CheckUserQuery from '../../lib/graphql/querys/checkUser/checkUser.query';
import { CHECK_USER } from '../../lib/graphql/querys/checkUser/checkUser.querie';
import StorageProvider from '../../lib/StorageProvider';

const storage = StorageProvider.localStorage('creatix');
const logged = !!(storage.get('access_token') && storage.get('user'));

interface OwnProps {}
interface StateProps {
  grally: boolean;
}
interface DispatchProps {
  setWidth: typeof setWidth;
  setUserData: typeof setUserData;
}
type CoreProps = StateProps & DispatchProps & OwnProps;

const Core: React.SFC<CoreProps> = ({ grally, setWidth, setUserData }) => {
  const onResize = throttle(() => {
    setWidthFunc();
  }, 250);

  const setWidthFunc = () => {
    if (typeof window === 'undefined') return;
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener('resize', onResize);
  });

  return (
    <React.Fragment>
      {logged ? (
        <CheckUserQuery
          query={CHECK_USER}
          onCompleted={data => {
            const { CheckUser } = data;
            const accessToken = storage.get('access_token');
            if (accessToken && (CheckUser.ok && !CheckUser.error)) {
              const user = Object.assign({}, CheckUser.user);
              setUserData({ user });
            } else if (!CheckUser.ok && CheckUser.error) {
              storage.del('access_token');
              storage.del('refresh_token');
            }
          }}
          onError={() => {
            storage.del('access_token');
            storage.del('refresh_token');
          }}
        >
          {() => null}
        </CheckUserQuery>
      ) : null}
      <GalleryViewerContainer grally={grally} />
    </React.Fragment>
  );
};

export default connect<StateProps, DispatchProps, OwnProps, StoreState>(
  ({ base }) => ({
    grally: base.grally.visible,
  }),
  {
    setWidth,
    setUserData,
  },
)(Core);
