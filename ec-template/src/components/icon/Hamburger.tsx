import { React } from '@nextui-org/react';

export const Hamburger = ({
  fill = 'currentColor',
  filled,
  size,
  height,
  width,
  label,
  ...props
}: any) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size || width || 24}
      height={size || height || 24}
      fill={fill}
      {...props}
    >
      <path
        fill={fill}
        d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
      ></path>
    </svg>
  );
};
