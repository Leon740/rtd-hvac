import { Children, type ReactNode } from 'preact/compat';

interface ILinkMinProps {
  tag: 'a' | 'button';
  buttonType: 'button' | 'submit';
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
      <a href={href} class={className} target="_blank" rel="noopener norefferer">
        {children}
      </a>
    ) : (
      <a href={href} class={className}>
        {children}
      </a>
    )
  ) : (
    <button type={buttonType} className={className}>
      {children}
    </button>
  );
}
