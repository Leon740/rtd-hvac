import { type ReactNode } from 'preact/compat';

export interface ILinkProps {
  tag: 'a' | 'button';
  buttonType?: 'button' | 'submit';
  href?: string;
  isExternal?: boolean;
  className?: string;
  children: ReactNode;
}

export function Link({
  tag = 'a',
  buttonType = 'button',
  href,
  isExternal = false,
  className = '',
  children
}: ILinkProps) {
  return tag === 'a' && href ? (
    isExternal ? (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <a href={href} className={className}>
        {children}
      </a>
    )
  ) : (
    // eslint-disable-next-line react/button-has-type
    <button type={buttonType} className={className}>
      {children}
    </button>
  );
}
