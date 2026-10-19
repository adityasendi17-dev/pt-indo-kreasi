import React from 'react';

interface PixelIconProps {
  type: 'gamepad' | 'design' | 'pixel-art' | 'ui-ux' | 'interactive' | 'spark' | 'circuit' | 'users' | 'shield' | 'star' | 'sword' | 'portal';
  className?: string;
  size?: number;
}

export const PixelIcon: React.FC<PixelIconProps> = ({ type, className = '', size = 24 }) => {
  switch (type) {
    case 'gamepad':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          {/* Pixelated Gamepad */}
          <rect x="2" y="7" width="20" height="10" rx="0" />
          <rect x="4" y="5" width="16" height="14" rx="0" />
          {/* D-Pad (Left) */}
          <rect x="5" y="10" width="6" height="2" fill="#060B14" />
          <rect x="7" y="8" width="2" height="6" fill="#060B14" />
          {/* Action Buttons (Right) */}
          <rect x="15" y="9" width="2" height="2" fill="#060B14" />
          <rect x="18" y="11" width="2" height="2" fill="#060B14" />
          <rect x="15" y="13" width="2" height="2" fill="#060B14" />
          {/* Center Start/Select */}
          <rect x="11" y="11" width="2" height="1" fill="#060B14" />
        </svg>
      );

    case 'design':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          {/* Pixelated Blueprint / Ruler & Compass */}
          <rect x="3" y="3" width="18" height="2" />
          <rect x="3" y="3" width="2" height="18" />
          <rect x="3" y="19" width="18" height="2" />
          <rect x="19" y="3" width="2" height="18" />
          <rect x="8" y="8" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="11" y="11" width="2" height="2" />
          <rect x="6" y="6" width="2" height="2" />
          <rect x="16" y="16" width="2" height="2" />
        </svg>
      );

    case 'pixel-art':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          {/* Pixel Palette / Sprite Grid */}
          <rect x="2" y="2" width="5" height="5" />
          <rect x="9" y="2" width="5" height="5" />
          <rect x="16" y="2" width="5" height="5" />
          <rect x="2" y="9" width="5" height="5" />
          <rect x="9" y="9" width="5" height="5" opacity="0.6" />
          <rect x="16" y="9" width="5" height="5" />
          <rect x="2" y="16" width="5" height="5" />
          <rect x="9" y="16" width="5" height="5" />
          <rect x="16" y="16" width="5" height="5" />
        </svg>
      );

    case 'ui-ux':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          {/* Pixelated Screen with HUD elements */}
          <rect x="2" y="3" width="20" height="14" />
          <rect x="4" y="5" width="16" height="10" fill="#060B14" />
          {/* Health Bar */}
          <rect x="6" y="7" width="5" height="2" fill="currentColor" />
          {/* Mini Minimap */}
          <rect x="15" y="7" width="3" height="3" fill="currentColor" />
          {/* Pedestal */}
          <rect x="10" y="17" width="4" height="3" />
          <rect x="6" y="20" width="12" height="2" />
        </svg>
      );

    case 'interactive':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          aria-hidden="true"
        >
          {/* Pixelated Spark / Portal Energy */}
          <rect x="11" y="2" width="2" height="4" />
          <rect x="11" y="18" width="2" height="4" />
          <rect x="2" y="11" width="4" height="2" />
          <rect x="18" y="11" width="4" height="2" />
          <rect x="6" y="6" width="2" height="2" />
          <rect x="16" y="6" width="2" height="2" />
          <rect x="6" y="16" width="2" height="2" />
          <rect x="16" y="16" width="2" height="2" />
          <rect x="9" y="9" width="6" height="6" />
        </svg>
      );

    case 'spark':
      return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className}>
          <rect x="7" y="1" width="2" height="4" />
          <rect x="7" y="11" width="2" height="4" />
          <rect x="1" y="7" width="4" height="2" />
          <rect x="11" y="7" width="4" height="2" />
          <rect x="5" y="5" width="6" height="6" />
        </svg>
      );

    case 'circuit':
      return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className}>
          <rect x="2" y="2" width="4" height="4" />
          <rect x="10" y="2" width="4" height="4" />
          <rect x="6" y="10" width="4" height="4" />
          <rect x="5" y="4" width="6" height="2" />
          <rect x="7" y="6" width="2" height="5" />
        </svg>
      );

    case 'users':
      return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className}>
          <rect x="3" y="2" width="4" height="4" />
          <rect x="9" y="2" width="4" height="4" />
          <rect x="1" y="7" width="8" height="7" />
          <rect x="7" y="7" width="8" height="7" />
        </svg>
      );

    case 'shield':
      return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className}>
          <rect x="2" y="2" width="12" height="3" />
          <rect x="3" y="5" width="10" height="4" />
          <rect x="4" y="9" width="8" height="3" />
          <rect x="6" y="12" width="4" height="2" />
          <rect x="7" y="14" width="2" height="1" />
        </svg>
      );

    default:
      return null;
  }
};
