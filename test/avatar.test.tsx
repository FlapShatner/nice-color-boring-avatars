import React from 'react';
import { render } from '@testing-library/react';
import GeneratedAvatar from '../src/index';
import '@testing-library/jest-dom';

describe('GeneratedAvatar Component', () => {
  it('renders with default props', () => {
    const { container } = render(<GeneratedAvatar name="test" />);
    expect(container.firstChild).toHaveClass('boring-avatar');
    expect(container.firstChild).toHaveAttribute('width', '40');
    expect(container.firstChild).toHaveAttribute('height', '40');
  });

  it('applies custom size', () => {
    const { container } = render(<GeneratedAvatar name="test" size={50} />);
    expect(container.firstChild).toHaveAttribute('width', '50');
    expect(container.firstChild).toHaveAttribute('height', '50');
  });

  it('applies custom className', () => {
    const { container } = render(<GeneratedAvatar name="test" className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

});