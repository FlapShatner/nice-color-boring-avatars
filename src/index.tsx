import React from 'react';
import colors from './colors';
import Avatar, { AvatarProps } from 'boring-avatars';

interface GeneratedAvatarProps {
  input: string;
  size?: number;
  className?: string;
  variant?: AvatarProps['variant'];
}

function GeneratedAvatar({
  input,
  size,
  variant,
  className,
}: GeneratedAvatarProps) {
  const colorsArray = (input: string) => {
    const colorHash = getColorHash(input ?? '');
    return colors[colorHash];
  };

  function getColorHash(input: string): number {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
      const char = input.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0; // Convert to 32bit integer
    }
    // Ensure the hash is non-negative, then scale it to the 1-100 range
    const scaledHash = (Math.abs(hash) % 100) + 1;
    return scaledHash;
  }

  return (
    <Avatar
      className={className}
      size={size ?? 40}
      name={input ?? 'default'}
      variant={variant ?? 'marble'}
      colors={colorsArray(input)}
    />
  );
}

export default GeneratedAvatar;
