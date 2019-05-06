import auth, { setRegisterToken, setUserData } from '../auth';

const reducer = auth;

describe('auth reducer', () => {
  const getInitialState = () => reducer(undefined, {} as any);
  it('hould return the initial state', () => {
    const state = getInitialState();
    expect(state).toEqual({
      register: null,
      user: null,
    });
  });

  describe('action handlers', () => {
    it('SET_REGISTER_TOKEN', () => {
      let state = getInitialState();
      state = reducer(
        state,
        setRegisterToken({ email: 'test@naver.com', register_token: 'token' }),
      );
      const email = state.register && state.register.email;
      const token = state.register && state.register.register_token;
      expect(email).toBe('test@naver.com');
      expect(token).toBe('token');
    });
    it('SET_USER_DATA', () => {
      const userData = {
        id: 'id',
        email: 'email',
        username: 'username',
        display_name: 'display_name',
        thumbnail: 'thumbnail',
      };
      let state = getInitialState();
      state = reducer(
        state,
        setUserData({
          user: userData,
        }),
      );
      expect(state.user && state.user).toBe(userData);
    });
  });
});
