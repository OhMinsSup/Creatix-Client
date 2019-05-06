import base, {
  setWidth,
  setError,
  openGrally,
  closeGrally,
  closeAuthModal,
  openAuthModal,
  changeAuthModalMode,
} from '../base';

const reducer = base;

describe('base reducer', () => {
  const getInitialState = () => reducer(undefined, {} as any);
  it('should return initialState', () => {
    const state = getInitialState();
    expect(state).toEqual({
      layer: {
        width: 1920,
      },
      error: null,
      grally: {
        visible: false,
      },
      auth_modal: {
        mode: 'LOGIN',
        visible: false,
      },
    });
  });

  describe('action handlers', () => {
    it('SET_WIDTH', () => {
      let state = getInitialState();
      state = reducer(state, setWidth(768));
      expect(state.layer.width).toBe(768);
    });

    it('SET_ERROR', () => {
      let state = getInitialState();
      state = reducer(state, setError({ name: 'ERROR', message: 'MESSAGE' }));
      const name = state.error && state.error.name;
      const message = state.error && state.error.message;
      expect(name).toBe('ERROR');
      expect(message).toBe('MESSAGE');
    });

    it('OPEN_GRALLY', () => {
      let state = getInitialState();
      state = reducer(state, openGrally());
      expect(state.grally.visible).toBe(true);
    });

    it('CLOSE_GRALLY', () => {
      let state = getInitialState();
      state = reducer(state, closeGrally());
      expect(state.grally.visible).toBe(false);
    });

    it('OPEN_AUTH_MODAL', () => {
      let state = getInitialState();
      state = reducer(state, openAuthModal());
      expect(state.auth_modal.visible).toBe(true);
    });

    it('CLOSE_AUTH_MODAL', () => {
      let state = getInitialState();
      state = reducer(state, closeAuthModal());
      expect(state.auth_modal.visible).toBe(false);
    });

    it('CHANGE_AUTH_MODAL_MODE(REGISTER)', () => {
      let state = getInitialState();
      state = reducer(state, changeAuthModalMode('REGISTER'));
      expect(state.auth_modal.mode).toBe('REGISTER');
    });

    it('CHANGE_AUTH_MODAL_MODE(LOGIN)', () => {
      let state = getInitialState();
      state = reducer(state, changeAuthModalMode('LOGIN'));
      expect(state.auth_modal.mode).toBe('LOGIN');
    });
  });
});
