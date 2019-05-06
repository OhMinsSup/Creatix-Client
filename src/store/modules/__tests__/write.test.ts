import write, { openPublish, closePublish } from '../write';

const reducer = write;

describe('wrtie reducer', () => {
  const getInitialState = () => reducer(undefined, {} as any);
  it('should return initialState', () => {
    const state = getInitialState();
    expect(state).toEqual({
      publish: false,
    });
  });

  describe('action handlers', () => {
    it('OPEN_PUBLISH', () => {
      let state = getInitialState();
      state = reducer(state, openPublish());
      expect(state.publish).toBe(true);
    });

    it('CLOSE_PUBLISH', () => {
      let state = getInitialState();
      state = reducer(state, closePublish());
      expect(state.publish).toBe(false);
    });
  });
});
