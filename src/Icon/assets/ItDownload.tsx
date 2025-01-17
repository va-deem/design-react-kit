import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const component = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      role='img'
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{'Download'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d='M12 14.2 7.7 9.9l.7-.7 3.1 3.1V3h1v9.2l3.1-3 .7.7Zm7-2.2v7.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V12H4v7.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V12Z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
