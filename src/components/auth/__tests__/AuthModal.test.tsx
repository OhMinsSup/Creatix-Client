import * as React from 'react';
import { render, fireEvent } from 'react-testing-library';
import AuthModal, { AuthModalProps } from '../AuthModal';

describe('AuthModal', () => {
  const setup = (props: Partial<AuthModalProps> = {}) => {
    const initialProps: AuthModalProps = {
      visible: false,
      onAuthModalClose: () => {},
    };
    return render(<AuthModal {...initialProps} {...props} />);
  };

  it('renders properly', () => {
    setup();
  });

  it('matches visible false snapshot', () => {
    const { container } = setup({
      visible: false,
    });
    expect(container).toMatchSnapshot();
  });

  it('matches visible true snapshot', () => {
    const { container } = setup({
      visible: true,
    });
    expect(container).toMatchSnapshot();
  });

  it('calls onToggleMode', () => {
    const onAuthModalClose = jest.fn();
    const { container } = setup({
      visible: true,
      onAuthModalClose,
    });

    const anchor = container.querySelector('svg');
    expect(anchor).toBeTruthy();
    if (!anchor) return;
    fireEvent.click(anchor);
    expect(onAuthModalClose.mock.calls.length).toBe(1);
  });
});
