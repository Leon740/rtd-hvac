import { type ReactNode } from 'preact/compat';

interface ILinkMinProps {
  tag: 'a' | 'button';
  buttonType?: 'button' | 'submit';
  href?: string;
  isExternal: boolean;
  className?: string;
  children: ReactNode;
}

export function Link({
  tag,
  buttonType = 'button',
  href,
  isExternal = false,
  className = '',
  children
}: ILinkMinProps) {
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
