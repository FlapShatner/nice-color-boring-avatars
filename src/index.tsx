import React from 'react';
import colors from './colors';
import Avatar, { AvatarProps } from 'boring-avatars';

interface GeneratedAvatarProps {
  name: string;
  size?: number;
  className?: string;
  variant?: AvatarProps['variant'];
}

function GeneratedAvatar({
  name,
  size,
  variant,
  className,
}: GeneratedAvatarProps) {
  const colorsArray = (name: string) => {
    const colorHash = getColorHash(name ?? '');
    return colors[colorHash];
  };

  function getColorHash(name: string): number {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      const char = name.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0; // Convert to 32bit integer
    }
    // Ensure the hash is non-negative, then scale it to the 1-100 range
    const scaledHash = (Math.abs(hash) % 100) + 1;
    return scaledHash;
  }

  return (
    <Avatar
      className={className ?? 'boring-avatar'}
      size={size ?? 40}
      name={name ?? 'default'}
      variant={variant ?? 'marble'}
      colors={colorsArray(name)}
    />
  );
}

export default GeneratedAvatar;
